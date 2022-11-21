import prisma from "@/db"
import { CarBody, CarData } from "@/types/carTypes"

const getCars = async () => {
	return await prisma.car.findMany({
		select: {
			id: true,
			name: true,
			model: true,
			value: true,
			mainImageURL: true,
			brand: {
				select: {
					id: true,
					name: true,
				},
			},
		},
	})
}

const createCar = async (data: CarBody) => prisma.car.create({ data })

const updateCar = async (id: number, data: CarData) => prisma.car.update({ where: { id }, data })

const deleteCar = async (id: number) => prisma.car.delete({ where: { id } })

export default { getCars, createCar, updateCar, deleteCar }
