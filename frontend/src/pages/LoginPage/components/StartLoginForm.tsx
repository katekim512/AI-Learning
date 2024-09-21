import { useNavigate } from 'react-router-dom'

import SocialLogin from './SocialLogin'
import * as L from '../styles/Start.style'

const StartLoginForm = () => {
  const navigate = useNavigate()

  const handleMoveLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    navigate('/login')
  }

  return (
    <L.Form onSubmit={handleMoveLogin}>
      <L.LoginButton>이메일로 시작하기</L.LoginButton>
      <SocialLogin />
    </L.Form>
  )
}

export default StartLoginForm
