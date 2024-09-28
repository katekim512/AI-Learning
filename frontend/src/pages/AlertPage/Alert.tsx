import { Icon } from '@iconify/react'
import React, { useState, useEffect } from 'react'

import * as S from './styles/Alert.style'
import { getRecentPlace, AlertPlace } from '../../api/profile/getAlertList'
import BackButton from '../../components/BackButton/BackButton'
import authToken from '../../stores/authToken'

const Alert: React.FC = () => {
  const [alerts, setAlerts] = useState<AlertPlace[]>([])

  const getDateDifference = (dateString: string) => {
    const today = new Date()
    const alertDate = new Date(dateString)
    const diffTime = alertDate.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 0) return '오늘'
    if (diffDays === 1) return '내일'
    if (diffDays === 2) return '모레'
    if (diffDays > 2 && diffDays <= 7) return `${diffDays}일 뒤에`

    // 날짜가 7일 이상 차이나면 월/일 형식으로 표시
    return `${alertDate.getMonth() + 1}월 ${alertDate.getDate()}일`
  }

  //더미데이터
  const dummyAlerts: AlertPlace[] = [
    {
      date: '2024-09-28',
      weather: 1,
      contentid: 12345,
      place: '경복궁',
      firstimage: '/img/default_pic.png',
      contenttypeid: 12,
      areacode: 1,
      sigungucode: 1,
    },
    {
      date: '2024-09-29',
      weather: 3,
      contentid: 67890,
      place: '남산타워',
      firstimage: '/img/default_pic.png',
      contenttypeid: 14,
      areacode: 1,
      sigungucode: 2,
    },
    {
      date: '2024-10-03',
      weather: 4,
      contentid: 13579,
      place: '롯데월드',
      firstimage: '/img/default_pic.png',
      contenttypeid: 15,
      areacode: 1,
      sigungucode: 3,
    },
  ]

  useEffect(() => {
    const fetchAlerts = async () => {
      const token = authToken.getAccessToken()
      try {
        const response = await getRecentPlace(token)
        if (response && response.data) {
          setAlerts(response.data)
        }
      } catch (error) {
        console.error('Failed to fetch alerts:', error)
      }
    }

    fetchAlerts()
  }, [])

  //더미데이터 사용
  useEffect(() => {
    setAlerts(dummyAlerts)
  }, [])

  const getWeatherIcon = (weather: number) => {
    switch (weather) {
      case 1:
        return 'fluent:weather-rain-48-filled'
      case 2:
        return 'fluent:weather-snow-48-filled'
      case 3:
        return 'mingcute:snow-fill'
      case 4:
        return 'f7:cloud-bolt-rain-fill'
      default:
        return 'fluent:weather-partly-cloudy-day-48-filled'
    }
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
        return '날씨 변화'
    }
  }

  //아이콘 크기가 다 달라서 통일감 있게 보이려고 조정
  const getWeatherIconSize = (weather: number) => {
    switch (weather) {
      case 1: // fluent
      case 2: // fluent
      case 3: // mingcute
        return { width: '24', height: '24' }
      case 4: // f7
        return { width: '20', height: '20' }
      default: // fluent
        return { width: '24', height: '24' }
    }
  }

  return (
    <S.Container>
      <S.Header>
        <BackButton />
        <S.Title>알림</S.Title>
      </S.Header>
      <S.AlertList>
        {alerts.map(alert => (
          <S.AlertItem key={alert.contentid}>
            <S.WeatherIcon>
              <Icon
                icon={getWeatherIcon(alert.weather)}
                {...getWeatherIconSize(alert.weather)}
                color='#525FD4'
              />
            </S.WeatherIcon>
            <S.AlertContent>
              <S.AlertText>
                <S.BoldText>{getDateDifference(alert.date)}</S.BoldText>{' '}
                {getWeatherText(alert.weather)} 올 예정이에요
              </S.AlertText>
              <S.AlertText>
                예정된 <S.BoldText>{alert.place}</S.BoldText> 일정을
                변경해볼까요?
              </S.AlertText>
            </S.AlertContent>
            <S.ArrowIcon>
              <Icon
                icon='heroicons-solid:chevron-right'
                width='24'
                height='24'
              />
            </S.ArrowIcon>
          </S.AlertItem>
        ))}
      </S.AlertList>
    </S.Container>
  )
}

export default Alert
