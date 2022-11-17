import { Router } from "express"

import authRouter from "./authRouter"
import { handleError } from "@/middlewares"

const router = Router()
router.use(authRouter).use(handleError)
export default router
