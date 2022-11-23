import { faker } from "@faker-js/faker"

const createUserData = (overrides = {}) => {
	return {
		id: faker.random.numeric(),
		email: faker.internet.email(),
		password: faker.internet.password(),
		...overrides,
	}
}

export { createUserData }
