import Joi from "joi"
import { paramsSchema } from "@/schemas/carSchemas"

const deleteCarSchema = Joi.object({
	params: paramsSchema,
}).options({ allowUnknown: true })

export default deleteCarSchema
