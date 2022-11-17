import { adminSignIn } from "@/controllers/authController"
import { validateSchema } from "@/middlewares"
import { adminSignInSchema } from "@/schemas/authSchemas"
import { Router } from "express"

const authRouter = Router()

authRouter.post("/admin/sign-in", validateSchema(adminSignInSchema), adminSignIn)

export default authRouter
