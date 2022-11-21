import "express-async-errors"
import { Router } from "express"

import authRouter from "./authRouter"
import carRouter from "./carRouter"
import { handleError } from "@/middlewares"

const router = Router()
router.use(authRouter).use("/cars", carRouter).use(handleError)

export default router
