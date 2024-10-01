import { Icon } from '@iconify/react'

import { StyledButton, StyledIcon } from '../../styles/DrawerButton.style'

const DrawerButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <StyledButton onClick={onClick}>
      <StyledIcon>
        <Icon icon='oui:arrow-up' style={{ color: 'black', height: '24px' }} />
      </StyledIcon>
    </StyledButton>
  )
}

export default DrawerButton
