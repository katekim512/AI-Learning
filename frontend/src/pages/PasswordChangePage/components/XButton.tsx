import { useNavigate } from 'react-router-dom'

import * as L from '../styles/PasswordChange.style'

const XButton = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/login')
  }

  return <L.StyledButton onClick={handleClick}>✕</L.StyledButton>
}

export default XButton
