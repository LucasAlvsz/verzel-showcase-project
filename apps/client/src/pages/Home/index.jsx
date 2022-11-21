import { useEffect, useState } from "react"
import { toast } from "react-toastify"

import carApi from "../../services/carApi"

import Card from "../../components/Card"
import Header from "../../components/Header"
import SearchBar from "../../components/SearchBar"

import * as S from "./styles"
import Loading from "../../components/Loading"

const Home = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [carsData, setCarsData] = useState([])
	const [sortBy, setSortBy] = useState("lowest")

	useEffect(() => {
		setIsLoading(true)
		carApi
			.getCars()
			.then(({ data }) => setCarsData(handleSort(data, sortBy)))
			.catch(err => {
				console.log(err)
				toast.error("Erro ao buscar carros, tente novamente mais tarde")
			})
			.finally(() => setIsLoading(false))
	}, [])

	const handleSort = (data, sortBy) => {
		if (sortBy === "lowest") return data.sort((a, b) => a.value - b.value)
		else if (sortBy === "highest") return data.sort((a, b) => b.value - a.value)
	}

	return (
		<S.Main>
			<Header />
			<S.SearchContainer>
				<S.SearchBarContainer>
					<SearchBar />
				</S.SearchBarContainer>
				<S.FilterContainer>
					<h4>CARROS USADOS</h4>
					<span>
						<p>3.718 Resultados</p>
						<S.OrderBy>
							Odernar:
							<select
								onChange={e => {
									if (e.target.value !== sortBy) {
										setSortBy(e.target.value)
										handleSort(carsData, e.target.value)
									}
								}}>
								<option value="lowest">Menor preço</option>
								<option value="highest"> Maior preço</option>
							</select>
						</S.OrderBy>
					</span>
				</S.FilterContainer>
			</S.SearchContainer>
			<S.ShowcaseContainer>
				{isLoading ? (
					<S.LoadingContainer>
						<Loading />
					</S.LoadingContainer>
				) : (
					carsData?.map(
						({ id, name, model, mainImageURL, value, brand: { name: brandName } }) => (
							<Card
								key={id}
								name={name}
								model={model}
								mainImageUrl={mainImageURL}
								value={value}
								brand={brandName}
							/>
						)
					)
				)}
			</S.ShowcaseContainer>
		</S.Main>
	)
}
export default Home
