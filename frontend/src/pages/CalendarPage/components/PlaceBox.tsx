import PropTypes from 'prop-types'
import React, { useState } from 'react'

import { DateSchedule } from '../../../api/calendar/postTimelineDay'
import * as L from '../styles/PlaceBox.style'

interface PlaceBoxProps {
  date: string
  daySchedule: DateSchedule | undefined
  onDelete: (index: number) => void
}

const PlaceBox: React.FC<PlaceBoxProps> = ({ daySchedule, onDelete }) => {
  const [isSliding, setIsSliding] = useState<number | null>(null)
  const [startX, setStartX] = useState<number | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent, index: number) => {
    if (!startX) return

    const currentX = e.touches[0].clientX
    const diffX = startX - currentX

    // 슬라이드 조건 설정
    if (diffX > 50) {
      setIsSliding(index)
    } else if (diffX < -50) {
      setIsSliding(null)
    }
  }

  const handleTouchEnd = () => {
    setStartX(null)
  }

  const handleDelete = (index: number) => {
    onDelete(index)
    setIsSliding(null) // 삭제 후 isSliding 상태 초기화
  }

  return (
    <L.PlaceBoxWrapper>
      <L.VerticalLine />
      {daySchedule?.info.map((item, index) => (
        <React.Fragment key={index}>
          <L.NumberCircle>{index + 1}</L.NumberCircle>
          {index < daySchedule.info.length - 1 && (
            <L.DistancePlaceholder>123m</L.DistancePlaceholder>
          )}
          <L.PlaceBoxContainer
            isSliding={isSliding === index}
            onTouchStart={e => handleTouchStart(e)}
            onTouchMove={e => handleTouchMove(e, index)}
            onTouchEnd={handleTouchEnd}
          >
            <L.PlaceBoxText>
              <L.PlaceBoxTitle>{item.place}</L.PlaceBoxTitle>
              <L.PlaceBoxCity>{item.city}</L.PlaceBoxCity>
            </L.PlaceBoxText>
            <L.PlaceBoxPic alt='placePreview' src={item.pic} />
            <L.DeleteIcon
              isVisible={isSliding === index}
              onClick={() => handleDelete(index)}
            >
              삭제
            </L.DeleteIcon>
          </L.PlaceBoxContainer>
        </React.Fragment>
      ))}
    </L.PlaceBoxWrapper>
  )
}

PlaceBox.propTypes = {
  date: PropTypes.string.isRequired,
  daySchedule: PropTypes.shape({
    memo: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    distance: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    info: PropTypes.arrayOf(
      PropTypes.shape({
        city: PropTypes.string.isRequired,
        place: PropTypes.string.isRequired,
        order: PropTypes.number.isRequired,
        pic: PropTypes.string.isRequired,
        lon: PropTypes.number.isRequired,
        lat: PropTypes.number.isRequired,
      }).isRequired,
    ).isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
}

export default PlaceBox
