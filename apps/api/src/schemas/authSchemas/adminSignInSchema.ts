import Joi from "joi"
import { AdminUserData } from "@/types/userTypes"

const bodySchema = Joi.object<AdminUserData>({
	email: Joi.string().email().required(),
	password: Joi.string().required(),
})
	.required()
	.options({ allowUnknown: false })

const adminSignInSchema = Joi.object({
	body: bodySchema,
}).options({ allowUnknown: true })

export default adminSignInSchema
