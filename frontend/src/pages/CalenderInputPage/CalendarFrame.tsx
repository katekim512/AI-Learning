import PropTypes from 'prop-types'
import React, { useRef, useEffect } from 'react'

import * as L from './styles/CalendarFrame.style'

interface CalendarFrameProps {
  year: number
  selectedDate: string
  setSelectedDate: (date: string) => void
  startDate: string | null
}

const CalendarFrame: React.FC<CalendarFrameProps> = ({
  year,
  selectedDate,
  setSelectedDate,
  //startDate,
}) => {
  const today = new Date(
    new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' }),
  )
  const yesterday = new Date(today)
  yesterday.setDate(today.getDate() - 1)
  const currentMonth = today.getMonth() + 1
  const currentDayRef = useRef<HTMLButtonElement>(null)
  const weekSectionRef = useRef<HTMLDivElement>(null)
  const calendarRef = useRef<HTMLDivElement>(null)

  const endDateObj = new Date(today)
  endDateObj.setDate(today.getDate() + 100)
  console.log(`Start Date: ${today.toISOString().split('T')[0]}`)
  console.log(`End Date: ${endDateObj.toISOString().split('T')[0]}`)

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month, 0).getDate()
  }

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month - 1, 1).getDay()
  }

  const formatDate = (year: number, month: number, day: number): string => {
    const formattedMonth = month < 10 ? `0${month}` : `${month}`
    const formattedDay = day < 10 ? `0${day}` : `${day}`
    return `${year}-${formattedMonth}-${formattedDay}`
  }

  const handleDayClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const title = event.currentTarget.title
    setSelectedDate(title)
    console.log(`Clicked date: ${title}`)
  }

  const generateCalendarDays = (year: number, month: number) => {
    const daysInMonth = getDaysInMonth(year, month)
    const firstDay = getFirstDayOfMonth(year, month)
    const calendarDays = []
    let day = 1

    for (let i = 0; i < 6; i++) {
      const week = []
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          week.push(
            <L.CalendarButton
              key={`${i}-${j}`}
              style={{ visibility: 'hidden' }}
            >
              N/A
            </L.CalendarButton>,
          )
        } else if (day <= daysInMonth) {
          const isSunday = j === 0
          const isSaturday = j === 6
          const formattedDate = formatDate(year, month, day)
          const isSelectedDay = selectedDate === formattedDate
          const dateObj = new Date(year, month - 1, day)
          const isWithinRange = dateObj >= yesterday && dateObj <= endDateObj

          week.push(
            <L.CalendarButton
              key={`${i}-${j}`}
              ref={isSelectedDay ? currentDayRef : null}
              $isSunday={isSunday}
              $isSaturday={isSaturday}
              $isSelectedDay={isSelectedDay}
              $isPast={!isWithinRange}
              onClick={isWithinRange ? handleDayClick : undefined}
              title={formattedDate}
            >
              {day}
            </L.CalendarButton>,
          )
          day++
        } else {
          week.push(
            <L.CalendarButton
              key={`${i}-${j}`}
              style={{ visibility: 'hidden' }}
            >
              N/A
            </L.CalendarButton>,
          )
        }
      }
      calendarDays.push(<L.DaySection key={i}>{week}</L.DaySection>)
    }

    return <div>{calendarDays}</div>
  }

  useEffect(() => {
    console.log(`Initial selected date in CalendarFrame: ${selectedDate}`) // 초기 선택된 날짜 출력
    if (currentDayRef.current && calendarRef.current) {
      const currentDayElement = currentDayRef.current
      const calendarElement = calendarRef.current

      setTimeout(() => {
        calendarElement.scrollTo({
          top:
            currentDayElement.offsetTop -
            calendarElement.clientHeight / 2 +
            currentDayElement.clientHeight / 2,
          behavior: 'smooth',
        })
        currentDayElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      }, 0)
    }
  }, [])

  useEffect(() => {
    if (currentDayRef.current && calendarRef.current) {
      const currentDayElement = currentDayRef.current
      const calendarElement = calendarRef.current

      setTimeout(() => {
        calendarElement.scrollTo({
          top:
            currentDayElement.offsetTop -
            calendarElement.clientHeight / 2 +
            currentDayElement.clientHeight / 2,
          behavior: 'smooth',
        })
        currentDayElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      }, 0)
    }
  }, [selectedDate])

  const calendarMonths = []
  for (let m = currentMonth; m < currentMonth + 4; m++) {
    const displayMonth = m % 12 === 0 ? 12 : m % 12
    const displayYear = year + Math.floor((m - 1) / 12)
    calendarMonths.push(
      <div key={m}>
        <L.MonthTitle>{`${displayYear}년 ${displayMonth}월`}</L.MonthTitle>
        <L.WeekSection ref={weekSectionRef}>
          <L.HeaderText>일</L.HeaderText>
          <L.HeaderText>월</L.HeaderText>
          <L.HeaderText>화</L.HeaderText>
          <L.HeaderText>수</L.HeaderText>
          <L.HeaderText>목</L.HeaderText>
          <L.HeaderText>금</L.HeaderText>
          <L.HeaderText>토</L.HeaderText>
        </L.WeekSection>
        {generateCalendarDays(displayYear, displayMonth)}
      </div>,
    )
  }

  return (
    <L.ScrollableCalendarSection ref={calendarRef}>
      {calendarMonths}
    </L.ScrollableCalendarSection>
  )
}

CalendarFrame.propTypes = {
  year: PropTypes.number.isRequired,
  selectedDate: PropTypes.string.isRequired,
  setSelectedDate: PropTypes.func.isRequired,
  startDate: PropTypes.string,
}

export default CalendarFrame
