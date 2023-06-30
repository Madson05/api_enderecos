import zod from "zod";

export const GetPessoaSchema = zod.object({
  codigoPessoa: zod.string().optional(),
  login: zod.string().email("Email inválido").optional(),
  status: zod.string().min(1).max(2).optional(),
});

export type GetPessoaType = zod.infer<typeof GetPessoaSchema>;