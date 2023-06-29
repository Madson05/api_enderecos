import zod from "zod";

export const CreateMunicipioSchema = zod.object({
  codigo_municipio: zod
    .number()
    .min(1, "O codigo do municipio deve ser maior que 0"),
  codigo_UF: zod
    .number()
    .min(1, "O codigo da UF deve ser maior que 0"),
  nome: zod
    .string()
    .max(60, "O nome do municipio deve ter no maximo 60 caracteres")
    .nonempty("O nome do municipio não pode ser vazio"),
  status: zod
    .number()
    .min(0, "O status do municipio deve ser 0 ou 1")
    .max(1, "O status do municipio deve ser 0 ou 1"),
});

export type CreateMunicipioType = zod.infer<typeof CreateMunicipioSchema>;
