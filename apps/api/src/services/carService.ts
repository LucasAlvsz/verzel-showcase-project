import { Prisma } from "@prisma/client"
import carRepostitory from "@/respositories/carRepostitory"
import queryFactory from "@/factories/queryFactory"
import { CarBody, CarData } from "@/types/carTypes"
import { NotFoundError } from "@/errors"

const getCars = async () => {
	return await carRepostitory.getCars()
}

const createCar = async (car: CarBody) => {
	await validadeId(car.brandId, "Brand")
	return await carRepostitory.createCar(car)
}

const updateCar = async (id: number, car: CarData) => {
	await validadeId(id, "Car")
	await validadeId(car.brandId, "Brand")
	return await carRepostitory.updateCar(id, { ...car, brandId: car.brandId })
}

const deleteCar = async (id: number) => {
	await validadeId(id, "Car")
	return await carRepostitory.deleteCar(id)
}

const validadeId = async (id: number, model: Prisma.ModelName) => {
	const car = await queryFactory.getById(id, "Car")
	if (!car) throw new NotFoundError(`${model} not found`)
}

export default { getCars, createCar, updateCar, deleteCar }
