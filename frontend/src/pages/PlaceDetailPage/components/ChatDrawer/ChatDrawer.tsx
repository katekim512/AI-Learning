import { useEffect } from 'react'

import ChatInput from './ChatInput'
import ChatMessages from './ChatMessages'
import DrawerButton from './DrawerButton'
import { useChatStore } from '../../../../stores/useChatStore'
import * as L from '../../styles/ChatDrawer.style'

const ChatDrawer = ({
  contentid,
  isopen,
  onclose,
}: {
  contentid: string
  isopen: boolean
  onclose: () => void
}) => {
  const { addMessage, setMessages, chatHistories, clearMessages } =
    useChatStore()

  const initializeMessages = () => {
    // 이전 대화가 있으면 불러오고, 없으면 초기 메시지 추가
    if (chatHistories[contentid] && chatHistories[contentid].length > 0) {
      setMessages(chatHistories[contentid], contentid)
    } else {
      clearMessages() // 현재 대화 비우기
      addMessage(
        {
          id: Date.now().toString(),
          sender: 'bot',
          text: '안녕! 나는 아링이야. 궁금한 게 있으면 뭐든 물어봐!',
        },
        contentid,
      )
    }
  }

  useEffect(() => {
    if (isopen) {
      initializeMessages()
    }
    // 의존성 배열에 함수가 아닌 값만 추가하여 무한 반복을 방지
  }, [isopen, contentid])

  return (
    <L.DrawerContainer isopen={isopen}>
      <DrawerButton onClick={onclose} />
      <ChatMessages /> {/* 메시지 목록 컴포넌트 */}
      <ChatInput contentid={contentid} /> {/* 사용자 입력 컴포넌트 */}
    </L.DrawerContainer>
  )
}

export default ChatDrawer
