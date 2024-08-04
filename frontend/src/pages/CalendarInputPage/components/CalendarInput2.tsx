import React, { useState, useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import CalendarFrame2 from './CalendarFrame2'
import { useScheduleStore } from '../../../stores/useScheduleStore'
import * as L from '../styles/CalendarFrame.style'

const CalendarInput2 = () => {
  const navigate = useNavigate()
  const today = new Date()

  // Add 29 days to the current date
  const defaultEndDate = new Date(today)
  defaultEndDate.setDate(today.getDate() + 29)

  const storedEndDate = useScheduleStore(state => state.endDate)
  const startDate = useScheduleStore(state => state.startDate)

  const initialEndDate =
    storedEndDate || defaultEndDate.toISOString().split('T')[0]

  const [currentDate, setCurrentDate] = useState({
    year: today.getFullYear(),
    month: today.getMonth() + 1,
  })
  const [selectedDate, setSelectedDate] = useState<string>(initialEndDate)

  const setEndDate = useScheduleStore(state => state.setEndDate)

  useEffect(() => {
    setCurrentDate({ year: today.getFullYear(), month: today.getMonth() + 1 })
    setSelectedDate(initialEndDate)
    console.log(`Initial selected date: ${initialEndDate}`)
  }, [initialEndDate])

  const handleClose = () => {
    navigate('/ai-schedule-step1')
  }

  const handleApplyDate = () => {
    setEndDate(selectedDate)
    console.log(`Applied end date: ${selectedDate}`)
    navigate('/ai-schedule-step1')
  }

  const renderSelectedDate = () => {
    if (!selectedDate) return '일정 적용'
    const [year, month, day] = selectedDate.split('-').map(Number)
    const date = new Date(year, month - 1, day)
    const dayNames = ['일', '월', '화', '수', '목', '금', '토']
    return `종료일 ${month}.${day} (${dayNames[date.getDay()]}) 적용`
  }

  return (
    <>
      <L.HeaderSection>
        <L.CloseButton onClick={handleClose}>
          <FaTimes />
        </L.CloseButton>
        <L.HeaderTitle>날짜 선택</L.HeaderTitle>
      </L.HeaderSection>
      <L.CalendarWrapper>
        <CalendarFrame2
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

export default CalendarInput2
