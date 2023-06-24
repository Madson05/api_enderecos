import zod from "zod";

export const GetUFSchema = zod.object({
  codigoUF: zod
    .number()
    .max(999, "O codigo da UF deve ter no maximo 999 caracteres")
    .optional(),
  sigla: zod
    .string()
    .max(3, "A sigla da UF deve ter no maximo 3 caracteres")
    .optional(),
  nome: zod
    .string()
    .max(60, "O nome da UF deve ter no maximo 60 caracteres")
    .optional(),
  status: zod.number().max(1, "O status da UF deve ser 0 ou 1").optional(),
});

export type GetUFType = zod.infer<typeof GetUFSchema>;
