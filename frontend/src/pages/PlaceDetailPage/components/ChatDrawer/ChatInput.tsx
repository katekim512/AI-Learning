import { useState } from 'react'

import { useChatStore } from '../../../../stores/useChatStore'
import * as L from '../../styles/ChatDrawer.style'

const ChatInput = ({
  contentid,
  overview,
}: {
  contentid: string
  overview: string
}) => {
  const [input, setInput] = useState('')
  const { addMessage, setLoading, chatHistories } = useChatStore()

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
        const previousMessages = chatHistories[contentid] || []

        // 기존 대화 내역을 ChatGPT API 메시지 형식에 맞게 변환
        const messagesForGPT = previousMessages.map(message => ({
          role: message.sender === 'user' ? 'user' : 'assistant',
          content: message.text,
        }))

        // 사용자의 현재 입력 추가
        messagesForGPT.push({
          role: 'user',
          content: `너는 다음 장소에 대한 전문가로 해당 장소와 관련된 질문에 답변해주는 챗봇 아링이야! ${overview} 장소에 대한 설명 이해했으면, ${input}이라는 질문에 답변해주면 돼. 역사적으로 사실이 맞는지 검증하고 대체적으로 대한민국 사람들이 인지하고 있는 정보로 한국어로 답변해줘! 반말로 아이가 쉽게 이해할 수 있게 설명해줘! 근데 ${input} <- 이 질문이 해당 장소와 큰 연관이 없거나 쓸데없는 질문인 경우 다른 질문 해달라고 해줘!`,
        })

        const response = await fetch(
          'https://api.openai.com/v1/chat/completions',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
              model: 'gpt-4',
              messages: messagesForGPT,
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
