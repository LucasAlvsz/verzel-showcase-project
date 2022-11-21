import api from "./api"

const getCars = () => api.get("/cars")

export default { getCars }
