import { GetUFSchema } from "../../Get/schemas/getUF.schema";
import zod from "zod"

export const updateUFSchema = zod.object({
  codigo_UF: zod.number(),
  sigla: zod.string(),
  nome: zod.string(),
  status: zod.number(),
})

export type UpdateUFType = zod.infer<typeof updateUFSchema>