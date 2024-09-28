import React, { useState, useEffect } from 'react'
import { FaWandMagicSparkles } from 'react-icons/fa6'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSwipeable } from 'react-swipeable'

import MainCalendar from './components/MainCalendar'
import * as L from './styles/Calendar.style'
import { getRecentPlace, AlertPlace } from '../../api/profile/getAlertList'
import IndoorAlertPopUp from '../../components/AlertPopUp/IndoorAlertPopUp/IndoorAlertPopUp'
import useLikeList from '../../hooks/useLikeList'
import { useUser } from '../../hooks/useUser'
import useVisitedList from '../../hooks/useVisitedList'
import authToken from '../../stores/authToken'

const Calendar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const selectedDate = location.state?.selectedDate || null
  const [showPopup, setShowPopup] = useState(false)
  const [alertPlaces, setAlertPlaces] = useState<AlertPlace[]>([])

  const { refetch: refetchUser } = useUser()
  const { refetch: refetchLikeList } = useLikeList()
  const { refetch: refetchVisitedList } = useVisitedList()

  const today = new Date()
  const [currentDate, setCurrentDate] = useState({
    year: today.getFullYear(),
    month: today.getMonth() + 1,
  })

  // 더미 데이터는 그대로 유지
  const dummyData: AlertPlace[] = [
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
      date: '2024-09-30',
      weather: 2,
      contentid: 246810,
      place: '건대입구',
      firstimage: '/img/default_pic.png',
      contenttypeid: 16,
      areacode: 1,
      sigungucode: 4,
    },
  ]
  //API 이용-------
  useEffect(() => {
    const fetchAlertPlaces = async () => {
      const token = authToken.getAccessToken()
      try {
        const response = await getRecentPlace(token)
        if (response && response.data) {
          const today = new Date()
          today.setHours(0, 0, 0, 0) // 오늘 날짜의 시작으로 설정

          const futureAlerts = response.data.filter((place: AlertPlace) => {
            const placeDate = new Date(place.date)
            return placeDate >= today
          })

          setAlertPlaces(futureAlerts)

          if (futureAlerts.length > 0) {
            setShowPopup(true) // 미래 알림이 있을 경우에만 팝업 표시
          }
        }
      } catch (error) {
        console.error('알림 장소 가져오기 실패:', error)
      }
    }

    fetchAlertPlaces()
  }, [])

  //더미데이트 이용
  useEffect(() => {
    const fetchAlertPlaces = async () => {
      try {
        const response = dummyData
        const today = new Date()
        today.setHours(0, 0, 0, 0) // 오늘 날짜의 시작으로 설정

        const futureAlerts = response.filter((place: AlertPlace) => {
          const placeDate = new Date(place.date)
          return placeDate >= today
        })

        setAlertPlaces(futureAlerts)

        if (futureAlerts.length > 0) {
          setShowPopup(true) // 미래 알림이 있을 경우에만 팝업 표시
        }
      } catch (error) {
        console.error('알림 장소 가져오기 실패:', error)
      }
    }

    fetchAlertPlaces()
  }, [])

  // selectedDate가 존재하면 그 날짜의 Drawer를 열기 위한 로직
  useEffect(() => {
    if (selectedDate) {
      const [year, month] = selectedDate.split('-')
      setCurrentDate({
        year: Number(year),
        month: Number(month),
      })
    } else {
      // selectedDate가 없을 때만 현재 날짜로 설정
      setCurrentDate({
        year: today.getFullYear(),
        month: today.getMonth() + 1,
      })
    }
  }, [selectedDate])

  const saveInfos = async () => {
    await refetchUser()
    await refetchLikeList()
    await refetchVisitedList()
  }

  useEffect(() => {
    saveInfos()
  }, [])

  const handleAIScheduleButton = () => {
    navigate('/ai-schedule-step1')
  }

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentDate({ ...currentDate, year: Number(event.target.value) })
  }

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentDate({ ...currentDate, month: Number(event.target.value) })
  }

  const generateYearOptions = () => {
    const years = []
    for (let i = 2024; i <= today.getFullYear() + 1; i++) {
      years.push(
        <option key={i} value={i}>
          {i}
        </option>,
      )
    }
    return years
  }

  const generateMonthOptions = () => {
    const months = []
    for (let i = 1; i <= 12; i++) {
      months.push(
        <option key={i} value={i}>
          {i}
        </option>,
      )
    }
    return months
  }

  const handleSwipeLeft = () => {
    if (
      currentDate.year === today.getFullYear() + 1 &&
      currentDate.month === 12
    ) {
      return
    }

    if (currentDate.month === 12) {
      setCurrentDate({ year: currentDate.year + 1, month: 1 })
    } else {
      setCurrentDate({ year: currentDate.year, month: currentDate.month + 1 })
    }
  }

  const handleSwipeRight = () => {
    if (currentDate.year === 2024 && currentDate.month === 1) {
      return
    }

    if (currentDate.month === 1) {
      setCurrentDate({ year: currentDate.year - 1, month: 12 })
    } else {
      setCurrentDate({ year: currentDate.year, month: currentDate.month - 1 })
    }
  }

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
    trackMouse: true,
    delta: 10,
  })

  const handleClosePopup = () => {
    setShowPopup(false)
  }

  return (
    <>
      <div {...handlers}>
        <L.HeaderSection>
          <L.HeaderTitle>
            <L.CalendarSelect
              value={currentDate.year}
              onChange={handleYearChange}
            >
              {generateYearOptions()}
            </L.CalendarSelect>
            년&nbsp;&nbsp;
            <L.CalendarSelect
              value={currentDate.month}
              onChange={handleMonthChange}
            >
              {generateMonthOptions()}
            </L.CalendarSelect>
            월
          </L.HeaderTitle>
          <L.AIScheduleButton onClick={handleAIScheduleButton}>
            <FaWandMagicSparkles />
            &nbsp;&nbsp;AI 교육여행
          </L.AIScheduleButton>
        </L.HeaderSection>
        <MainCalendar
          year={currentDate.year}
          month={currentDate.month}
          selectedDate={selectedDate}
        />
      </div>
      {showPopup && (
        <IndoorAlertPopUp
          alertPlaces={alertPlaces}
          onClose={handleClosePopup}
        />
      )}
    </>
  )
}

export default Calendar
