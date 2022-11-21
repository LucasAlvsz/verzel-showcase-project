import Theme from "./ThemeProvider"

const AppProvider = ({ children }) => {
	return <Theme>{children}</Theme>
}

export default AppProvider
