import { Icon } from '@iconify/react'

import { CloseButton, Container } from './styles/CloseButton.style'

const CloseButtonComponent = ({ onClick }: { onClick: () => void }) => {
  return (
    <Container>
      <CloseButton onClick={onClick}>
        <Icon icon='ei:close' />
      </CloseButton>
    </Container>
  )
}

export default CloseButtonComponent
