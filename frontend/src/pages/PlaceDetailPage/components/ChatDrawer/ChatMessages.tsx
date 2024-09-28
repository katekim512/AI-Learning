import { useEffect, useRef } from 'react'

import {
  Dot,
  DotsWrapper,
} from '../../../../components/Loading/styles/Loading.style'
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
      {isLoading && (
        <L.LoadingBubble>
          <DotsWrapper>
            <Dot delay='0s' />
            <Dot delay='0.4s' />
            <Dot delay='0.8s' />
          </DotsWrapper>
        </L.LoadingBubble>
      )}
      <div ref={messagesEndRef} />
    </L.MessagesContainer>
  )
}

export default ChatMessages
