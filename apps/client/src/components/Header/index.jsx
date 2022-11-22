import { useNavigate } from "react-router-dom"
import verzelLogo from "../../assets/images/verzel-logo-meta.png"

import * as S from "./styles"

const Header = () => {
	const navigate = useNavigate()
	return (
		<S.StyledHeader>
			<S.Logo src={verzelLogo} alt="Verzel Logo" />
			<S.Option onClick={() => navigate("/cars/register")}>
				<h3>Cadastrar Veículo</h3>
				<S.StyledPlusCircle />
			</S.Option>
		</S.StyledHeader>
	)
}

export default Header
