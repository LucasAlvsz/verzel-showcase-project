import { useContext } from "react"

import { AuthContext } from "../../providers/AuthProvider"
import { CarContext } from "../../providers/CarProvider"

import AdminOptions from "../AdminOptions"

import * as S from "./styles"

const Card = ({ id, name, brand, model, mainImageUrl, value }) => {
	const { token } = useContext(AuthContext)
	const { handleDelete } = useContext(CarContext)
	return (
		<S.Container>
			{token && <AdminOptions handleDelete={() => handleDelete(id)} />}
			<img src={mainImageUrl} />
			<S.Description>
				<span>
					<S.Title>{name}</S.Title>
					<S.Info>
						{brand} • {model}
					</S.Info>
				</span>
				<S.Price>R$ {value}</S.Price>
			</S.Description>
		</S.Container>
	)
}

export default Card
