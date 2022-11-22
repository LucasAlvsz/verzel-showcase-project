import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Home from "../pages/Home"
import SignIn from "../pages/Auth/SignIn"
import Register from "../pages/Register"
import PrivateRoutes from "./PrivateRoutes"

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sign-in" element={<SignIn />} />
				<Route path="*" element={<Navigate to="/" />} />
				<Route element={<PrivateRoutes />}>
					<Route path="/cars/register" element={<Register />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Router
