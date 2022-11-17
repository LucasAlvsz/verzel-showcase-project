import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Card from "../components/Card"
import Home from "../pages/Home"

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Card />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
