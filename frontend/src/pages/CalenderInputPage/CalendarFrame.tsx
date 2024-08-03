import PropTypes from 'prop-types'
import React, { useRef, useEffect } from 'react'

import * as L from './styles/CalendarFrame.style'

interface CalendarFrameProps {
  year: number
  month: number
}

const CalendarFrame: React.FC<CalendarFrameProps> = ({ year }) => {
  const today = new Date()

  const isToday = (day: number, monthToCheck: number) => {
    return (
      year === today.getFullYear() &&
      monthToCheck === today.getMonth() + 1 &&
      day === today.getDate()
    )
  }

  const currentDayRef = useRef<HTMLDivElement>(null)
  const weekSectionRef = useRef<HTMLDivElement>(null)
  const calendarRef = useRef<HTMLDivElement>(null)

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month, 0).getDate()
  }

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month - 1, 1).getDay()
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
          week.push(<L.Day key={`${i}-${j}`} />)
        } else if (day <= daysInMonth) {
          const isCurrentDay = isToday(day, month)
          const dayStyle = {
            backgroundColor: isCurrentDay ? '#525FD4' : 'transparent', // 현재 날짜 배경색
            color: isCurrentDay
              ? 'white'
              : j === 0
                ? '#D63535'
                : j === 6
                  ? '#525FD4'
                  : 'black',
            clipPath: isCurrentDay ? 'circle(40%)' : 'none', // 현재 날짜를 둥글게 변경
            borderRadius: isCurrentDay ? '50%' : '0%', // 현재 날짜를 둥글게 변경
          }

          week.push(
            <L.Day
              key={`${i}-${j}`}
              style={dayStyle}
              ref={isCurrentDay ? currentDayRef : null}
            >
              {day}
            </L.Day>,
          )
          day++
        } else {
          week.push(<L.Day key={`${i}-${j}`} />)
        }
      }
      calendarDays.push(<L.DaySection key={i}>{week}</L.DaySection>)
    }

    return calendarDays
  }

  // 컴포넌트가 마운트될 때 현재 날짜로 스크롤하기 위한 useEffect 추가
  useEffect(() => {
    if (currentDayRef.current && calendarRef.current) {
      const currentDayElement = currentDayRef.current
      const calendarElement = calendarRef.current

      // DOM이 완전히 렌더링된 후 스크롤하기 위해 setTimeout 사용
      setTimeout(() => {
        calendarElement.scrollTo({
          top:
            currentDayElement.offsetTop -
            calendarElement.clientHeight / 2 +
            currentDayElement.clientHeight / 2,
          behavior: 'smooth',
        })
        // scrollIntoView를 사용하여 현재 날짜로 스크롤
        currentDayElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      }, 0)
    }
  }, [])

  const calendarMonths = []
  for (let m = 1; m <= 12; m++) {
    calendarMonths.push(
      <div key={m}>
        <L.MonthTitle>{`${year}년 ${m}월`}</L.MonthTitle>
        <L.WeekSection ref={weekSectionRef}>
          <L.HeaderText>일</L.HeaderText>
          <L.HeaderText>월</L.HeaderText>
          <L.HeaderText>화</L.HeaderText>
          <L.HeaderText>수</L.HeaderText>
          <L.HeaderText>목</L.HeaderText>
          <L.HeaderText>금</L.HeaderText>
          <L.HeaderText>토</L.HeaderText>
        </L.WeekSection>
        {generateCalendarDays(year, m)}
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
  month: PropTypes.number.isRequired,
}

export default CalendarFrame
