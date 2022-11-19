import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Card from "../components/Card"
import Header from "../components/Header"
import Home from "../pages/Home"

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Header />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
