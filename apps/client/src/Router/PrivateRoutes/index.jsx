import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "../../providers/AuthProvider"

const PrivateRoutes = () => {
	const { token } = useContext(AuthContext)
	return token ? <Outlet /> : <Navigate to="/sign-in" />
}

export default PrivateRoutes
