import styled from "styled-components"
import { Search } from "@styled-icons/bootstrap/Search"

const SearchBar = () => {
	return (
		<StyledSearchBar>
			<input type="text" placeholder="Busque por marca, modelo, ano, cor..." />
			<StyledSearchIcon />
		</StyledSearchBar>
	)
}

export default SearchBar

const StyledSearchBar = styled.div`
	width: 100%;
	height: 50px;
	position: relative;
	box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
	border-radius: 5px;
	input {
		width: 100%;
		height: 100%;
		padding: 15px;
		border-radius: 5px;
		font-size: 16px;
		color: gray;
	}
`

const StyledSearchIcon = styled(Search)`
	width: 20px;
	height: 20px;
	position: absolute;
	top: 15px;
	right: 15px;
	color: lightgray;
	cursor: pointer;
`
