import carSchema, { paramsSchema } from "./carDataSchema"

const putCarSchema = carSchema.keys({
	params: paramsSchema,
})

export default putCarSchema
