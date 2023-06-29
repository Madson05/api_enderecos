import zod from "zod";

export const UpdateMunicipioSchema = zod.object({
  codigo_UF: zod.number().min(1).max(2),
  nome: zod.string().min(1).max(100),
  status: zod.string().min(1).max(1),
});

export type UpdateMunicipioType = zod.infer<typeof UpdateMunicipioSchema>;