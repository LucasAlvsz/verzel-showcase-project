import styled from "styled-components"
import { PlusCircle } from "@styled-icons/evaicons-solid/PlusCircle"

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
	h3 {
		font-size: 14px;
		font-weight: 400;
		color: #333;
	}
`

export const Logo = styled.img`
	width: 90px;
	height: 50px;
`

export const StyledPlusCircle = styled(PlusCircle)`
	width: 25px;
	height: 25px;
	color: ${({ theme }) => theme.colors.primaryBlue};
	margin-left: 5px;
`

export const Option = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	:hover {
		text-decoration: underline;
		transition: 0.3s;
		transform: scale(1.1);
	}
`
