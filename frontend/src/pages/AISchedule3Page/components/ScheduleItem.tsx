import { Icon } from '@iconify/react'
import menuIcon from '@iconify-icons/tabler/menu'
import React, { useState, useRef, useEffect } from 'react'
import { useDrag, useDrop } from 'react-dnd'

import { AISchedule } from '../../../api/schedule/getSchedule'
import { cityColors } from '../../../style/CityColor'
import { getCityName } from '../../../style/CityMapper'
import { monthColors } from '../../../style/MonthColor'
import * as L from '../styles/AISchedule3.style'

// 드래그 앤 드롭을 위한 항목 타입 정의
const ItemType = 'SCHEDULE_ITEM'

interface ScheduleItemProps {
  item: AISchedule
  index: number
  moveSchedule: (dragIndex: number, hoverIndex: number) => void
  onDelete: (index: number) => void
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({
  item,
  index,
  moveSchedule,
  onDelete,
}) => {
  const [isSwiped, setIsSwiped] = useState(false)
  const [startX, setStartX] = useState(0)
  const [currentX, setCurrentX] = useState(0)
  const ref = React.useRef<HTMLDivElement>(null)
  const placeNameRef = useRef<HTMLSpanElement>(null)
  const [shouldFlow, setShouldFlow] = useState(false)

  const [, drop] = useDrop({
    accept: ItemType,
    hover(draggedItem: { index: number }) {
      if (draggedItem.index !== index) {
        moveSchedule(draggedItem.index, index)
        draggedItem.index = index
      }
    },
  })

  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { index },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  drag(drop(ref))

  const city = getCityName(item.areacode, item.sigungucode)
  const cityBackgroundColor = cityColors[city] || '#006AA6'
  const date = new Date(item.date)
  const month = date.getMonth() + 1
  const monthBackgroundColor = monthColors[month]

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0]
    setStartX(touch.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0]
    setCurrentX(touch.clientX)
    const swipeDistance = startX - currentX
    if (swipeDistance > 50) {
      setIsSwiped(true) // Swipe detected, show delete button
    } else if (swipeDistance < -50) {
      setIsSwiped(false) // Swipe back to hide delete button
    }
  }

  const handleTouchEnd = () => {
    const swipeDistance = startX - currentX
    if (swipeDistance > 50) {
      setIsSwiped(true) // Swipe detected, show delete button
    } else {
      setIsSwiped(false) // Swipe back to hide delete button
    }
  }

  const handleDelete = () => {
    setIsSwiped(false) // ScheduleItem을 원래 자리로 되돌림
    onDelete(index) // Trigger delete on button press
  }

  useEffect(() => {
    const checkOverflow = () => {
      if (placeNameRef.current) {
        const isOverflowing =
          placeNameRef.current.scrollWidth > placeNameRef.current.clientWidth
        setShouldFlow(isOverflowing)
      }
    }

    checkOverflow()
    window.addEventListener('resize', checkOverflow)

    return () => {
      window.removeEventListener('resize', checkOverflow)
    }
  }, [item.place])

  return (
    <div
      style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
    >
      <L.ScheduleContainer
        key={index}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        isSwiped={isSwiped} // isSwiped 상태를 스타일 컴포넌트에 전달
      >
        <L.DateBox style={{ backgroundColor: monthBackgroundColor }}>
          {`${month}월 ${date.getDate()}일`}
        </L.DateBox>
        <L.PlaceBox style={{ opacity: isDragging ? 0.5 : 1 }}>
          <L.CityBox style={{ backgroundColor: cityBackgroundColor }}>
            {city}
          </L.CityBox>
          <L.PlaceName ref={placeNameRef}>
            <L.FlowWrap className='flow-wrap' shouldFlow={shouldFlow}>
              {shouldFlow ? `${item.place} ${item.place}` : item.place}
            </L.FlowWrap>
          </L.PlaceName>
          <L.IconContainer>
            <div ref={ref} style={{ display: 'inline-block', cursor: 'move' }}>
              <Icon icon={menuIcon} width='18' height='18' />
            </div>
          </L.IconContainer>
        </L.PlaceBox>
      </L.ScheduleContainer>
      {isSwiped && (
        <L.DeleteButton onClick={handleDelete}>
          <L.MinusCircleIcon></L.MinusCircleIcon>
        </L.DeleteButton>
      )}
    </div>
  )
}

export default ScheduleItem
