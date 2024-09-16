import { useState } from 'react'

import { useChatStore } from '../../../../stores/useChatStore'
import * as L from '../../styles/ChatDrawer.style'

const ChatInput = () => {
  const [input, setInput] = useState('')
  const { addMessage, setLoading } = useChatStore()

  const handleSendMessage = async () => {
    if (!input.trim()) return

    // 사용자의 메시지 추가
    addMessage({
      id: Date.now().toString(),
      sender: 'user',
      text: input,
    })

    // ChatGPT API 호출 준비
    setLoading(true)
    setInput('')

    try {
      // ChatGPT API 호출
      const response = await fetch(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            prompt: input,
            max_tokens: 150,
          }),
        },
      )
      const data = await response.json()

      // AI의 응답 메시지 추가
      addMessage({
        id: Date.now().toString(),
        sender: 'bot',
        text: data.choices[0].text.trim() || '답변을 생성할 수 없습니다.',
      })
    } catch (error) {
      console.error('Error fetching ChatGPT response:', error)
      addMessage({
        id: Date.now().toString(),
        sender: 'bot',
        text: '오류가 발생했습니다. 다시 시도해 주세요.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <L.InputContainer>
      <L.InputField
        type='text'
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder='메시지를 입력하세요...'
        onKeyPress={e => e.key === 'Enter' && handleSendMessage()}
      />
      <L.SendButton onClick={handleSendMessage}>전송</L.SendButton>
    </L.InputContainer>
  )
}

export default ChatInput
