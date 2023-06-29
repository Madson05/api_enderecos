import zod from "zod";

export const GetBairroSchema = zod.object({
  codigoMunicipio: zod.number().min(1).max(999999).optional(),
  codigoBairro: zod.number().min(1).max(999999).optional(),
  nome: zod.string().min(1).max(100).optional(),
  status: zod.number().min(1).max(1).optional(),
});

export type GetBairroType = zod.infer<typeof GetBairroSchema>;