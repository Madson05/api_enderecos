import zod from "zod";

export const updateEnderecoSchema = zod.object({
  codigoEndereco: zod.number(),
  codigoBairro: zod.number(),
  nomeRua: zod.string(),
  numero: zod.string(),
  complemento: zod.string(),
  cep: zod.string().regex(/^\d{5}-\d{3}$/),
});

export const updatePessoaSchema = zod.object({
  codigoPessoa: zod.number(),
  nome: zod.string(),
  sobrenome: zod.string(),
  idade: zod.number(),
  login: zod.string(),
  senha: zod.string(),
  status: zod.number(),
  enderecos: zod.array(updateEnderecoSchema),
});

export type UpdatePessoaType = zod.infer<typeof updatePessoaSchema>;
export type UpdateEnderecoType = zod.infer<typeof updateEnderecoSchema>;
