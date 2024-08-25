import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from 'react-query'

import DrawerButton from './DrawerButton'
import PlaceBox from './PlaceBox'
import {
  DateSchedule,
  postTimelineDay,
} from '../../../api/calendar/postTimelineDay'
import { postTimelineFix } from '../../../api/calendar/postTimelineFix'
import authToken from '../../../stores/authToken'
import * as L from '../styles/DateDrawer.style'

interface DateDrawerProps {
  date: string
}

const formatDate = (dateString: string): string => {
  const strWeak = ['일', '월', '화', '수', '목', '금', '토']
  const date = new Date(dateString)
  const month = date.getMonth() + 1
  const day = date.getDate()
  const weekDay = strWeak[date.getDay()]
  return `${month}.${day} / ${weekDay}`
}

const DateDrawer: React.FC<DateDrawerProps> = ({ date }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const token = authToken.getAccessToken()
  const queryClient = useQueryClient()

  const { data: daySchedule } = useQuery(
    ['daySchedule', date], // ['daySchedule', date]로 키를 고정
    () => postTimelineDay(token, date),
    {
      enabled: !!token,
      select: response => response?.data,
    },
  )

  const mutation = useMutation(
    (newSchedule: DateSchedule) => postTimelineFix(token, newSchedule),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['daySchedule', date]) // 성공 시 데이터 리패칭
      },
    },
  )

  const toggleHeight = () => {
    setIsExpanded(!isExpanded)
  }

  const handleMemoAdd = () => {
    if (daySchedule) {
      const updatedSchedule = { ...daySchedule, memo: '수정된 메모 내용' }
      mutation.mutate(updatedSchedule)
    }
  }

  return (
    <L.DrawerContainer isExpanded={isExpanded}>
      <DrawerButton onToggleHeight={toggleHeight} />
      <L.DrawerHeader>
        <L.DrawerHeaderText>{formatDate(date)}</L.DrawerHeaderText>
        <L.DrawerHeaderEditText>편집</L.DrawerHeaderEditText>
      </L.DrawerHeader>
      <L.DrawerCenter isExpanded={isExpanded}>
        <PlaceBox date={date} daySchedule={daySchedule} />
      </L.DrawerCenter>
      <L.DrawerBottom>
        <L.DrawerBottomBox>
          <L.DrawerBottomButton>장소 추가</L.DrawerBottomButton>
          <L.DrawerBottomButton onClick={handleMemoAdd}>
            메모 추가
          </L.DrawerBottomButton>
        </L.DrawerBottomBox>
      </L.DrawerBottom>
    </L.DrawerContainer>
  )
}

DateDrawer.propTypes = {
  date: PropTypes.string.isRequired,
}

export default DateDrawer
