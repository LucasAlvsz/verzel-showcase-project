import api, { setAuthToken } from "./api"

const getCars = async () => api.get("/cars")
const createCar = async (data, token) => api.post("/cars", data, setAuthToken(token))
const deleteCar = async (id, token) => api.delete(`/cars/${id}`, setAuthToken(token))
const updateCar = async (id, data, token) => api.put(`/cars/${id}`, data, setAuthToken(token))

const getBrands = async token => api.get("cars/brands", setAuthToken(token))

export default { getCars, createCar, deleteCar, updateCar, getBrands }
