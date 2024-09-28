import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'

import { StyledButton, StyledIcon } from '../styles/DrawerButton.style'

interface DrawerButtonProps {
  onToggleHeight: () => void
  isRotated: boolean
}

const DrawerButton: React.FC<DrawerButtonProps> = ({
  onToggleHeight,
  isRotated,
}) => {
  return (
    <StyledButton onClick={onToggleHeight}>
      <StyledIcon isRotated={isRotated}>
        <Icon icon='oui:arrow-up' style={{ color: 'black', height: '24px' }} />
      </StyledIcon>
    </StyledButton>
  )
}

DrawerButton.propTypes = {
  onToggleHeight: PropTypes.func.isRequired,
  isRotated: PropTypes.bool.isRequired,
}

export default DrawerButton
