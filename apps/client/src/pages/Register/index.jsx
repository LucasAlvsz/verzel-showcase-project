import { useContext, useEffect, useState } from "react"
import { toast } from "react-toastify"

import { useForm } from "../../hooks"
import { CarContext } from "../../providers/CarProvider"

import Loading from "../../components/Loading"
import Card from "../../components/Card"

import * as S from "./styles"

const Register = () => {
	const [form, handleForm, resetForm] = useForm()
	const { getBrands, createCar, carsData, setCarsData } = useContext(CarContext)
	const [brands, setBrands] = useState([])
	const [brandName, setBrandName] = useState("")
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsLoading(true)
		getBrands()
			.then(({ data }) => setBrands(data))
			.catch(err => {
				console.log(err)
				toast.error("Não foi possível carregar as marcas, tente novamente mais tarde.")
			})
			.finally(() => setIsLoading(false))
	}, [])

	const handleSubmit = async e => {
		e.preventDefault()
		setIsLoading(true)
		createCar(form)
			.then(({ data }) => {
				toast.success("Carro cadastrado com sucesso!")
				resetForm()
				setBrandName("")
				const brandObj = brands.find(brand => brand.id === data.brandId)
				setCarsData([...carsData, { ...data, brand: { brandObj } }])
			})
			.catch(err => {
				console.log(err)
				toast.error(
					"Não foi possível cadastrar o carro, verifique os dados e tente novamente."
				)
			})
			.finally(() => setIsLoading(false))
	}

	return (
		<S.Main>
			<S.Container>
				<span>
					<S.Preview>
						<Card
							admOptions={false}
							name={form.name || "Nome do carro"}
							brand={brandName || "Marca"}
							model={form.model || "Modelo"}
							mainImageUrl={
								form.mainImageURL ||
								"https://manxmotortrader.com/wp-content/themes/kensington/img/placeholder.jpg"
							}
							value={form.value || "000000000"}
						/>
					</S.Preview>
					<S.Form onSubmit={handleSubmit}>
						<input
							type="text"
							name="name"
							required
							placeholder="Nome do carro"
							disabled={isLoading}
							onChange={handleForm}
							value={form.name || ""}
						/>

						<input
							type="text"
							name="model"
							required
							placeholder="Modelo do carro"
							disabled={isLoading}
							onChange={handleForm}
							value={form.model || ""}
						/>

						<input
							type="text"
							name="mainImageURL"
							required
							placeholder="Imagem Principal"
							disabled={isLoading}
							onChange={handleForm}
							value={form.mainImageURL || ""}
						/>

						<input
							type="number"
							name="value"
							step="any"
							required
							placeholder="Preço do carro"
							disabled={isLoading}
							onChange={handleForm}
							value={form.value || ""}
						/>

						<select
							name="brandId"
							required
							disabled={isLoading}
							value={brandName || ""}
							onChange={e => {
								setBrandName(brands.find(brand => brand.id == e.target.value).name)
								handleForm(e)
							}}>
							<option value="" disabled selected>
								Selecione uma marca
							</option>
							{brands.map(brand => (
								<option key={brand.id} value={brand.id}>
									{brand.name}
								</option>
							))}
						</select>

						<button type="submit" disabled={isLoading}>
							{isLoading ? <Loading /> : "Cadastrar"}
						</button>
						<button
							type="button"
							onClick={() => {
								resetForm()
								setBrandName("")
							}}>
							Limpar
						</button>
					</S.Form>
				</span>
				<S.StyledLink to="/" disabled={isLoading}>
					Voltar para a página inicial
				</S.StyledLink>
			</S.Container>
		</S.Main>
	)
}

export default Register
