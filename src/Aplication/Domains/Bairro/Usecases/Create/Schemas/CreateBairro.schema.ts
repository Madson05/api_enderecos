import zod from "zod";

export const CreateBairroSchema = zod.object({
  codigoMunicipio: zod
    .number()
    .min(1, "O campo codigoMunicipio deve ser um numero entre 1 e 999999999")
    .max(
      999999999,
      "O campo codigoMunicipio deve ser um numero entre 1 e 999999999"
    )
    .positive("O campo codigoMunicipio deve ser um numero positivo")
    .int("O campo codigoMunicipio deve ser um numero inteiro"),
  nome: zod
    .string()
    .max(256, {
      message: "O campo nome deve ser uma string com no maximo 256 caracteres",
    })
    .nonempty("O campo nome não pode ser vazio"),
  status: zod
    .number()
    .min(1, "O campo status deve ser 1 ou 2")
    .max(2, "O campo status deve ser 1 ou 2")
    .positive("O campo status deve ser um numero positivo")
    .int("O campo status deve ser um numero inteiro"),
});

export type CreateBairroType = zod.infer<typeof CreateBairroSchema>;
