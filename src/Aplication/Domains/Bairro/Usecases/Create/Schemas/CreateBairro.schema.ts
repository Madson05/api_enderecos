import zod from "zod";

export const CreateBairroSchema = zod.object({
  codigoMunicipio: zod
    .number()
    .min(1, "O campo codigoMunicipio deve ser um numero inteiro positivo")
    .max(999999999, "O campo codigoMunicipio deve ser um numero inteiro positivo"),
  nome: zod.string().min(1, "O campo nome deve ser uma string com no minimo 1 caracter").max(100, {message: "O campo nome deve ser uma string com no maximo 100 caracteres"}),
  status: zod.number().min(1, "O campo status deve ser 1 ou 2").max(2, "O campo status deve ser 1 ou 2"),
});

export type CreateBairroType = zod.infer<typeof CreateBairroSchema>;
