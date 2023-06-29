import zod from "zod";

export const GetBairroSchema = zod.object({
  codigo_bairro: zod.string().min(1),
  codigo_municipio: zod.string().min(1).max(999999999),
  nome: zod.string().min(1).max(100),
  status: zod.string().min(0).max(1),
});

export type GetBairroType = zod.infer<typeof GetBairroSchema>;