import zod from "zod";

export const CreateUFSchema = zod.object({
    sigla: zod.string().min(1, "A sigla da UF deve ter no minimo 1 caracter").max(256, "A sigla da UF deve ter no maximo 256 caracteres"),
    nome: zod.string().min(2, "O nome da UF deve ter no minimo 2 caracteres").max(256, "Seu nome deve ter no maximo 256 caracteres"),
    status: zod.number().min(0, "O status da UF deve ser 0 ou 1").max(1, "O status da UF deve ser 0 ou 1")
})

export type CreateUFType = zod.infer<typeof CreateUFSchema>;