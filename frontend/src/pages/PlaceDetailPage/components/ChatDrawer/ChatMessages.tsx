import { useChatStore } from '../../../../stores/useChatStore'
import * as L from '../../styles/ChatDrawer.style'

const ChatMessages = () => {
  const { currentMessages, isLoading } = useChatStore() // 현재 contentid에 맞는 메시지 가져오기

  return (
    <L.MessagesContainer>
      {currentMessages.map(message => (
        <L.MessageBubble key={message.id} sender={message.sender}>
          <L.MessageNickname sender={message.sender}>
            {message.sender === 'user' ? '나' : '아이러링 챗봇'}
          </L.MessageNickname>
          <L.MessageText>{message.text}</L.MessageText>
        </L.MessageBubble>
      ))}
      {isLoading && <L.LoadingBubble>로딩 중...</L.LoadingBubble>}
    </L.MessagesContainer>
  )
}

export default ChatMessages
