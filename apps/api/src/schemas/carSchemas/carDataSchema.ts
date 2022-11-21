import Joi from "joi"
import { CarBody } from "@/types/carTypes"

const paramsSchema = Joi.object({
	id: Joi.number().required(),
})
	.required()
	.options({ allowUnknown: false })

const bodySchema = Joi.object<CarBody>({
	name: Joi.string().required(),
	model: Joi.string().required(),
	mainImageURL: Joi.string().required(),
	value: Joi.number().required(),
	brandId: Joi.number().required(),
})
	.required()
	.options({ allowUnknown: false })

const carSchema = Joi.object({
	body: bodySchema,
}).options({ allowUnknown: true })

export { bodySchema, paramsSchema }

export default carSchema
