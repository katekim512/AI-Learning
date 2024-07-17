import LoginForm from './components/LoginForm'
import SocialLogin from './components/SocialLogin'
import * as L from './styles/Login.style'

const Login = () => {
  return (
    <L.Container>
      <L.ImgContainer src="/img/logo_purple.png" alt="logo" />
      <LoginForm />
      <SocialLogin />
      {/* <CreateAccount /> */}
    </L.Container>
  )
}

export default Login
