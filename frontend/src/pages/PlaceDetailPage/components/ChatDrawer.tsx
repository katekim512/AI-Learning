import DrawerButton from './DrawerButton'
import * as L from '../styles/ChatDrawer.style'

const ChatDrawer = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) => {
  return (
    <L.DrawerContainer isOpen={isOpen}>
      <DrawerButton onClick={onClose} />
    </L.DrawerContainer>
  )
}

export default ChatDrawer
