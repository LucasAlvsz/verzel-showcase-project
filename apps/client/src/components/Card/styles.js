import styled from "styled-components"

export const Container = styled.div`
	margin: 40px auto;

	max-width: 300px;
	display: flex;
	flex-direction: column;
	border-radius: 5px;
	box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.3);
	img {
		width: 100%;
		object-fit: fill;
		border-radius: 5px 5px 0 0;
	}
`

export const Title = styled.h2`
	font-size: 16px;
	font-weight: 700;
	color: #333;
`

export const Info = styled.p`
	font-size: 14px;
	color: #898989;
`

export const Price = styled.p`
	font-size: 20px;
	color: #3374db;
	margin-top: 20px;
`

export const Description = styled.div`
	width: 100%;
	padding: 5px 12px;
	font-weight: 500;
	span {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}
`
