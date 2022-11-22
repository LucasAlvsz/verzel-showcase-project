import styled from "styled-components"

export const Main = styled.div`
	width: 100%;
	height: auto;
	margin-top: 60px;
	background-color: ${({ theme }) => theme.colors.primaryBlue};
`

export const SearchContainer = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	@media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
		position: sticky;
		top: 0;
		z-index: 1;
	}
`

export const SearchBarContainer = styled.div`
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 15px;
	background-color: ${({ theme }) => theme.colors.primaryBlue};
`

export const FilterContainer = styled.div`
	width: 100%;
	height: 125px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-radius: 15px 15px 0 0;
	padding: 15px;
	background-color: #fff;
	h4 {
		font-size: 14px;
		color: #333;
		font-weight: 400;
		margin-top: 25px;
	}
	span {
		width: 100%;
		display: flex;
		justify-content: space-between;
		p {
			font-size: 16px;
			color: #898989;
		}
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
		border-radius: 0;
	}
`

export const OrderBy = styled.div`
	width: auto;
	font-size: 16px;
	color: #000;
	select {
		font-size: 16px;
		color: ${({ theme }) => theme.colors.primaryBlue};
		option {
			color: #000;
		}
	}
`

export const ShowcaseContainer = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
	grid-gap: 20px;
	padding: 0 15px;
	background-color: #fff;
	margin-bottom: 30px;
	@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
		border-radius: 0;
	}
`

export const LoadingContainer = styled.div`
	width: 100px;
	position: absolute;
	left: 45%;
	img {
		width: 100%;
		height: 100%;
	}
`
