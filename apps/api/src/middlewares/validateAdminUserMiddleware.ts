import { NextFunction, Request, Response } from "express"

import { UnauthorizedError } from "@/errors"
import queryFactory from "@/factories/queryFactory"

const validateAdminUser = async (req: Request, res: Response, next: NextFunction) => {
	const { id } = res.locals.userData
	const adminId = await queryFactory.getById(id, "AdminUser")
	if (!adminId) throw new UnauthorizedError("This user is not an admin")
	next()
}

export default validateAdminUser
