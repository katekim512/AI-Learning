import { useNavigate } from 'react-router-dom'

import { StyledButton, StyledIcon } from './styles/BackButton.style'

const BackButton = () => {
  const navigate = useNavigate()
  return (
    <StyledButton onClick={() => navigate(-1)}>
      <StyledIcon />
    </StyledButton>
  )
}

export default BackButton
