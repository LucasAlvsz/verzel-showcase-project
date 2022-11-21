import { ToastContainer } from "react-toastify"
import GlobalStyles from "./GlobalStyles"
import AppProvider from "./Providers"
import Router from "./Router"

const App = () => {
	return (
		<AppProvider>
			<GlobalStyles />
			<Router />
			<ToastContainer />
		</AppProvider>
	)
}

export default App
