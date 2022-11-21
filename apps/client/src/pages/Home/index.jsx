import Card from "../../components/Card"
import Header from "../../components/Header"
import SearchBar from "../../components/SearchBar"
import * as S from "./styles"

const Home = () => {
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
							<select name="" id="">
								<option value="">Menor preço</option>
								<option value="">Maior preço</option>
							</select>
						</S.OrderBy>
					</span>
				</S.FilterContainer>
			</S.SearchContainer>
			<S.ShowcaseContainer>
				<Card
					name="Fiat Uno"
					brand="Fiat"
					model="Uno"
					mainImageUrl="https://images.kavak.services/images/157625/EXTERIOR-frontSidePilotNear-1642860586210.jpeg?d=540x310"
					value="R$ 20.000,00"
				/>
				<Card
					name="Fiat Uno"
					brand="Fiat"
					model="Uno"
					mainImageUrl="https://images.kavak.services/images/157625/EXTERIOR-frontSidePilotNear-1642860586210.jpeg?d=540x310"
					value="R$ 20.000,00"
				/>
				<Card
					name="Fiat Uno"
					brand="Fiat"
					model="Uno"
					mainImageUrl="https://images.kavak.services/images/157625/EXTERIOR-frontSidePilotNear-1642860586210.jpeg?d=540x310"
					value="R$ 20.000,00"
				/>
				<Card
					name="Fiat Uno"
					brand="Fiat"
					model="Uno"
					mainImageUrl="https://images.kavak.services/images/157625/EXTERIOR-frontSidePilotNear-1642860586210.jpeg?d=540x310"
					value="R$ 20.000,00"
				/>
				<Card
					name="Fiat Uno"
					brand="Fiat"
					model="Uno"
					mainImageUrl="https://images.kavak.services/images/157625/EXTERIOR-frontSidePilotNear-1642860586210.jpeg?d=540x310"
					value="R$ 20.000,00"
				/>
				<Card
					name="Fiat Uno"
					brand="Fiat"
					model="Uno"
					mainImageUrl="https://images.kavak.services/images/157625/EXTERIOR-frontSidePilotNear-1642860586210.jpeg?d=540x310"
					value="R$ 20.000,00"
				/>
				<Card
					name="Fiat Uno"
					brand="Fiat"
					model="Uno"
					mainImageUrl="https://images.kavak.services/images/157625/EXTERIOR-frontSidePilotNear-1642860586210.jpeg?d=540x310"
					value="R$ 20.000,00"
				/>
				<Card
					name="Fiat Uno"
					brand="Fiat"
					model="Uno"
					mainImageUrl="https://images.kavak.services/images/157625/EXTERIOR-frontSidePilotNear-1642860586210.jpeg?d=540x310"
					value="R$ 20.000,00"
				/>
				<Card
					name="Fiat Uno"
					brand="Fiat"
					model="Uno"
					mainImageUrl="https://images.kavak.services/images/157625/EXTERIOR-frontSidePilotNear-1642860586210.jpeg?d=540x310"
					value="R$ 20.000,00"
				/>
				<Card
					name="Fiat Uno"
					brand="Fiat"
					model="Uno"
					mainImageUrl="https://images.kavak.services/images/157625/EXTERIOR-frontSidePilotNear-1642860586210.jpeg?d=540x310"
					value="R$ 20.000,00"
				/>
				<Card
					name="Fiat Uno"
					brand="Fiat"
					model="Uno"
					mainImageUrl="https://images.kavak.services/images/157625/EXTERIOR-frontSidePilotNear-1642860586210.jpeg?d=540x310"
					value="R$ 20.000,00"
				/>
				<Card
					name="Fiat Uno"
					brand="Fiat"
					model="Uno"
					mainImageUrl="https://images.kavak.services/images/157625/EXTERIOR-frontSidePilotNear-1642860586210.jpeg?d=540x310"
					value="R$ 20.000,00"
				/>
				<Card
					name="Fiat Uno"
					brand="Fiat"
					model="Uno"
					mainImageUrl="https://images.kavak.services/images/157625/EXTERIOR-frontSidePilotNear-1642860586210.jpeg?d=540x310"
					value="R$ 20.000,00"
				/>
				<Card
					name="Fiat Uno"
					brand="Fiat"
					model="Uno"
					mainImageUrl="https://images.kavak.services/images/157625/EXTERIOR-frontSidePilotNear-1642860586210.jpeg?d=540x310"
					value="R$ 20.000,00"
				/>
				<Card
					name="Fiat Uno"
					brand="Fiat"
					model="Uno"
					mainImageUrl="https://images.kavak.services/images/157625/EXTERIOR-frontSidePilotNear-1642860586210.jpeg?d=540x310"
					value="R$ 20.000,00"
				/>
			</S.ShowcaseContainer>
		</S.Main>
	)
}
export default Home
