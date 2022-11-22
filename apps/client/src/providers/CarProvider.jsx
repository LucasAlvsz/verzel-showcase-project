import { createContext, useContext, useState } from "react"

import carApi from "../services/carApi"
import { AuthContext } from "./AuthProvider"

export const CarContext = createContext()

export const CarProvider = ({ children }) => {
	const { token } = useContext(AuthContext)
	const [carsData, setCarsData] = useState([])

	const handleDelete = async id => carApi.deleteCar(id, token)

	const getBrands = async () => carApi.getBrands(token)

	const createCar = async data => carApi.createCar(data, token)

	return (
		<CarContext.Provider value={{ carsData, setCarsData, handleDelete, getBrands, createCar }}>
			{children}
		</CarContext.Provider>
	)
}
