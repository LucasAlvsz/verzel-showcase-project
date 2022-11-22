import api from "./api"

const signIn = async (credentials, admin = false) =>
	api.post(`${admin ? "/admin/sign-in" : "/signin"}`, credentials)

export default { signIn }
