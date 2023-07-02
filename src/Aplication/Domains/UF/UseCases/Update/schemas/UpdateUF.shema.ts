import zod from "zod"

export const updateUFSchema = zod.object({
  codigo_UF: zod.number().min(1, "O codigo da UF deve ser maior que 0").max(999999999, "O codigo da UF deve ser menor que 999999999"),
  sigla: zod.string().min(1, "A sigla da UF deve ter no minimo 1 caracter").max(3, "A sigla da UF deve ter no maximo 3 caracteres"),
  nome: zod.string().max(60, "O nome da UF deve ter no maximo 60 caracteres").nonempty("O nome da UF não pode ser vazio"),
  status: zod.number().min(1, "O status da UF deve ser 1 ou 2").max(2, "O status da UF deve ser 1 ou 2")
})

export type UpdateUFType = zod.infer<typeof updateUFSchema>