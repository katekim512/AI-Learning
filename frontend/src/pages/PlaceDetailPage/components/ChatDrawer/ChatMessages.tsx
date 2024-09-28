import { useEffect, useRef } from 'react'

import { useChatStore } from '../../../../stores/useChatStore'
import * as L from '../../styles/ChatDrawer.style'

const ChatMessages = () => {
  const { currentMessages, isLoading } = useChatStore()
  const messagesEndRef = useRef<HTMLDivElement | null>(null)
  const messagesContainerRef = useRef<HTMLDivElement | null>(null)

  // 최신 메시지로 스크롤 이동하는 함수
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    scrollToBottom() // 메시지가 업데이트될 때마다 호출하여 최신 메시지로 스크롤
  }, [currentMessages, isLoading])

  return (
    <L.MessagesContainer ref={messagesContainerRef}>
      {currentMessages.map(message => (
        <L.MessageBubble key={message.id} sender={message.sender}>
          <L.MessageNickname sender={message.sender}>
            {message.sender === 'user' ? '나' : '아이러링 챗봇'}
          </L.MessageNickname>
          <L.MessageText>{message.text}</L.MessageText>
        </L.MessageBubble>
      ))}
      {isLoading && <L.LoadingBubble>로딩 중...</L.LoadingBubble>}
      <div ref={messagesEndRef} />
    </L.MessagesContainer>
  )
}

export default ChatMessages
