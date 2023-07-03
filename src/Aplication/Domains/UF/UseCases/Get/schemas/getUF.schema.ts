import zod from "zod";

export const GetUFSchema = zod.object({
  codigoUF: zod
    .string()
    .max(9, "O codigo da UF deve ter no maximo 9 caracteres")
    .optional(),
  sigla: zod
    .string()
    .max(3, "A sigla da UF deve ter no maximo 3 caracteres")
    .optional(),
  nome: zod
    .string()
    .max(60, "O nome da UF deve ter no maximo 60 caracteres")
    .optional(),
  status: zod.string().optional(),
});

export type GetUFType = zod.infer<typeof GetUFSchema>;
