import * as S from "../Auth/SignIn/styles"

import styled from "styled-components"

export const Main = styled(S.Main)``

export const Container = styled(S.Container)`
	> span {
		width: 100%;
		display: flex;
		justify-content: space-around;
	}
`

export const Preview = styled.div`
	width: 300px;
	margin-top: 20px;
	img {
		max-height: 160px;
	}
`

export const Form = styled(S.Form)`
	input {
		&-webkit-outer-spin-button,
		&::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}
	}
	> button {
		:last-child {
			width: 50px;
			height: 20px;
			background: none;
			margin-top: 10px;
			color: ${({ theme }) => theme.colors.primaryBlue};
			font-size: 14px;
			font-weight: 700;
			:hover {
				text-decoration: underline;
			}
		}
	}
	select {
		width: 100%;
		max-width: 400px;
		height: 50px;
		border: 1px solid #ccc;
		border-radius: 4px;
		font-size: 16px;
		padding: 0 10px;
		margin-bottom: 10px;
		&:focus {
			outline: none;
			border-color: #333;
			box-shadow: 0 0 0 1px #ccc;
		}
		:disabled {
			opacity: 0.5;
			cursor: wait;
		}
		:invalid {
			color: #ccc;
		}
		option {
			font-size: 15px;
			color: #333;
		}
	}
`

export const Error = styled(S.Error)`
	margin-top: 10px;
`

export const StyledLink = styled(S.StyledLink)`
	margin-top: 80px;
`
