import zod from "zod";

export const CreateMunicipioSchema = zod.object({
  codigoUF: zod
    .number()
    .min(1, "O codigo da UF deve ser maior que 0")
    .max(999999999, "O codigo da UF deve ser menor que 999999999"),
  nome: zod
    .string()
    .max(256, "O nome do municipio deve ter no maximo 256 caracteres")
    .nonempty("O nome do municipio não pode ser vazio"),
  status: zod
    .number()
    .min(1, "O status do municipio deve ser 1 ou 2")
    .max(2, "O status do municipio deve ser 1 ou 2"),
});

export type CreateMunicipioType = zod.infer<typeof CreateMunicipioSchema>;
