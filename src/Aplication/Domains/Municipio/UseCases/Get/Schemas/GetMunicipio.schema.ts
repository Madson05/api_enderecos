import zod from "zod";

export const getMunicipioSchema = zod.object({
  codigo_municipio: zod.string().optional(),
  codigo_UF: zod.string().optional(),
  nome: zod.string().optional(),
  status: zod.string().optional(),
});

export type GetMunicipioType = zod.infer<typeof getMunicipioSchema>;
