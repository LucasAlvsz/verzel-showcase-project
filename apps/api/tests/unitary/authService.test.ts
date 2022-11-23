import authService from "@/services/authService"
import userRepository from "@/respositories/userRepository"
import { createUserData } from "../factories/userFactory"
import { generateToken } from "@/utils/JWTUtils"
import { encryptWithSalt } from "@/utils/cryptographyUtils"
import { NotFoundError, UnauthorizedError } from "@/errors"

beforeEach(() => {
	jest.clearAllMocks()
})

describe("auth service", () => {
	describe("sign-in", () => {
		it("should sign-in and return a token", async () => {
			const user = createUserData()
			const { id, email, password } = user
			jest.spyOn(userRepository, "getByEmail").mockResolvedValue({
				...user,
				password: encryptWithSalt(password),
			})

			const token = await authService.adminSignIn({ email, password })
			expect(token).toEqual({ token: generateToken({ id }) })
		})
		it("should throw an error if the user is not found", async () => {
			const user = createUserData()
			const { email, password } = user
			jest.spyOn(userRepository, "getByEmail").mockResolvedValue(undefined)

			await expect(
				authService.adminSignIn({ email, password })
			).rejects.toBeInstanceOf(NotFoundError)
		})
		it("should throw an error if the password is incorrect", async () => {
			const user = createUserData()
			const { email, password } = user
			jest.spyOn(userRepository, "getByEmail").mockResolvedValue({
				...user,
				password: encryptWithSalt("wrong password"),
			})

			await expect(
				authService.adminSignIn({ email, password })
			).rejects.toBeInstanceOf(UnauthorizedError)
		})
	})
})
