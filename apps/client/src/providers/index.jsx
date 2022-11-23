import ThemeProvider from "./ThemeProvider"
import { CarProvider } from "./CarProvider"
import { AuthProvider } from "./AuthProvider"

const AppProvider = ({ children }) => {
	return (
		<ThemeProvider>
			<AuthProvider>
				<CarProvider>{children}</CarProvider>
			</AuthProvider>
		</ThemeProvider>
	)
}

export default AppProvider
