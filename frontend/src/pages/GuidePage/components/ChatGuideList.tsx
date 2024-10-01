import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { postMessage } from '../../../api/guide/postMessage'
import authToken from '../../../stores/authToken'
import { guideData } from '../datas/GuideList'
import * as L from '../styles/GuideBox.style'

interface ChatGuide {
  guideId: number
  chat: string[]
}

const ChatGuideList = () => {
  const [chatGuides, setChatGuides] = useState<ChatGuide[]>([])
  const token = authToken.getAccessToken()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchChatGuides = async () => {
      if (!token) return

      // 1~20번의 guideId에 대해 postMessage API 호출
      const guideIds = Array.from({ length: 20 }, (_, i) => i + 1) // 1부터 20까지의 guideId
      const responses = await Promise.all(
        guideIds.map(async (guideId): Promise<ChatGuide | null> => {
          const response = await postMessage(token, guideId)
          if (response && response.data.chat.length > 0) {
            return { guideId, chat: response.data.chat }
          }
          return null
        }),
      )

      // 응답 중 null이 아닌 값만 필터링
      const filteredChatGuides = responses.filter(
        guide => guide !== null,
      ) as ChatGuide[]
      setChatGuides(filteredChatGuides)
    }

    fetchChatGuides()
  }, [token])

  if (!chatGuides.length)
    return <L.OverviewText>채팅한 가이드가 없습니다.</L.OverviewText>

  return (
    <L.ScrollableContainer>
      {chatGuides.map(guide => (
        <L.PlaceBoxWrapper
          key={guide.guideId}
          onClick={() =>
            navigate(`/chat/${guide.guideId}/${guideData[guide.guideId].name}`)
          }
        >
          <L.PlaceBoxText>
            <L.PlaceBoxTitle>
              {guideData[guide.guideId]?.name || 'Unknown Guide'}
            </L.PlaceBoxTitle>
            <L.PlaceBoxIntro>
              {guide.chat[guide.chat.length - 1]}
            </L.PlaceBoxIntro>
          </L.PlaceBoxText>
        </L.PlaceBoxWrapper>
      ))}
    </L.ScrollableContainer>
  )
}

export default ChatGuideList
