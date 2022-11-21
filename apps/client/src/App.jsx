import GlobalStyles from "./GlobalStyles"
import AppProvider from "./Providers"
import Router from "./Router"

const App = () => {
	return (
		<AppProvider>
			<GlobalStyles />
			<Router />
		</AppProvider>
	)
}

export default App
