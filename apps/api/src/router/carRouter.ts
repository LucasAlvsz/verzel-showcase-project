import { Router } from "express"
import { validateBearerToken, validateSchema } from "@/middlewares"
import { carSchema, putCarSchema, deleteCarSchema } from "@/schemas/carSchemas"
import { createCar, deleteCar, getCars, updateCar } from "@/controllers/carController"

const carRouter = Router()

carRouter
	.use(validateBearerToken)
	.get("/", getCars)
	.post("/", validateSchema(carSchema), createCar)
	.put("/:id", validateSchema(putCarSchema), updateCar)
	.delete("/:id", validateSchema(deleteCarSchema), deleteCar)

export default carRouter
