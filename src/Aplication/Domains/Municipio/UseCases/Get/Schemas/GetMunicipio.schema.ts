import zod from "zod";

export const getMunicipioSchema = zod.object({
  codigoMunicipio: zod.string().optional(),
  codigoUF: zod.string().optional(),
  nome: zod.string().optional(),
  status: zod.string().optional(),
});

export type GetMunicipioType = zod.infer<typeof getMunicipioSchema>;
