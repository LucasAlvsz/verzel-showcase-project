import { toast } from "react-toastify"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

import { useForm } from "../../../hooks"
import authApi from "../../../services/authApi"
import { AuthContext } from "../../../providers/AuthProvider"

import Loading from "../../../components/Loading"
import Logo from "../../../assets/images/verzel-logo-meta.png"

import * as S from "./styles"

const SignIn = () => {
	const navigate = useNavigate()
	const [form, handleForm] = useForm()
	const { setToken } = useContext(AuthContext)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)
	const [isPasswordVisible, setIsPasswordVisible] = useState(false)

	const handleSubmit = e => {
		e.preventDefault()
		setError(null)
		setIsLoading(true)
		authApi
			.signIn(form, true)
			.then(({ data }) => {
				toast.success("Login realizado com sucesso")
				setToken(data.token)
				navigate("/")
			})
			.catch(err => {
				console.log(err)
				setError(err.response.data)
			})
			.finally(() => setIsLoading(false))
	}

	return (
		<S.Main>
			<S.Container>
				<img src={Logo} alt="logo" />
				<p>• Login Adminstrativo •</p>
				<S.Form onSubmit={handleSubmit}>
					<input
						type="email"
						name="email"
						required
						placeholder="Email"
						pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
						disabled={isLoading}
						onChange={handleForm}
					/>
					<span>
						<input
							type={isPasswordVisible ? "text" : "password"}
							name="password"
							required
							placeholder="Senha"
							disabled={isLoading}
							onChange={handleForm}
						/>
						{isPasswordVisible ? (
							<S.HidePassword onClick={() => setIsPasswordVisible(false)} />
						) : (
							<S.ShowPassword onClick={() => setIsPasswordVisible(true)} />
						)}
					</span>
					<button type="submit" disabled={isLoading}>
						{isLoading ? <Loading /> : "Entrar"}
					</button>
				</S.Form>
				<S.Error>{error}</S.Error>
				<S.StyledLink to="/" disabled={isLoading}>
					Voltar para a página inicial
				</S.StyledLink>
			</S.Container>
		</S.Main>
	)
}

export default SignIn
