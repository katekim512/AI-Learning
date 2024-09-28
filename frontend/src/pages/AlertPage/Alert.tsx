import { Icon } from '@iconify/react'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from './styles/Alert.style'
import { getRecentPlace, AlertPlace } from '../../api/profile/getAlertList'
import BackButton from '../../components/BackButton/BackButton'
import authToken from '../../stores/authToken'

const Alert: React.FC = () => {
  const navigate = useNavigate()
  const [alerts, setAlerts] = useState<AlertPlace[]>([])

  const getDateDifference = (dateString: string) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0) // 시간을 00:00:00으로 설정
    const alertDate = new Date(dateString)
    alertDate.setHours(0, 0, 0, 0) // 시간을 00:00:00으로 설정
    const diffTime = alertDate.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays < 0)
      return `${alertDate.getMonth() + 1}월 ${alertDate.getDate()}일`
    if (diffDays === 0) return '오늘'
    if (diffDays === 1) return '내일'
    if (diffDays === 2) return '모레'
    if (diffDays > 2 && diffDays <= 7) return `${diffDays}일 뒤에`

    // 날짜가 7일 이상 차이나면 월/일 형식으로 표시
    return `${alertDate.getMonth() + 1}월 ${alertDate.getDate()}일`
  }

  const isDatePassed = (dateString: string) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0) // 시간을 00:00:00으로 설정
    const alertDate = new Date(dateString)
    alertDate.setHours(0, 0, 0, 0) // 시간을 00:00:00으로 설정
    return alertDate < today
  }

  const handleAlertItemClick = (contentid: number, date: string) => {
    navigate(`/indoorplace/${date}/${contentid}`)
  }

  //더미데이터
  const dummyAlerts: AlertPlace[] = [
    {
      date: '2024-09-25',
      weather: 1,
      contentid: 126508,
      place: '경복궁',
      firstimage: '/img/default_pic.png',
      contenttypeid: 12,
      areacode: 1,
      sigungucode: 1,
    },
    {
      date: '2024-09-26',
      weather: 3,
      contentid: 67890,
      place: '남산타워',
      firstimage: '/img/default_pic.png',
      contenttypeid: 14,
      areacode: 1,
      sigungucode: 2,
    },
    {
      date: '2024-09-29',
      weather: 4,
      contentid: 13579,
      place: '롯데월드',
      firstimage: '/img/default_pic.png',
      contenttypeid: 15,
      areacode: 1,
      sigungucode: 3,
    },
    {
      date: '2024-09-30',
      weather: 2,
      contentid: 246810,
      place: '서울숲',
      firstimage: '/img/default_pic.png',
      contenttypeid: 16,
      areacode: 1,
      sigungucode: 4,
    },
    {
      date: '2024-10-10',
      weather: 3,
      contentid: 54321,
      place: '명동',
      firstimage: '/img/default_pic.png',
      contenttypeid: 12,
      areacode: 1,
      sigungucode: 5,
    },
    {
      date: '2024-10-14',
      weather: 1,
      contentid: 98765,
      place: '동대문 디자인 플라자',
      firstimage: '/img/default_pic.png',
      contenttypeid: 14,
      areacode: 1,
      sigungucode: 6,
    },
    {
      date: '2024-10-18',
      weather: 2,
      contentid: 112233,
      place: '한강공원',
      firstimage: '/img/default_pic.png',
      contenttypeid: 15,
      areacode: 1,
      sigungucode: 7,
    },
    {
      date: '2024-10-21',
      weather: 4,
      contentid: 445566,
      place: '이태원',
      firstimage: '/img/default_pic.png',
      contenttypeid: 12,
      areacode: 1,
      sigungucode: 8,
    },
    {
      date: '2024-10-25',
      weather: 1,
      contentid: 778899,
      place: '홍대 거리',
      firstimage: '/img/default_pic.png',
      contenttypeid: 14,
      areacode: 1,
      sigungucode: 9,
    },
    {
      date: '2024-10-28',
      weather: 3,
      contentid: 123456,
      place: '삼청동 카페 거리',
      firstimage: '/img/default_pic.png',
      contenttypeid: 15,
      areacode: 1,
      sigungucode: 10,
    },
    {
      date: '2024-11-02',
      weather: 4,
      contentid: 654321,
      place: '서울대공원',
      firstimage: '/img/default_pic.png',
      contenttypeid: 12,
      areacode: 1,
      sigungucode: 11,
    },
    {
      date: '2024-11-05',
      weather: 2,
      contentid: 111222,
      place: '잠실 종합운동장',
      firstimage: '/img/default_pic.png',
      contenttypeid: 14,
      areacode: 1,
      sigungucode: 12,
    },
    {
      date: '2024-11-08',
      weather: 1,
      contentid: 333444,
      place: '노량진 수산시장',
      firstimage: '/img/default_pic.png',
      contenttypeid: 15,
      areacode: 1,
      sigungucode: 13,
    },
    {
      date: '2024-11-12',
      weather: 3,
      contentid: 555666,
      place: '코엑스',
      firstimage: '/img/default_pic.png',
      contenttypeid: 12,
      areacode: 1,
      sigungucode: 14,
    },
    {
      date: '2024-11-15',
      weather: 4,
      contentid: 777888,
      place: 'DDP',
      firstimage: '/img/default_pic.png',
      contenttypeid: 14,
      areacode: 1,
      sigungucode: 15,
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

  return (
    <S.Container>
      <S.Header>
        <BackButton />
        <S.Title>알림</S.Title>
      </S.Header>
      <S.AlertList>
        {alerts.map(alert => {
          const isPassed = isDatePassed(alert.date)
          return (
            <S.AlertItem
              key={alert.contentid}
              onClick={() =>
                !isPassed && handleAlertItemClick(alert.contentid, alert.date)
              }
              isPassed={isPassed}
            >
              <S.WeatherIcon>
                <Icon
                  icon={getWeatherIcon(alert.weather)}
                  {...getWeatherIconSize(alert.weather)}
                  color={isPassed ? '#A0A0A0' : '#525FD4'}
                />
              </S.WeatherIcon>
              <S.AlertContent>
                <S.AlertText isPassed={isPassed}>
                  <S.BoldText>{getDateDifference(alert.date)}</S.BoldText>{' '}
                  {getWeatherText(alert.weather)} 올 예정이에요
                </S.AlertText>
                <S.AlertText isPassed={isPassed}>
                  예정된 <S.BoldText>{alert.place}</S.BoldText> 일정을
                  변경해볼까요?
                </S.AlertText>
              </S.AlertContent>
              <S.ArrowIcon>
                <Icon
                  icon='heroicons-solid:chevron-right'
                  width='24'
                  height='24'
                  color={isPassed ? '#A0A0A0' : '#525FD4'}
                />
              </S.ArrowIcon>
            </S.AlertItem>
          )
        })}
      </S.AlertList>
    </S.Container>
  )
}

export default Alert
