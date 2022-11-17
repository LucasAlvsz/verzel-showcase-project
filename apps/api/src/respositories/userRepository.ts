import prisma from "@/db"
import { Prisma } from "@prisma/client"

const getByEmail = async (model: Prisma.ModelName, email: string) => {
	return prisma[model].findUnique({ where: { email } })
}

export default { getByEmail }
