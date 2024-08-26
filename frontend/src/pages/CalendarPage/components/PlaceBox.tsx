import { Icon } from '@iconify/react'
import menuIcon from '@iconify-icons/tabler/menu'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa'

import { DateSchedule } from '../../../api/calendar/postTimelineDay'
import * as L from '../styles/PlaceBox.style'

interface PlaceBoxProps {
  date: string
  daySchedule: DateSchedule | undefined
  onDelete: (index: number) => void
  isEditing: boolean
  onToggleSelect: (index: number) => void
  selectedIndexes: number[]
}

const PlaceBox: React.FC<PlaceBoxProps> = ({
  daySchedule,
  onDelete,
  isEditing,
  onToggleSelect,
  selectedIndexes,
}) => {
  const [isSliding, setIsSliding] = useState<number | null>(null)
  const [startX, setStartX] = useState<number | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent, index: number) => {
    if (!startX) return

    const currentX = e.touches[0].clientX
    const diffX = startX - currentX

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
    setIsSliding(null)
  }

  const handleToggleSelect = (index: number) => {
    onToggleSelect(index)
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
            isEditing={isEditing}
            onTouchStart={e => handleTouchStart(e)}
            onTouchMove={e => handleTouchMove(e, index)}
            onTouchEnd={handleTouchEnd}
          >
            {isEditing && (
              <L.CheckboxWrapper onClick={() => handleToggleSelect(index)}>
                {selectedIndexes.includes(index) ? (
                  <FaCheckCircle />
                ) : (
                  <FaRegCircle />
                )}
              </L.CheckboxWrapper>
            )}
            <L.PlaceBoxText isEditing={isEditing}>
              <L.PlaceBoxTitle>{item.place}</L.PlaceBoxTitle>
              <L.PlaceBoxCity>{item.city}</L.PlaceBoxCity>
            </L.PlaceBoxText>
            {isEditing && (
              <L.DragEditIcon>
                <Icon icon={menuIcon} width='18' height='18' />
              </L.DragEditIcon>
            )}
            {!isEditing && (
              <>
                <L.PlaceBoxPic alt='placePreview' src={item.pic} />
                <L.DeleteIcon
                  isVisible={isSliding === index}
                  onClick={() => handleDelete(index)}
                >
                  삭제
                </L.DeleteIcon>
              </>
            )}
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
  isEditing: PropTypes.bool.isRequired,
  onToggleSelect: PropTypes.func.isRequired,
  selectedIndexes: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
}

export default PlaceBox
