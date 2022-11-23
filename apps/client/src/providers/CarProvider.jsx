import { createContext, useContext, useState } from "react"

import carApi from "../services/carApi"
import { AuthContext } from "./AuthProvider"

export const CarContext = createContext()

export const CarProvider = ({ children }) => {
	const { token } = useContext(AuthContext)
	const [carsData, setCarsData] = useState([])

	const deleteCar = async id => carApi.deleteCar(id, token)

	const getBrands = async () => carApi.getBrands(token)

	const createCar = async data => carApi.createCar(data, token)

	const updateCar = async (id, data) => carApi.updateCar(id, data, token)

	return (
		<CarContext.Provider
			value={{ carsData, setCarsData, deleteCar, getBrands, createCar, updateCar }}>
			{children}
		</CarContext.Provider>
	)
}
