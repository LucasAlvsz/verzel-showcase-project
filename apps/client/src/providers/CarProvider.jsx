import { createContext, useContext, useState } from "react"

import carApi from "../services/carApi"
import { AuthContext } from "./AuthProvider"

export const CarContext = createContext()

export const CarProvider = ({ children }) => {
	const { token } = useContext(AuthContext)
	const [carsData, setCarsData] = useState([])

	const handleDelete = async id => carApi.deleteCar(id, token)

	return (
		<CarContext.Provider value={{ carsData, setCarsData, handleDelete }}>
			{children}
		</CarContext.Provider>
	)
}
