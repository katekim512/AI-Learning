import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import ChangePlaceItem2 from './components/ChangePlaceItem2'
import * as L from './styles/IndoorAlertPopUp2.style'
import { AlertPlace } from '../../../api/profile/getAlertList'
import { useAlertStore } from '../../../stores/useFutureAlerts'
import { useWeatherAlert } from '../../../stores/useWeatherAlert'

interface AlertPopUp2Props {
  onClose: () => void
}

const IndoorAlertPopUp2: React.FC<AlertPopUp2Props> = ({ onClose }) => {
  const navigate = useNavigate()
  const [groupedAlerts, setGroupedAlerts] = useState<{
    [key: string]: AlertPlace[]
  }>({})

  const { futureAlerts } = useAlertStore()
  const { setHasCheckedAlertToday } = useWeatherAlert()

  useEffect(() => {
    if (futureAlerts.length === 0) {
      // futureAlerts가 비어있으면 hasCheckedAlertToday를 true로 설정하고 캘린더 페이지로 이동
      setHasCheckedAlertToday(true)
      onClose()
      navigate('/calendar')
      return
    }

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
  }, [futureAlerts, navigate, onClose, setHasCheckedAlertToday])

  const handleClick = (place: AlertPlace) => {
    navigate(`/indoorplace/${place.date}/${place.contentid}`, {
      state: {
        date: place.date,
        contentid: place.contentid,
        originalPlace: place.place,
      },
    })
  }

  const handleOkayClick = () => {
    setHasCheckedAlertToday(true)
    onClose()
    navigate('/calendar')
  }

  if (Object.keys(groupedAlerts).length === 0) {
    return null
  }

  return (
    <L.Overlay>
      <L.ModalContainer>
        <L.CloseButton onClick={onClose}>×</L.CloseButton>
        <L.Message>이어서 다음 일정도 변경하시겠습니까?</L.Message>
        {/* <L.SmallMessage>변경하고 싶은 일정을 선택해보세요!</L.SmallMessage> */}
        {Object.entries(groupedAlerts).map(([date, alerts]) => (
          <L.DateGroup key={date}>
            {/* <L.DateHeader>
              <L.DateText>{getDateDifference(date)}</L.DateText>
              <L.WeatherText>
                {getWeatherText(alerts[0].weather)} 올 예정이에요
              </L.WeatherText>
            </L.DateHeader> */}
            <L.LocationContainer>
              {alerts.map(alert => (
                <L.LocationInfo key={alert.contentid}>
                  <ChangePlaceItem2
                    place={alert}
                    onClick={() => handleClick(alert)}
                  />
                </L.LocationInfo>
              ))}
            </L.LocationContainer>
          </L.DateGroup>
        ))}
        <L.OkayButton onClick={handleOkayClick}>이제 괜찮아요!</L.OkayButton>
      </L.ModalContainer>
    </L.Overlay>
  )
}

export default IndoorAlertPopUp2
