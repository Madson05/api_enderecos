import { GetUFSchema } from "../../Get/schemas/getUF.schema";
import zod from "zod"

export const updateUFSchema = zod.object({
  ...GetUFSchema.shape,
})

export type UpdateUFType = zod.infer<typeof updateUFSchema>