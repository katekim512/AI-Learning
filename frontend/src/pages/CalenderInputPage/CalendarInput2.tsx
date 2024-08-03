import React, { useState, useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import CalendarFrame from './CalendarFrame'
import * as L from './styles/CalendarFrame.style'
import { useScheduleStore } from '../../stores/useScheduleStore' // 경로를 실제 store 파일로 변경하세요

const CalendarInput2 = () => {
  const navigate = useNavigate()
  const today = new Date()
  const [currentDate, setCurrentDate] = useState({
    year: today.getFullYear(),
    month: today.getMonth() + 1,
  })
  const [selectedDate, setSelectedDate] = useState<string>(
    `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`,
  )

  const setEndDate = useScheduleStore(state => state.setEndDate)

  useEffect(() => {
    setCurrentDate({ year: today.getFullYear(), month: today.getMonth() + 1 })
  }, [])

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
        <CalendarFrame
          year={currentDate.year}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
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
