import * as S from "./styles"

const Card = ({ name, brand, model, mainImageUrl, value }) => {
	return (
		<S.Container>
			<img src={mainImageUrl} />
			<S.Description>
				<span>
					<S.Title>
						<h3>{name}</h3>
					</S.Title>
					<S.Info>
						{brand} • {model}
					</S.Info>
				</span>
				<S.Price>{value}</S.Price>
			</S.Description>
		</S.Container>
	)
}

export default Card