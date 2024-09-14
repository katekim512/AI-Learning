import React from 'react'

import dummyImage from '../img/dummy.png'
import * as L from '../styles/RecommendDetail.style'

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
  locationName: string
  onClick: (place: RecommendPlace) => void
  onAddClick: (e: React.MouseEvent, contentid: number, place: string) => void
}

const getContentTypeDescription = (contenttypeid: number): string => {
  switch (contenttypeid) {
    case 12:
      return '관광지'
    case 14:
      return '문화시설'
    case 15:
      return '축제공연행사'
    default:
      return '기타'
  }
}
const PlaceItem: React.FC<PlaceItemProps> = ({
  place,
  index,
  locationName,
  onClick,
  onAddClick,
}) => {
  return (
    <L.PlaceItem key={place.contentid} onClick={() => onClick(place)}>
      <L.PlaceNumber>{index + 1}</L.PlaceNumber>
      <L.PlaceImage src={place.firstimage || dummyImage} alt={place.place} />
      <L.PlaceInfo>
        <L.PlaceName>{place.place}</L.PlaceName>
        <L.PlaceDescription>
          {`${locationName} · ${getContentTypeDescription(place.contenttypeid)}`}
        </L.PlaceDescription>
      </L.PlaceInfo>
      <L.AddButton onClick={e => onAddClick(e, place.contentid, place.place)}>
        추가
      </L.AddButton>
    </L.PlaceItem>
  )
}

export default PlaceItem
