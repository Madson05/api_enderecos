import zod from "zod";

export const UpdateBairroSchema = zod.object({
  codigoBairro: zod
    .number()
    .min(1, "O campo codigoBairro deve ser um numero entre 1 e 999999999")
    .max(
      999999999,
      "O campo codigoBairro deve ser um numero entre 1 e 999999999"
    )
    .positive("O campo codigoBairro deve ser um numero positivo")
    .int("O campo codigoBairro deve ser um numero inteiro"),
  codigoMunicipio: zod
    .number()
    .min(1, "O campo codigoMunicipio deve ser um numero entre 1 e 999999999").max(999999999, "O campo codigoMunicipio deve ser um numero entre 1 e 999999999"),
  nome: zod
    .string()
    .max(256, "O campo nome deve ser uma string com no maximo 256 caracteres")
    .nonempty("O campo nome não pode ser vazio"),
  status: zod.number().min(1, "O campo status deve ser 1 ou 2").max(2, "O campo status deve ser 1 ou 2")
});

export type UpdateBairroType = zod.infer<typeof UpdateBairroSchema>;
