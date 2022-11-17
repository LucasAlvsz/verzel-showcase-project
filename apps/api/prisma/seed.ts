import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

import { encryptWithSalt } from "../src/utils/cryptographyUtils"

const main = async () => {
	const adminUsers = [
		{
			email: "admin@admin.com",
			password: encryptWithSalt("adminadmin"),
		},
	]

	await prisma.adminUser.createMany({ data: adminUsers })
}

main()
	.catch(e => console.error(e))
	.finally(async () => await prisma.$disconnect())
