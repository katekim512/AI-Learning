import { useEffect } from 'react'

import ChatInput from './ChatInput'
import ChatMessages from './ChatMessages'
import DrawerButton from './DrawerButton'
import { useChatStore } from '../../../../stores/useChatStore'
import * as L from '../../styles/ChatDrawer.style'

const ChatDrawer = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) => {
  const { addMessage } = useChatStore()

  useEffect(() => {
    if (isOpen) {
      // ChatDrawer가 열릴 때 초기 메시지 추가
      addMessage({
        id: Date.now().toString(),
        sender: 'bot',
        text: '안녕! 나는 아링이야. 궁금한 게 있으면 뭐든 물어봐!',
      })
    }
  }, [isOpen, addMessage])

  return (
    <L.DrawerContainer isOpen={isOpen}>
      <DrawerButton onClick={onClose} />
      <ChatMessages /> {/* 메시지 목록 컴포넌트 */}
      <ChatInput /> {/* 사용자 입력 컴포넌트 */}
    </L.DrawerContainer>
  )
}

export default ChatDrawer
