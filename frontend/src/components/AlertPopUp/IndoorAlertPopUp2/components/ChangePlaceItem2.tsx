import React from 'react'

import { getCityName } from '../../../../style/CityMapper'
import * as L from '../styles/ChangePlaceItem2.style'

interface RecommendPlace {
  date: string
  weather: number
  contentid: number
  place: string
  firstimage: string
  contenttypeid: number
  areacode: number
  sigungucode: number
}

interface PlaceItemProps {
  place: RecommendPlace
  onClick: (contentid: number) => void
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

const ChangePlaceItem2: React.FC<PlaceItemProps> = ({ place, onClick }) => {
  const cityName = getCityName(place.areacode, place.sigungucode)

  return (
    <L.PlaceItem key={place.contentid} onClick={() => onClick(place.contentid)}>
      <L.PlaceInfo>
        <L.PlaceName>{place.place}</L.PlaceName>
        <L.PlaceDescription>
          {`${cityName} · ${getContentTypeDescription(place.contenttypeid)}`}
        </L.PlaceDescription>
      </L.PlaceInfo>
      <L.PlaceImage
        src={place.firstimage || '/img/default_pic.png'}
        alt={place.place}
      />
    </L.PlaceItem>
  )
}

export default ChangePlaceItem2
