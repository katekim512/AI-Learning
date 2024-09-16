import { useChatStore } from '../../../../stores/useChatStore'
import * as L from '../../styles/ChatDrawer.style'

const ChatMessages = () => {
  const { messages, isLoading } = useChatStore()

  return (
    <L.MessagesContainer>
      {messages.map(message => (
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
