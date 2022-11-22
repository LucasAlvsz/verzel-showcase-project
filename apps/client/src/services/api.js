import axios from "axios"

const instance = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
})

export const setAuthToken = token =>
	(instance.defaults.headers.common["Authorization"] = `Bearer ${token}`)

export default instance
