import React from 'react'

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
  onClick: (place: RecommendPlace) => void
  onFixClick: (e: React.MouseEvent, place: RecommendPlace) => Promise<void>
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
  onClick,
  onFixClick,
}) => {
  const cityName = getCityName(place.areacode, place.sigungucode)

  return (
    <L.PlaceItem key={place.contentid} onClick={() => onClick(place)}>
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
      <L.FixButton onClick={e => onFixClick(e, place)}>변경</L.FixButton>
    </L.PlaceItem>
  )
}

export default IndoorPlaceItem
