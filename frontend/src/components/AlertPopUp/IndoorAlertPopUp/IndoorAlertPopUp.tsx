import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import ChangePlaceItem from './components/ChangePlaceItem'
import * as L from './styles/IndoorAlertPopUp.style'
import { AlertPlace } from '../../../api/profile/getAlertList'
import authToken from '../../../stores/authToken'

// Props 타입 정의
interface AlertPopUp1Props {
  message: string
  onClose: () => void // X 버튼 클릭 시 팝업 닫기
}

const IndoorAlertPopUp: React.FC<AlertPopUp1Props> = ({ message, onClose }) => {
  const navigate = useNavigate()

  const [places, setPlaces] = useState<AlertPlace[]>([])
  const token = authToken.getAccessToken()
  const dummyData: AlertPlace[] = [
    {
      date: '2023-06-15',
      weather: 1,
      contentid: 12345,
      place: '서울 롯데월드',
      firstimage: '/img/default_pic.png',
      contenttypeid: 12,
      areacode: 1,
      sigungucode: 1,
    },
    {
      date: '2023-06-16',
      weather: 2,
      contentid: 67890,
      place: '부산 해운대 아쿠아리움',
      firstimage: '/img/default_pic.png',
      contenttypeid: 14,
      areacode: 6,
      sigungucode: 2,
    },
  ]
  //API 이용-------
  //   useEffect(() => {
  //     const fetchPlaces = async () => {
  //       try {
  //         const response = await getRecentPlace(token)
  //         if (response && response.data) {
  //           setPlaces(response.data)
  //         }
  //       } catch (error) {
  //         console.error('장소 데이터를 가져오는 데 실패했습니다:', error)
  //       }
  //     }

  //     fetchPlaces()
  //   }, [])

  //더미데이터 이용-----
  useEffect(() => {
    setPlaces(dummyData)
  }, [token])

  const handleClick = (place: AlertPlace) => {
    // IndoorPlace 페이지로 이동
    navigate(`/indoorplace/${place.date}/${place.contentid}`, {
      state: {
        date: place.date,
        contentid: place.contentid,
        originalPlace: place.place,
      },
    })
  }

  const handleNavigate = () => {
    navigate('/IndoorPlace')
  }

  return (
    <L.Overlay>
      <L.ModalContainer>
        <L.CloseButton onClick={onClose}>×</L.CloseButton> {/* X 버튼 */}
        <L.Message>{message}</L.Message>
        <L.Message>예정된 일정을 변경해볼까요?</L.Message>
        <L.LocationContainer>
          <L.LocationInfo>
            {places.map(place => (
              <ChangePlaceItem
                key={place.contentid}
                place={place}
                onClick={() => handleClick(place)}
              />
            ))}
          </L.LocationInfo>
        </L.LocationContainer>
        <L.NavigateButton onClick={handleNavigate}>
          실내장소 보러가기
        </L.NavigateButton>
      </L.ModalContainer>
    </L.Overlay>
  )
}

export default IndoorAlertPopUp
