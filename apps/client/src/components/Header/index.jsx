import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import { AuthContext } from "../../providers/AuthProvider"

import verzelLogo from "../../assets/images/verzel-logo-meta.png"
import * as S from "./styles"

const Header = () => {
	const navigate = useNavigate()
	const { token } = useContext(AuthContext)
	return (
		<S.StyledHeader>
			<S.Logo src={verzelLogo} alt="Verzel Logo" />
			<S.Option
				onClick={() => {
					if (!token) navigate("/admin/sign-in")
					if (token) navigate("/cars/register")
				}}>
				<h3>{token ? "Cadastrar Veículo" : "Login Adminstrativo"}</h3>
				{token ? <S.StyledPlusCircle /> : <S.StyledAdminPanelSettings />}
			</S.Option>
		</S.StyledHeader>
	)
}

export default Header
