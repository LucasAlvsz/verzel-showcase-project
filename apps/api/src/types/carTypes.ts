import { Car } from "@prisma/client"

type CarData = Omit<Car, "createdAt" | "updatedAt">

type CarBody = Omit<CarData, "id">

export { CarBody, CarData }
