import zod from "zod";

export const createEnderecoSchema = zod.object({
  codigoBairro: zod
    .number()
    .min(1, "O campo codigoBairro deve ser um numero entre 1 e 999999999")
    .max(
      999999999,
      "O campo codigoBairro deve ser um numero entre 1 e 999999999"
    )
    .positive("O campo codigoBairro deve ser um numero positivo")
    .int("O campo codigoBairro deve ser um numero inteiro"),
  nomeRua: zod
    .string()
    .max(
      256,
      "O campo nomeRua deve ser uma string com no maximo 256 caracteres"
    )
    .nonempty("O campo nomeRua não pode ser vazio"),
  numero: zod
    .string()
    .max(10, "O campo numero deve ser uma string com no maximo 10 caracteres")
    .nonempty("O campo numero não pode ser vazio"),
  complemento: zod
    .string()
    .max(
      256,
      "O campo complemento deve ser uma string com no maximo 256 caracteres"
    )
    .optional(),
  cep: zod
    .string()
    .regex(
      /^\d{5}-\d{3}$/,
      "O campo cep deve ser um numero com 8 digitos separados por um hifen"
    )
    .nonempty("O campo cep não pode ser vazio"),
});

export const createUsuarioSchema = zod.object({
  nome: zod
    .string()
    .max(256, "O campo nome deve ter no maximo 256 caracteres")
    .nonempty("O campo nome não pode ser vazio"),
  sobrenome: zod
    .string()
    .max(256, "O campo sobrenome deve ter no maximo 256 caracteres")
    .nonempty("O campo sobrenome não pode ser vazio"),
  idade: zod
    .number()
    .min(1, "O campo idade deve ser maior que 0")
    .max(999, "O campo idade deve ser menor que 999"),
  login: zod.string().email("Email inválido"),
  senha: zod
    .string()
    .min(8, "O campo senha deve ter no minimo 8 caracteres")
    .max(256, "O campo senha deve ter no maximo 256 caracteres")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula e um número"
    ),
  status: zod
    .number()
    .min(1, "O campo status deve ser 1 ou 2")
    .max(2, "O campo status deve ser 1 ou 2"),
  enderecos: zod
    .array(createEnderecoSchema)
    .nonempty(
      "O campo endereços é obrigatorio e deve conter pelo menos um endereço"
    ),
});

export type CreateUsuarioType = zod.infer<typeof createUsuarioSchema>;
export type CreateEnderecoType = zod.infer<typeof createEnderecoSchema>;
