import { Prisma } from "@prisma/client"
import carRepostitory from "@/respositories/carRepostitory"
import queryFactory from "@/factories/queryFactory"
import { CarBody, CarData } from "@/types/carTypes"
import { NotFoundError } from "@/errors"

const getCars = async () => {
	return await carRepostitory.getCars()
}

const createCar = async (car: CarBody) => {
	await validateId(car.brandId, "Brand")
	return await carRepostitory.createCar(car)
}

const updateCar = async (id: number, car: CarData) => {
	await validateId(id, "Car")
	await validateId(car.brandId, "Brand")
	return await carRepostitory.updateCar(id, { ...car, brandId: car.brandId })
}

const deleteCar = async (id: number) => {
	await validateId(id, "Car")
	return await carRepostitory.deleteCar(id)
}

const validateId = async (id: number, model: Prisma.ModelName) => {
	const car = await queryFactory.getById(id, "Car")
	if (!car) throw new NotFoundError(`${model} not found`)
}

const getBrands = async () => carRepostitory.getBrands()

export default { getCars, createCar, updateCar, deleteCar, getBrands }
