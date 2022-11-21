import { Car } from "@prisma/client"

type CarData = Omit<Car, "id" | "createdAt" | "updatedAt" | "deletedAt">

export { CarData }
