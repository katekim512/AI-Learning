import React, { useState, useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import CalendarFrame from './CalendarFrame'
import * as L from './styles/CalendarFrame.style'

const CalendarInput = () => {
  const navigate = useNavigate()
  const today = new Date()
  const [currentDate, setCurrentDate] = useState({
    year: today.getFullYear(),
    month: today.getMonth() + 1,
  })

  useEffect(() => {
    setCurrentDate({ year: today.getFullYear(), month: today.getMonth() + 1 })
  }, [])

  const handleClose = () => {
    navigate('/ai-schedule-step1')
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
        <CalendarFrame year={currentDate.year} month={currentDate.month} />
      </L.CalendarWrapper>
      <L.BottomSection>
        <L.FixedBottomButton>일정 적용</L.FixedBottomButton>
      </L.BottomSection>
    </>
  )
}

export default CalendarInput
