import Joi from "joi"
import { CarData } from "@/types/carTypes"

const bodySchema = Joi.object<CarData>({
	name: Joi.string().required(),
	model: Joi.string().required(),
	mainImageURL: Joi.string().required(),
	value: Joi.number().required(),
	brandId: Joi.number().required(),
})
	.required()
	.options({ allowUnknown: false })

const createOrUpdateCarSchema = Joi.object({
	body: bodySchema,
}).options({ allowUnknown: true })

export default createOrUpdateCarSchema
