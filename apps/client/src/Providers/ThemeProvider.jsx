import { ThemeProvider } from "styled-components"

const Theme = ({ children }) => {
	const breakpoints = {
		mobile: "480px",
		tablet: "768px",
		desktop: "1024px",
	}

	const colors = {
		primaryBlue: "#3374db",
	}

	return <ThemeProvider theme={{ breakpoints, colors }}>{children}</ThemeProvider>
}

export default Theme
