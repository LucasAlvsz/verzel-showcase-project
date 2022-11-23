import { faker } from "@faker-js/faker"

const createCarData = (overrides = {}) => {
	return {
		id: parseInt(faker.random.numeric(1)),
		name: faker.vehicle.vehicle(),
		model: faker.vehicle.vehicle(),
		value: parseInt(faker.finance.amount()) as any,
		mainImageURL: faker.image.imageUrl(),
		brand: {
			id: parseInt(faker.random.numeric(1)),
			name: faker.commerce.productName(),
		},
		...overrides,
	}
}

const createBrandData = (overrides = {}) => {
	return {
		id: parseInt(faker.random.numeric(1)),
		name: faker.commerce.productName(),
		...overrides,
	}
}

export { createCarData, createBrandData }
