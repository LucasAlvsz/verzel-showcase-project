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
	const brands = [
		{
			name: "Audi",
		},
		{
			name: "BMW",
		},
		{
			name: "Mercedes",
		},
		{
			name: "Volkswagen",
		},
		{
			name: "Volvo",
		},
		{
			name: "Ford",
		},
		{
			name: "Toyota",
		},
		{
			name: "Honda",
		},
		{
			name: "Hyundai",
		},
	]

	const cars = [
		{
			name: "Audi A3",
			model: "2019",
			mainImageURL: "https://carros2023.com.br/wp-content/uploads/2022/08/1-1.png",
			value: 100000,
			brandId: 1,
		},
		{
			name: "BMW 320i",
			model: "2021",
			mainImageURL:
				"https://cdn.motor1.com/images/mgl/KPK4R/s1/bmw-320i-m-sport-2021-teste-br.jpg",
			value: 150000,
			brandId: 2,
		},
		{
			name: "Mercedes C180",
			model: "2020",
			mainImageURL:
				"https://fotos.jornaldocarro.estadao.com.br/wp-content/uploads/2020/06/22080809/Mercedes-Classe-C-frente-1160x585.jpg",
			value: 200000,
			brandId: 3,
		},
		{
			name: "Volkswagen Golf",
			model: "2020",
			mainImageURL: "https://cdn.motor1.com/images/mgl/67P9Z/s3/nuova-volkswagen-golf.jpg",
			value: 250000,
			brandId: 4,
		},
		{
			name: "Volvo XC60",
			model: "2020",
			mainImageURL:
				"https://quatrorodas.abril.com.br/wp-content/uploads/2021/11/Volvo-XC60-Recharge-Foto-Fabio-Aro-40.jpg?quality=70&strip=info&w=1024&resize=1200,800",
			value: 300000,
			brandId: 5,
		},
		{
			name: "Ford Focus",
			model: "2022",
			mainImageURL: "https://cdn.motor1.com/images/mgl/eE0vP/s3/2022-ford-focus-st-line.jpg",
			value: 350000,
			brandId: 6,
		},
		{
			name: "Toyota Corolla",
			model: "2021",
			mainImageURL:
				"https://1.bp.blogspot.com/--IOemCyug2I/XxGwQ4w1l_I/AAAAAAAAgNA/y1UxvFFabw0p2MfEuluQ0IaE4xa5AxUigCLcBGAsYHQ/s1600/Toyota-Corolla-GR-Sport%2B%252811%2529.jpg",
			value: 400000,
			brandId: 7,
		},
		{
			name: "Honda Civic",
			model: "2021",
			mainImageURL: "https://cdn.motor1.com/images/mgl/mBrOo/s3/honda-civic-exl-2020.jpg",
			value: 450000,
			brandId: 8,
		},
		{
			name: "Hyundai HB20",
			model: "2020",
			mainImageURL:
				"https://portallubes.com.br/wp-content/uploads/2019/09/hyundai-hb20-2020.jpg",
			value: 500000,
			brandId: 9,
		},
	]

	await prisma.adminUser.createMany({ data: adminUsers })
	await prisma.brand.createMany({ data: brands })
	await prisma.car.createMany({ data: cars })
}

main()
	.catch(e => console.error(e))
	.finally(async () => await prisma.$disconnect())
