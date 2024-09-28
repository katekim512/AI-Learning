import { useState } from 'react'

import { useChatStore } from '../../../../stores/useChatStore'
import * as L from '../../styles/ChatDrawer.style'

const ChatInput = ({ contentid }: { contentid: string }) => {
  const [input, setInput] = useState('')
  const { addMessage, setLoading } = useChatStore()

  const handleSendMessage = async () => {
    if (!input.trim()) return

    // 사용자의 메시지 추가
    addMessage(
      {
        id: Date.now().toString(),
        sender: 'user',
        text: input,
      },
      contentid,
    )

    // ChatGPT API 호출 준비
    setLoading(true)
    setInput('')

    const fetchChatGPTResponse = async (retryCount = 3): Promise<void> => {
      try {
        // ChatGPT API 호출
        const response = await fetch(
          'https://api.openai.com/v1/chat/completions',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
              model: 'gpt-4o',
              messages: [
                {
                  role: 'user',
                  content: `${input}이라는 질문에 답변해주면 돼. 역사적으로 사실이 맞는지 검증하고 대체적으로 대한민국 사람들이 인지하고 있는 정보로 답변해줘! 한국어로 대답해주고, 반말로 아이가 쉽게 이해하도록 설명해줘! 친구에게 설명해준다고 생각하고 답변을 작성해줘!`,
                },
              ],
              max_tokens: 1000,
            }),
          },
        )

        if (!response.ok) {
          if (response.status === 429 && retryCount > 0) {
            // 429 에러 발생 시 2초 후 재시도
            await new Promise(resolve => setTimeout(resolve, 2000))
            return fetchChatGPTResponse(retryCount - 1)
          }
          throw new Error(`Error: ${response.status}`)
        }

        const data = await response.json()

        // AI의 응답 메시지 추가
        addMessage(
          {
            id: Date.now().toString(),
            sender: 'bot',
            text:
              data.choices[0].message.content.trim() ||
              '답변을 생성할 수 없습니다.',
          },
          contentid,
        )
      } catch (error) {
        console.error('Error fetching ChatGPT response:', error)
        addMessage(
          {
            id: Date.now().toString(),
            sender: 'bot',
            text: '오류가 발생했습니다. 다시 시도해 주세요.',
          },
          contentid,
        )
      } finally {
        setLoading(false)
      }
    }

    await fetchChatGPTResponse()
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
