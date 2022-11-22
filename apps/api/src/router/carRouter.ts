import { Router } from "express"
import { validateBearerToken, validateSchema } from "@/middlewares"
import { carSchema, putCarSchema, deleteCarSchema } from "@/schemas/carSchemas"
import { createCar, deleteCar, getBrands, getCars, updateCar } from "@/controllers/carController"

const carRouter = Router()

carRouter
	.get("/", getCars)
	.use(validateBearerToken)
	.get("/brands", getBrands)
	.post("/", validateSchema(carSchema), createCar)
	.put("/:id", validateSchema(putCarSchema), updateCar)
	.delete("/:id", validateSchema(deleteCarSchema), deleteCar)

export default carRouter
