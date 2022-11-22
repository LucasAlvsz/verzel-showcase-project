import api, { setAuthToken } from "./api"

const getCars = async () => api.get("/cars")
const deleteCar = async (id, token) => api.delete(`/cars/${id}`, setAuthToken(token))

export default { getCars, deleteCar }
