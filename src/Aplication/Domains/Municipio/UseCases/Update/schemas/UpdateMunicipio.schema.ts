import zod from "zod";

export const UpdateMunicipioSchema = zod.object({
  codigo_municipio: zod.number().min(1),
  codigo_UF: zod.number().min(1).max(999999999),
  nome: zod.string().min(1).max(100),
  status: zod.number().min(0).max(1),
});

export type UpdateMunicipioType = zod.infer<typeof UpdateMunicipioSchema>;