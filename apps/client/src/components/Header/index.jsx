import styled from "styled-components"
import verzelLogo from "../../assets/images/verzel-logo-meta.png"

const Header = () => {
	return (
		<StyledHeader>
			<Logo src={verzelLogo} alt="Verzel Logo" />
		</StyledHeader>
	)
}

export default Header

export const StyledHeader = styled.header`
	width: 100%;
	height: 60px;
	position: absolute;
	top: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px 20px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

export const Logo = styled.img`
	width: 90px;
	height: 50px;
`
