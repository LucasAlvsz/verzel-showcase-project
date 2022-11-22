import { createContext } from "react"
import { useLocalStorage } from "../hooks"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [token, setToken] = useLocalStorage("token", null)
	return (
		<AuthContext.Provider
			value={{
				token,
				setToken,
			}}>
			{children}
		</AuthContext.Provider>
	)
}
