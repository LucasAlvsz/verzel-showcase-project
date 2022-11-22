import { useContext, useState } from "react"
import { toast } from "react-toastify"
import { CarContext } from "../../providers/CarProvider"
import * as S from "./styles"

const AdminOptions = ({ handleDelete }) => {
	const { carsData, setCarsData } = useContext(CarContext)
	const [isLoading, setIsLoading] = useState(false)

	return (
		<S.Options disabled={isLoading}>
			<S.StyledEdit />
			<S.StyledDelete
				onClick={() => {
					setIsLoading(true)
					window.confirm("Tem certeza que deseja deletar este carro?")
					handleDelete()
						.then(({ data }) => {
							toast.success("Carro deletado com sucesso")
							setCarsData(carsData.filter(car => car.id !== data.id))
						})
						.catch(err => {
							console.log(err)
							toast.error("Erro ao deletar carro, tente novamente mais tarde")
						})
						.finally(() => setIsLoading(false))
				}}
			/>
		</S.Options>
	)
}

export default AdminOptions
