import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import ChangePlaceItem from './components/ChangePlaceItem'
import * as L from './styles/IndoorAlertPopUp.style'
import { AlertPlace } from '../../../api/profile/getAlertList'
import { useAlertStore } from '../../../stores/useFutureAlerts'

// Props 타입 정의 수정
interface AlertPopUp1Props {
  onClose: () => void
}

const IndoorAlertPopUp: React.FC<AlertPopUp1Props> = ({ onClose }) => {
  const navigate = useNavigate()
  const [groupedAlerts, setGroupedAlerts] = useState<{
    [key: string]: AlertPlace[]
  }>({})

  // Zustand 스토어에서 futureAlerts 가져오기
  const { futureAlerts } = useAlertStore()

  const getDateDifference = (dateString: string) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const alertDate = new Date(dateString)
    alertDate.setHours(0, 0, 0, 0)
    const diffTime = alertDate.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 0) return '오늘'
    if (diffDays === 1) return '내일'
    if (diffDays === 2) return '모레'
    if (diffDays > 2 && diffDays <= 7) return `${diffDays}일 뒤에`
    return `${alertDate.getMonth() + 1}월 ${alertDate.getDate()}일`
  }

  const getWeatherText = (weather: number) => {
    switch (weather) {
      case 1:
        return '비가'
      case 2:
        return '비/눈이'
      case 3:
        return '눈이'
      case 4:
        return '소나기가'
      default:
        return '날씨 변화가'
    }
  }

  //더미데이터 이용-----
  useEffect(() => {
    // 오늘 날짜와 이후의 모든 알림 찾기
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const filteredAndGroupedAlerts = futureAlerts
      .filter(alert => new Date(alert.date) >= today)
      .reduce(
        (acc, alert) => {
          if (!acc[alert.date]) {
            acc[alert.date] = []
          }
          acc[alert.date].push(alert)
          return acc
        },
        {} as { [key: string]: AlertPlace[] },
      )

    setGroupedAlerts(filteredAndGroupedAlerts)
  }, [futureAlerts])

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

  if (Object.keys(groupedAlerts).length === 0) {
    return null // 표시할 알림이 없으면 아무것도 렌더링하지 않음
  }

  const handleClose = () => {
    onClose()
  }

  return (
    <L.Overlay>
      <L.ModalContainer>
        <L.CloseButton onClick={handleClose}>×</L.CloseButton>
        <L.Message>예정된 일정들을 변경해볼까요?</L.Message>
        <L.SmallMessage>변경하고 싶은 일정을 선택해보세요!</L.SmallMessage>
        {Object.entries(groupedAlerts).map(([date, alerts]) => (
          <L.DateGroup key={date}>
            <L.DateHeader>
              <L.DateText>{getDateDifference(date)}</L.DateText>
              <L.WeatherText>
                {getWeatherText(alerts[0].weather)} 올 예정이에요
              </L.WeatherText>
            </L.DateHeader>
            <L.LocationContainer>
              {alerts.map(alert => (
                <L.LocationInfo key={alert.contentid}>
                  <ChangePlaceItem
                    place={alert}
                    onClick={() => handleClick(alert)}
                  />
                </L.LocationInfo>
              ))}
            </L.LocationContainer>
          </L.DateGroup>
        ))}
      </L.ModalContainer>
    </L.Overlay>
  )
}

export default IndoorAlertPopUp
