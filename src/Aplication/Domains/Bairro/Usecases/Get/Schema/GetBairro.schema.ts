import zod from "zod";

export const GetBairroSchema = zod.object({
  codigo_bairro: zod.string().min(1).optional(),
  codigo_municipio: zod.string().min(1).max(999999999).optional(),
  nome: zod.string().min(1).max(100).optional(),
  status: zod.string().min(0).max(1).optional(),
});

export type GetBairroType = zod.infer<typeof GetBairroSchema>;