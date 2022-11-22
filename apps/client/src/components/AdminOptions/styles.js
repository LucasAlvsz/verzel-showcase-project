import styled from "styled-components"
import { Edit } from "@styled-icons/evaicons-solid/Edit"
import { Delete } from "@styled-icons/fluentui-system-filled/Delete"

export const Options = styled.div`
	width: 35px;
	height: 60px;
	position: absolute;
	top: 10px;
	right: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	border-radius: 10px 0 0 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	background-color: #fff;

	${({ disabled }) =>
		disabled &&
		`
		opacity: 0.5;
		pointer-events: none;
	`}
`

export const StyledEdit = styled(Edit)`
	width: 20px;
	height: 20px;
	color: #444;
	cursor: pointer;
	&:hover {
		color: ${({ theme }) => theme.colors.primaryBlue};
		transition: 0.2s;
		transform: scale(1.1);
	}
`

export const StyledDelete = styled(Delete)`
	width: 20px;
	height: 20px;
	color: #444;
	cursor: pointer;
	&:hover {
		color: ${({ theme }) => theme.colors.primaryBlue};
		transition: 0.2s;
		transform: scale(1.1);
	}
`
