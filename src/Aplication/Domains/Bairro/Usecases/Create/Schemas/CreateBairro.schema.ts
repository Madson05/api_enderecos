import zod from "zod";

export const CreateBairroSchema = zod.object({
  codigoBairro: zod.number().min(1).max(999999),
  nome: zod.string().min(1).max(100),
  status: zod.number().min(1).max(1),
});

export type CreateBairroType = zod.infer<typeof CreateBairroSchema>;
