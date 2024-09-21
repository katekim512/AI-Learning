import arrowIcon from '@iconify/icons-heroicons/arrow-small-up'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'

import { StyledButton, StyledIcon } from './styles/BackButton.style'

const BackButton = () => {
  const navigate = useNavigate()
  return (
    <StyledButton onClick={() => navigate('/profile')}>
      <StyledIcon>
        <Icon icon={arrowIcon} />
      </StyledIcon>
    </StyledButton>
  )
}

export default BackButton
