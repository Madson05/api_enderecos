import zod from "zod";

const enderecoSchema = zod.object({
  codigoBairro: zod.number(),
  nomeRua: zod.string(),
  numero: zod.string(),
  complemento: zod.string(),
  cep: zod.string().regex(/^\d{5}-\d{3}$/),
});

export const usuarioSchema = zod.object({
  nome: zod.string(),
  sobrenome: zod.string(),
  idade: zod.number(),
  login: zod.string(),
  senha: zod.string(),
  status: zod.number(),
  enderecos: zod.array(enderecoSchema),
});

export type UsuarioType = zod.infer<typeof usuarioSchema>;
