import userRepository from "@/respositories/userRepository"
import { NotFoundError, UnauthorizedError } from "@/errors"
import { AdminUserData } from "@/types/userTypes"
import { generateToken } from "@/utils/JWTUtils"
import { decryptAndcompare } from "@/utils/cryptographyUtils"

const adminSignIn = async (adminUserData: AdminUserData) => {
	const user = await userRepository.getByEmail("AdminUser", adminUserData.email)
	if (!user) throw new NotFoundError("Invalid email")
	if (!decryptAndcompare(adminUserData.password, user.password))
		throw new UnauthorizedError("Invalid password")

	return { token: generateToken({ id: user.id }) }
}

export default {
	adminSignIn,
}
