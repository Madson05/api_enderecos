import zod from "zod";

export const GetBairroSchema = zod.object({
  codigoBairro: zod.string().optional(),
  codigoMunicipio: zod.string().optional(),
  nome: zod.string().optional(),
  status: zod.string().optional(),
});

export type GetBairroType = zod.infer<typeof GetBairroSchema>;