import api from "./api"

const signIn = (credentials, admin = false) =>
	api.post(`${admin ? "/admin/sign-in" : "/signin"}`, credentials)

export default { signIn }
