import PropTypes from 'prop-types'
import React, { useRef, useEffect } from 'react'

import * as L from './styles/CalendarFrame.style'

interface CalendarFrameProps {
  year: number
  selectedDate: string
  setSelectedDate: (date: string) => void
  startDate: string | null
}

const CalendarFrame2: React.FC<CalendarFrameProps> = ({
  //year,
  selectedDate,
  setSelectedDate,
  startDate,
}) => {
  const today = new Date(
    new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' }),
  )
  const startDateObj = startDate ? new Date(startDate) : today
  const selStartDateObj = new Date(startDateObj)
  selStartDateObj.setDate(startDateObj.getDate() + 29)
  const endDateObj = new Date(startDateObj)
  endDateObj.setDate(startDateObj.getDate() + 365)

  console.log(`Start Date: ${startDateObj.toISOString().split('T')[0]}`)
  console.log(
    `Selected Start Date: ${selStartDateObj.toISOString().split('T')[0]}`,
  )
  console.log(`End Date: ${endDateObj.toISOString().split('T')[0]}`)

  const currentDayRef = useRef<HTMLButtonElement>(null)
  const weekSectionRef = useRef<HTMLDivElement>(null)
  const calendarRef = useRef<HTMLDivElement>(null)

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
            <L.CalendarButton2
              key={`${i}-${j}`}
              style={{ visibility: 'hidden' }}
            >
              N/A
            </L.CalendarButton2>,
          )
        } else if (day <= daysInMonth) {
          const isSunday = j === 0
          const isSaturday = j === 6
          const formattedDate = formatDate(year, month, day)
          const isSelectedDay = selectedDate === formattedDate
          const dateObj = new Date(year, month - 1, day)
          const isWithinRange =
            dateObj >= selStartDateObj && dateObj <= endDateObj

          week.push(
            <L.CalendarButton2
              key={`${i}-${j}`}
              ref={isSelectedDay ? currentDayRef : null}
              $isSunday={isSunday}
              $isSaturday={isSaturday}
              $isSelectedDay={isSelectedDay}
              $isGrey={!isWithinRange}
              onClick={isWithinRange ? handleDayClick : undefined}
              title={formattedDate}
            >
              {day}
            </L.CalendarButton2>,
          )
          day++
        } else {
          week.push(
            <L.CalendarButton2
              key={`${i}-${j}`}
              style={{ visibility: 'hidden' }}
            >
              N/A
            </L.CalendarButton2>,
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
  for (let i = 0; i < 13; i++) {
    const month = ((today.getMonth() + i) % 12) + 1
    const displayYear =
      today.getFullYear() + Math.floor((today.getMonth() + i) / 12)
    calendarMonths.push(
      <div key={month}>
        <L.MonthTitle>{`${displayYear}년 ${month}월`}</L.MonthTitle>
        <L.WeekSection ref={weekSectionRef}>
          <L.HeaderText>일</L.HeaderText>
          <L.HeaderText>월</L.HeaderText>
          <L.HeaderText>화</L.HeaderText>
          <L.HeaderText>수</L.HeaderText>
          <L.HeaderText>목</L.HeaderText>
          <L.HeaderText>금</L.HeaderText>
          <L.HeaderText>토</L.HeaderText>
        </L.WeekSection>
        {generateCalendarDays(displayYear, month)}
      </div>,
    )
  }

  return (
    <L.ScrollableCalendarSection ref={calendarRef}>
      {calendarMonths}
    </L.ScrollableCalendarSection>
  )
}

CalendarFrame2.propTypes = {
  year: PropTypes.number.isRequired,
  selectedDate: PropTypes.string.isRequired,
  setSelectedDate: PropTypes.func.isRequired,
  startDate: PropTypes.string,
}

export default CalendarFrame2
