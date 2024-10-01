import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import BackButton from './BackButton/BackButton'
import { postSend } from '../../../api/guide/postSend'
import authToken from '../../../stores/authToken'
import * as C from '../styles/ChatRoom.style'

const ChatRoom = () => {
  const { guideId } = useParams<{ guideId: string }>()
  const { name } = useParams<{ name: string }>()
  const [messages, setMessages] = useState<string[]>([])
  const [inputValue, setInputValue] = useState<string>('')
  const token = authToken.getAccessToken()

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    if (token && guideId) {
      try {
        const response = await postSend(token, Number(guideId), inputValue)
        if (response) {
          setMessages([...messages, inputValue])
          setInputValue('')
        }
      } catch (error) {
        console.error('메시지 전송 실패:', error)
      }
    }
  }

  return (
    <C.ChatContainer>
      <BackButton />
      <C.ChatHeader>{name}</C.ChatHeader>
      <C.MessageList>
        {messages.map((message, index) => (
          <C.Message key={index}>{message}</C.Message>
        ))}
      </C.MessageList>
      <C.ChatInputContainer>
        <C.ChatInput
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder='메시지를 입력하세요...'
        />
        <C.SendButton onClick={handleSendMessage}>전송</C.SendButton>
      </C.ChatInputContainer>
    </C.ChatContainer>
  )
}

export default ChatRoom
