import { Request, Response } from "express"
import carService from "@/services/carService"

const getCars = async (req: Request, res: Response) => {
	const cars = await carService.getCars()
	res.send(cars)
}

const createCar = async (req: Request, res: Response) => {
	const car = req.body
	car.brandId = parseInt(car.brandId)
	const createdCar = await carService.createCar(car)
	res.send(createdCar)
}

const updateCar = async (req: Request, res: Response) => {
	const id = req.params.id
	const car = req.body
	car.brandId = parseInt(car.brandId)
	const updatedCar = await carService.updateCar(parseInt(id), car)
	res.send(updatedCar)
}

const deleteCar = async (req: Request, res: Response) => {
	const id = req.params.id
	const deletedCar = await carService.deleteCar(parseInt(id))
	res.send(deletedCar)
}

const getBrands = async (req: Request, res: Response) => {
	const brands = await carService.getBrands()
	res.send(brands)
}

export { getCars, createCar, updateCar, deleteCar, getBrands }
