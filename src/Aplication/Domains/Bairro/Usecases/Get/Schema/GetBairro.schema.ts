import zod from "zod";

export const GetBairroSchema = zod.object({
  codigo_bairro: zod.string().optional(),
  codigo_municipio: zod.string().optional(),
  nome: zod.string().optional(),
  status: zod.string().optional(),
});

export type GetBairroType = zod.infer<typeof GetBairroSchema>;