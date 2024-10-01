import React from 'react'
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()

  const handleClick = async () => {
    if (token) {
      navigate(`/chat/${item.guideId}/${item.name}`)
    }
  }

  return (
    <>
      <L.PlaceBoxWrapper>
        <L.PlaceBoxContainer>
          <L.PlaceBoxPic alt='profile' src={item.profile} />
          <L.PlaceBoxText>
            <L.PlaceBoxTitle>{item.name}</L.PlaceBoxTitle>
            <L.PlaceBoxCareer>{item.career}</L.PlaceBoxCareer>
            <L.PlaceBoxTags>
              <L.PlaceBoxTag>{item.city[0]}</L.PlaceBoxTag>
              {item.city[1] && <L.PlaceBoxTag>{item.city[1]}</L.PlaceBoxTag>}
              {item.city[2] && <L.PlaceBoxTag>{item.city[2]}</L.PlaceBoxTag>}
            </L.PlaceBoxTags>

            <L.PlaceBoxIntro>{item.description}</L.PlaceBoxIntro>
          </L.PlaceBoxText>
          <L.ChatButton onClick={handleClick}>채팅하기</L.ChatButton>
        </L.PlaceBoxContainer>
      </L.PlaceBoxWrapper>
    </>
  )
}

export default GuideBoxItem
