import Joi from "joi"

const paramsSchema = Joi.object({
	id: Joi.number().required(),
})
	.required()
	.options({ allowUnknown: false })

const deleteCarSchema = Joi.object({
	params: paramsSchema,
}).options({ allowUnknown: true })

export default deleteCarSchema
