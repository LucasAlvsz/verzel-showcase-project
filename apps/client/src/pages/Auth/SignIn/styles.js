import styled from "styled-components"
import { Link } from "react-router-dom"
import { Eye } from "@styled-icons/heroicons-solid/Eye"
import { EyeOff } from "@styled-icons/heroicons-solid/EyeOff"

export const Main = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	flex-direction: column;
	background-color: #f5f5f5;
	padding: 0 20px;
`

export const Container = styled.div`
	width: 100%;
	margin: 90px;
	display: flex;
	align-items: center;
	flex-direction: column;
	> img {
		width: 200px;
		margin-bottom: 20px;
	}
	> p {
		margin-bottom: 20px;
		font-size: 13px;
		color: #999;
	}
`

export const ShowPassword = styled(Eye)`
	width: 30px;
	position: absolute;
	right: 10px;
	cursor: pointer;
	color: #999;
	:hover {
		color: #333;
	}
`

export const HidePassword = styled(EyeOff)`
	width: 30px;
	position: absolute;
	right: 10px;
	cursor: pointer;
	color: #999;
	:hover {
		color: #333;
	}
`

export const Form = styled.form`
	width: 100%;
	max-width: 400px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;

	> span {
		width: 100%;
		display: flex;
		align-items: center;
		position: relative;
	}

	input {
		width: 100%;
		height: 50px;
		padding: 20px;
		border: 1px solid #ccc;
		border-radius: 5px;
		font-size: 16px;
		color: #333;
		:focus {
			outline: none;
			border-color: #333;
			box-shadow: 0 0 0 1px #ccc;
		}
		::placeholder {
			color: #ccc;
		}
		:disabled {
			opacity: 0.5;
			cursor: wait;
		}
	}

	> button {
		width: 80%;
		height: 50px;
		border: 0;
		border-radius: 5px;
		font-size: 16px;
		font-weight: bold;
		color: #fff;
		background-color: #333;
		cursor: pointer;
		:hover {
			background-color: #666;
		}

		:disabled {
			opacity: 0.5;
			cursor: wait;
			:hover {
				background-color: #333;
			}
		}
		> img {
			width: 50px;
			height: 50px;
			margin-left: 10px;
		}
	}
`

export const Error = styled.span`
	width: 100%;
	display: block;
	text-align: center;
	color: tomato;
	font-size: 14px;
	margin-top: 20px;
`

export const StyledLink = styled(Link)`
	width: 100%;
	max-width: 400px;
	text-align: center;
	font-size: 14px;
	color: #333;
	text-decoration: none;
	margin-top: 20px;
	text-decoration: underline;
	:hover {
		color: ${props => props.theme.colors.primaryBlue};
	}
	:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
`
