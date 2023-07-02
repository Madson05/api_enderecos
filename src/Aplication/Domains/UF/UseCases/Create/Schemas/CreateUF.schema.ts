import zod from "zod";

export const CreateUFSchema = zod.object({
  sigla: zod
    .string()
    .max(3, "A sigla da UF deve ter no maximo 3 caracteres")
    .nonempty("A sigla da UF não pode ser vazia"),
  nome: zod
    .string()
    .max(60, "O nome da UF deve ter no maximo 60 caracteres")
    .nonempty("O nome da UF não pode ser vazio"),
  status: zod
    .number()
    .min(0, "O status da UF deve ser 1 ou 2")
    .max(1, "O status da UF deve ser 1 ou 2"),
});

export type CreateUFType = zod.infer<typeof CreateUFSchema>;
