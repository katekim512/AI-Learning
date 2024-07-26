import PropTypes from 'prop-types'
import React, { useRef, useState, useEffect } from 'react'

import * as L from '../styles/Calendar.style'

interface MainCalendarProps {
  year: number
  month: number
}

const MainCalendar: React.FC<MainCalendarProps> = ({ year, month }) => {
  const today = new Date()
  const isToday = (day: number) => {
    return (
      year === today.getFullYear() &&
      month === today.getMonth() + 1 &&
      day === today.getDate()
    )
  }

  const weekSectionRef = useRef<HTMLDivElement>(null)
  const calendarRef = useRef<HTMLDivElement>(null)
  const [daySectionHeight, setDaySectionHeight] = useState<number>(0)

  useEffect(() => {
    const weekSectionHeight = weekSectionRef.current?.offsetHeight || 0
    const calendarHeight = calendarRef.current?.offsetHeight || 0
    const availableHeight = calendarHeight - weekSectionHeight
    setDaySectionHeight(availableHeight / 6)
  }, [year, month])

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month, 0).getDate()
  }

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month - 1, 1).getDay()
  }

  const daysInMonth = getDaysInMonth(year, month)
  const firstDay = getFirstDayOfMonth(year, month)

  const calendarDays = []
  let day = 1

  for (let i = 0; i < 6; i++) {
    const week = []
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        week.push(<L.Day key={`${i}-${j}`} />)
      } else if (day <= daysInMonth) {
        const isCurrentDay = isToday(day)
        const dayStyle = {
          backgroundColor: isCurrentDay ? '#525FD4' : 'transparent',
          color: isCurrentDay
            ? 'white'
            : j === 0
              ? '#D63535'
              : j === 6
                ? '#525FD4'
                : 'black',
        }

        week.push(
          <L.Day key={`${i}-${j}`} style={dayStyle}>
            {day}
          </L.Day>,
        )
        day++
      } else {
        week.push(<L.Day key={`${i}-${j}`} />)
      }
    }
    calendarDays.push(
      <L.DaySection key={i} height={daySectionHeight}>
        {week}
      </L.DaySection>,
    )
  }

  return (
    <L.CalendarSection ref={calendarRef}>
      <L.WeekSection ref={weekSectionRef}>
        <L.HeaderText>일</L.HeaderText>
        <L.HeaderText>월</L.HeaderText>
        <L.HeaderText>화</L.HeaderText>
        <L.HeaderText>수</L.HeaderText>
        <L.HeaderText>목</L.HeaderText>
        <L.HeaderText>금</L.HeaderText>
        <L.HeaderText>토</L.HeaderText>
      </L.WeekSection>
      {calendarDays}
    </L.CalendarSection>
  )
}

MainCalendar.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
}

export default MainCalendar
