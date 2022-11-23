import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import { AuthContext } from "../../providers/AuthProvider"
import { CarContext } from "../../providers/CarProvider"

import AdminOptions from "../AdminOptions"

import * as S from "./styles"

const Card = ({ id, name, brand, model, mainImageUrl, value, admOptions = true }) => {
	const navigate = useNavigate()
	const { token } = useContext(AuthContext)
	const { deleteCar } = useContext(CarContext)
	return (
		<S.Container>
			{admOptions && token && (
				<AdminOptions
					handleDelete={() => deleteCar(id)}
					handleUpdate={() =>
						navigate("/cars/register", { state: { id, method: "updateCar" } })
					}
				/>
			)}
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
