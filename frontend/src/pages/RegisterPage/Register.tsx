import { useLocation } from 'react-router-dom'

import RegisterForm from './components/RegisterForm'
import * as L from './styles/Register.style'

const Register = () => {
  const location = useLocation()
  const { accessToken } = location.state || {} // accessToken 가져오기

  return (
    <L.Container>
      <L.Title>회원가입</L.Title>
      <RegisterForm accessToken={accessToken} />
    </L.Container>
  )
}

export default Register
