import React from 'react'

import { postMessage } from '../../../api/guide/postMessage'
import { postSend } from '../../../api/guide/postSend'
import authToken from '../../../stores/authToken'
import * as L from '../styles/GuideBox.style'

interface PlaceBoxItemProps {
  item: {
    guideId: number
    name: string
    profile: string
    career: string
    city: string[]
    description: string
  }
}

const GuideBoxItem: React.FC<PlaceBoxItemProps> = ({ item }) => {
  const token = authToken.getAccessToken()

  const handleClick = async () => {
    if (token) {
      // 현재 시간을 타임스탬프로 가져와서 문자열로 변환
      const timestamp = new Date().toISOString()
      const messageContent = `${item.name} ${timestamp}`

      const sendMsg = await postSend(token, item.guideId, messageContent)

      if (sendMsg) {
        const message = await postMessage(token, item.guideId)
        if (message) {
          console.log(message.data)
        }
      }
    }
  }

  return (
    <>
      <L.PlaceBoxWrapper>
        <L.PlaceBoxContainer onClick={handleClick}>
          <L.PlaceBoxPic alt='profile' src={item.profile} />
          <L.PlaceBoxText>
            <L.PlaceBoxTitle>{item.name}</L.PlaceBoxTitle>
            <L.PlaceBoxCity>{item.description}</L.PlaceBoxCity>
          </L.PlaceBoxText>
        </L.PlaceBoxContainer>
      </L.PlaceBoxWrapper>
    </>
  )
}

export default GuideBoxItem
