import zod from "zod";

export const createEnderecoSchema = zod.object({
  codigoBairro: zod.number(),
  nomeRua: zod.string(),
  numero: zod.string(),
  complemento: zod.string(),
  cep: zod.string().regex(/^\d{5}-\d{3}$/),
});

export const createUsuarioSchema = zod.object({
  nome: zod.string(),
  sobrenome: zod.string(),
  idade: zod.number(),
  login: zod.string().email("Email inválido"),
  senha: zod.string(),
  status: zod.number(),
  enderecos: zod.array(createEnderecoSchema).nonempty("O campo endereços é obrigatorio e deve conter pelo menos um endereço"),
});

export type CreateUsuarioType = zod.infer<typeof createUsuarioSchema>;
export type CreateEnderecoType = zod.infer<typeof createEnderecoSchema>;
