import React from 'react'

import { AISchedule } from '../../../api/schedule/getSchedule'
import { cityColors } from '../../../style/CityColor'
import { monthColors } from '../../../style/MonthColor'
import * as L from '../styles/AISchedule3.style'

interface ScheduleProps {
  scheduleInfo: AISchedule[]
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${month}월 ${day}일`
}

const Schedule: React.FC<ScheduleProps> = ({ scheduleInfo }) => {
  return (
    <div>
      {scheduleInfo?.map((item, index) => {
        const cityBackgroundColor = cityColors[item.city]
        const date = new Date(item.date)
        const month = date.getMonth() + 1
        const monthBackgroundColor = monthColors[month]

        return (
          <L.ScheduleContainer key={index}>
            <L.DateBox style={{ backgroundColor: monthBackgroundColor }}>
              {formatDate(item.date)}
            </L.DateBox>
            <L.PlaceBox>
              <L.CityBox style={{ backgroundColor: cityBackgroundColor }}>
                {item.city}
              </L.CityBox>
              {item.place}
            </L.PlaceBox>
          </L.ScheduleContainer>
        )
      })}
    </div>
  )
}

export default Schedule
