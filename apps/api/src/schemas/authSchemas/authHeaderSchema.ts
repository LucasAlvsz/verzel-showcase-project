import Joi from "joi"

const authHeaderSchema = Joi.object({
	authorization: Joi.string()
		.pattern(/^Bearer\s[\w-]*\.[\w-]*\.[\w-]*$/)
		.required(),
}).options({ allowUnknown: true })

export default authHeaderSchema
