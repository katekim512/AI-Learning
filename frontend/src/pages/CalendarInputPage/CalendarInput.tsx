import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import CalendarFrame from './components/CalendarFrame'
import * as L from './styles/CalendarFrame.style'
import CloseButton from '../../components/CloseButton/CloseButton'
import { useScheduleStore } from '../../stores/useScheduleStore'

const CalendarInput = () => {
  const navigate = useNavigate()
  const today = new Date()
  const startDate = useScheduleStore(state => state.startDate)
  const [currentDate, setCurrentDate] = useState({
    year: today.getFullYear(),
    month: today.getMonth() + 1,
  })
  const [selectedDate, setSelectedDate] = useState<string>(
    today.toISOString().split('T')[0],
  )

  const setStartDate = useScheduleStore(state => state.setStartDate)

  useEffect(() => {
    setCurrentDate({ year: today.getFullYear(), month: today.getMonth() + 1 })
    setSelectedDate(today.toISOString().split('T')[0])
    console.log(`Initial selected date: ${today.toISOString().split('T')[0]}`)
  }, [])

  const handleApplyDate = () => {
    setStartDate(selectedDate)
    console.log(`Applied start date: ${selectedDate}`)
    navigate('/ai-schedule-step1')
  }

  const renderSelectedDate = () => {
    if (!selectedDate) return '일정 적용'
    const [year, month, day] = selectedDate.split('-').map(Number)
    const date = new Date(year, month - 1, day)
    const dayNames = ['일', '월', '화', '수', '목', '금', '토']
    return `시작일 ${month}.${day} (${dayNames[date.getDay()]}) 적용`
  }

  return (
    <>
      <L.HeaderSection>
        <CloseButton />
        <L.HeaderTitle>날짜 선택</L.HeaderTitle>
      </L.HeaderSection>
      <L.CalendarWrapper>
        <CalendarFrame
          year={currentDate.year}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          startDate={startDate}
        />
      </L.CalendarWrapper>
      <L.BottomSection>
        <L.FixedBottomButton onClick={handleApplyDate}>
          {renderSelectedDate()}
        </L.FixedBottomButton>
      </L.BottomSection>
    </>
  )
}

export default CalendarInput
