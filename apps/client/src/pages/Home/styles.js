import styled from "styled-components"

export const Main = styled.div`
	width: 100%;
	height: auto;
	margin-top: 60px;
	background-color: #3374db;
`

export const SearchBarContainer = styled.div`
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 15px;
	background-color: #3374db;
	@media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
		position: sticky;
		top: 0;
	}
`

export const ShowcaseContainer = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(205px, 1fr));
	grid-gap: 20px;
	border-radius: 15px 15px 0 0;
	padding: 15px;
	background-color: #fff;

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
		border-radius: 0;
	}
`
