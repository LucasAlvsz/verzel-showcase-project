import ThemeProvider from "./ThemeProvider"
import { AuthProvider } from "./AuthProvider"
import { CarProvider } from "./CarProvider"

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
