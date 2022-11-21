import { NextFunction, Request, Response } from "express"
import { validateToken } from "@/utils/JWTUtils"
import { authHeaderSchema } from "@/schemas/authSchemas"

const validateBearerToken = (req: Request, res: Response, next: NextFunction) => {
	const { error } = authHeaderSchema.validate(req.headers, {
		abortEarly: false,
	})
	if (error) return res.status(401).send(error.details.map(({ message }) => message))
	try {
		const token = req.headers.authorization.split(" ")[1]
		const userData = validateToken(token)
		res.locals.userData = userData
		next()
	} catch (err) {
		return res.status(401).send(err.message)
	}
}

export default validateBearerToken
