import CreateAccount from './components/CreateAccount'
import LoginForm from './components/LoginForm'
import * as L from './styles/Login.style'

const Login = () => {
  return (
    <L.Container>
      <L.ImgContainer src="/img/logo_purple.png" alt="logo" />
      <LoginForm />
      <CreateAccount />
    </L.Container>
  )
}

export default Login
