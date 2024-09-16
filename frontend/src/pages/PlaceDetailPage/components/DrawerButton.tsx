import arrowUp from '@iconify/icons-iconamoon/arrow-up-2-thin'
import { Icon } from '@iconify/react'

import { StyledButton, StyledIcon } from '../styles/DrawerButton.style'

const DrawerButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <StyledButton onClick={onClick}>
      <StyledIcon>
        <Icon icon={arrowUp} />
      </StyledIcon>
    </StyledButton>
  )
}

export default DrawerButton
