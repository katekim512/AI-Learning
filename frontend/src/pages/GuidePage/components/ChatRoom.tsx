import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import BackButton from './BackButton/BackButton'
import { postMessage } from '../../../api/guide/postMessage'
import { postSend } from '../../../api/guide/postSend'
import authToken from '../../../stores/authToken'
import * as C from '../styles/ChatRoom.style'

const ChatRoom = () => {
  const { guideId } = useParams<{ guideId: string }>()
  const { name } = useParams<{ name: string }>()
  const [messages, setMessages] = useState<string[]>([])
  const [inputValue, setInputValue] = useState<string>('')
  const token = authToken.getAccessToken()

  // 대화 내용을 불러오는 함수
  const fetchMessages = async () => {
    if (token && guideId) {
      try {
        const response = await postMessage(token, Number(guideId))
        if (response?.data?.chat) {
          setMessages(response.data.chat)
        }
      } catch (error) {
        console.error('메시지 불러오기 실패:', error)
      }
    }
  }

  // 페이지가 로드될 때 메시지 불러오기
  useEffect(() => {
    fetchMessages()
  }, [guideId, token])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    if (token && guideId) {
      try {
        const response = await postSend(token, Number(guideId), inputValue)
        if (response) {
          setMessages([...messages, inputValue])
          setInputValue('') // 메시지 전송 후 입력값 비우기
        }
      } catch (error) {
        console.error('메시지 전송 실패:', error)
      }
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage()
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
          onKeyPress={handleKeyPress}
        />
        <C.SendButton onClick={handleSendMessage}>전송</C.SendButton>
      </C.ChatInputContainer>
    </C.ChatContainer>
  )
}

export default ChatRoom
