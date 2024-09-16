import { useNavigate } from 'react-router-dom'

import authKakaoToken from '../../../stores/authKakaoToken'
import authToken from '../../../stores/authToken'
import * as L from '../styles/Profile.style'

const LogoutButton = () => {
  const navigate = useNavigate()

  const handleLogoutButton = () => {
    authToken.removeToken()
    authKakaoToken.removeTokens()
    navigate('/')
  }
  return <L.BottomButton onClick={handleLogoutButton}>로그아웃</L.BottomButton>
}

export default LogoutButton
