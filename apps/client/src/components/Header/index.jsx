import verzelLogo from "../../assets/images/verzel-logo-meta.png"
import * as S from "./styles"

const Header = () => {
	return (
		<S.Header>
			<S.Logo src={verzelLogo} alt="Verzel Logo" />
		</S.Header>
	)
}

export default Header
