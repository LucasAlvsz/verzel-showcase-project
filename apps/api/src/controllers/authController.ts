import authService from "@/services/authService"
import { AdminUserData } from "@/types/userTypes"
import { Request, Response } from "express"

const adminSignIn = async (req: Request, res: Response) => {
	const adminUserData: AdminUserData = req.body
	const token = await authService.adminSignIn(adminUserData)
	res.send(token)
}

export { adminSignIn }
