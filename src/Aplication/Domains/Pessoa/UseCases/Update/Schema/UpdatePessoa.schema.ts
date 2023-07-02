import zod from "zod";

export const updateEnderecoSchema = zod.object({
  codigoEndereco: zod.number().min(1, "O codigo do endereco deve ser maior que 0").max(999999999, "O codigo do endereco deve ser menor que 999999999"),
  codigoPessoa: zod.number().min(1, "O codigo da pessoa deve ser maior que 0").max(999999999, "O codigo da pessoa deve ser menor que 999999999"),
  codigoBairro: zod.number().min(1, "O codigo do bairro deve ser maior que 0").max(999999999, "O codigo do bairro deve ser menor que 999999999"),
  nomeRua: zod.string().max(256, "O nome da rua deve ter no maximo 256 caracteres").nonempty("O nome da rua não pode ser vazio"),
  numero: zod.string().max(10, "O numero deve ter no maximo 10 caracteres").nonempty("O numero não pode ser vazio"),
  complemento: zod.string().max(256, "O complemento deve ter no maximo 256 caracteres").optional(),
  cep: zod.string().regex(/^\d{5}-\d{3}$/, "O cep deve ser um numero com 8 digitos separados por um hifen").nonempty("O cep não pode ser vazio"),
});

export const updatePessoaSchema = zod.object({
  codigoPessoa: zod.number().min(1, "O codigo da pessoa deve ser maior que 0").max(999999999, "O codigo da pessoa deve ser menor que 999999999"),
  nome: zod.string().max(256, "O nome deve ter no maximo 256 caracteres").nonempty("O nome não pode ser vazio"),
  sobrenome: zod.string().max(256, "O sobrenome deve ter no maximo 256 caracteres").nonempty("O sobrenome não pode ser vazio"),
  idade: zod.number().min(1, "A idade deve ser maior que 0").max(999, "A idade deve ser menor que 999"),
  login: zod.string().email("Email inválido"),
  senha: zod.string().min(8, "A senha deve ter no minimo 8 caracteres").max(256, "A senha deve ter no maximo 256 caracteres").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula e um número"),
  status: zod.number().min(1, "O status deve ser 1 ou 2").max(2, "O status deve ser 1 ou 2"),
  enderecos: zod.array(updateEnderecoSchema).nonempty("O campo enderecos não pode ser vazio"),
});

export type UpdatePessoaType = zod.infer<typeof updatePessoaSchema>;
export type UpdateEnderecoType = zod.infer<typeof updateEnderecoSchema>;
