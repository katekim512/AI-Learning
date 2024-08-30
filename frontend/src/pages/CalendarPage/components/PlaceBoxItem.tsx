import { Icon } from '@iconify/react'
import menuIcon from '@iconify-icons/tabler/menu'
import React from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import * as L from '../styles/PlaceBox.style'

interface PlaceBoxItemProps {
  item: {
    contentid: number
    contenttypeid: number
    city: string
    place: string
    order: number
    firstimage: string
    mapx: number
    mapy: number
  }
  index: number
  totalItems: number
  moveCard: (dragIndex: number, hoverIndex: number) => void
  isEditing: boolean
  isSliding: number | null
  setIsSliding: (index: number | null) => void
  handleTouchStart: (e: React.TouchEvent) => void
  handleTouchMove: (e: React.TouchEvent, index: number) => void
  handleTouchEnd: () => void
  handleToggleSelect: (index: number) => void
  selectedIndexes: number[]
  onDelete: (index: number) => void
}

interface DragItem {
  index: number
  type: string
}

const PlaceBoxItem: React.FC<PlaceBoxItemProps> = ({
  item,
  index,
  totalItems,
  moveCard,
  isEditing,
  isSliding,
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
  handleToggleSelect,
  selectedIndexes,
  onDelete,
}) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  const [, drop] = useDrop({
    accept: 'PLACE_BOX',
    hover(draggedItem: DragItem) {
      if (!ref.current) return

      const dragIndex = draggedItem.index
      const hoverIndex = index
      if (dragIndex === hoverIndex) return

      moveCard(dragIndex, hoverIndex)
      draggedItem.index = hoverIndex
    },
  })

  const [{ isDragging }, drag] = useDrag({
    type: 'PLACE_BOX',
    item: { index },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  drag(drop(ref))

  const handleClick = () => {
    if (!isEditing) {
      navigate(
        `/place/${encodeURIComponent(item.contenttypeid)}/${encodeURIComponent(item.contentid)}`,
      )
    }
  }

  return (
    <>
      <L.NumberCircle>{index + 1}</L.NumberCircle>
      {index < totalItems - 1 && (
        <L.DistancePlaceholder>123m</L.DistancePlaceholder>
      )}
      <L.PlaceBoxContainer
        isSliding={!isEditing && isSliding === index}
        isEditing={isEditing}
        onTouchStart={handleTouchStart}
        onTouchMove={e => handleTouchMove(e, index)}
        onTouchEnd={handleTouchEnd}
        onClick={handleClick}
        style={{ opacity: isDragging ? 0.5 : 1 }}
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
          <L.DragEditIcon ref={ref}>
            <Icon icon={menuIcon} width='18' height='18' />
          </L.DragEditIcon>
        )}
        {!isEditing && (
          <>
            <L.PlaceBoxPic alt='placePreview' src={item.firstimage} />
            <L.DeleteIcon
              isVisible={isSliding === index}
              onClick={() => onDelete(index)}
            >
              삭제
            </L.DeleteIcon>
          </>
        )}
      </L.PlaceBoxContainer>
    </>
  )
}

export default PlaceBoxItem
