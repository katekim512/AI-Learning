import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'

import { CloseButton } from './styles/CloseButton.style'

const BackButton = () => {
  const navigate = useNavigate()
  return (
    // <Container>
    <CloseButton onClick={() => navigate(-1)}>
      {/* <StyledIcon> */}
      <Icon icon='ei:close' />
      {/* </StyledIcon> */}
    </CloseButton>
    // </Container>
  )
}

export default BackButton
