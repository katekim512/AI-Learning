import React, { useState } from 'react'

import AlertPopUp2 from '../../../components/AlertPopUp/AlertPopUp2/AlertPopUp2'
import { getCityName } from '../../../style/CityMapper'
import * as L from '../styles/IndoorPlaceItem.style'

interface RecommendPlace {
  contentid: number
  contenttypeid: number
  areacode: number
  sigungucode: number
  place: string
  firstimage: string
}

interface PlaceItemProps {
  place: RecommendPlace
  index: number
  originalPlaceName: string // 이전 장소의 이름을 위한 새로운 prop
  onClick: (place: RecommendPlace) => void
  onFixClick: (
    place: RecommendPlace,
    originalPlaceName: string,
  ) => Promise<void>
}

const getContentTypeDescription = (contenttypeid: number | string): string => {
  switch (contenttypeid.toString()) {
    case '12':
      return '관광지'
    case '14':
      return '문화시설'
    case '15':
      return '축제공연행사'
    default:
      return '기타'
  }
}
const IndoorPlaceItem: React.FC<PlaceItemProps> = ({
  place,
  index,
  originalPlaceName,
  onClick,
  onFixClick,
}) => {
  const [showAlert, setShowAlert] = useState(false)
  const cityName = getCityName(place.areacode, place.sigungucode)

  const handleFixButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation() // 이벤트 버블링 방지
    setShowAlert(true)
  }

  const handleConfirm = async () => {
    setShowAlert(false)
    await onFixClick(place, originalPlaceName)
  }

  const handleCancel = () => {
    setShowAlert(false)
  }

  return (
    <>
      <L.PlaceItem onClick={() => onClick(place)}>
        <L.PlaceNumber>{index + 1}</L.PlaceNumber>
        <L.PlaceImage
          src={place.firstimage || '/img/default_pic.png'}
          alt={place.place}
        />
        <L.PlaceInfo>
          <L.PlaceName>{place.place}</L.PlaceName>
          <L.PlaceDescription>
            {`${cityName} · ${getContentTypeDescription(place.contenttypeid)}`}
          </L.PlaceDescription>
        </L.PlaceInfo>
        <L.FixButton onClick={handleFixButtonClick}>변경</L.FixButton>
      </L.PlaceItem>
      {showAlert && (
        <AlertPopUp2
          message={`${originalPlaceName}를 ${place.place}로 변경하시겠습니까?`}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </>
  )
}

export default IndoorPlaceItem
