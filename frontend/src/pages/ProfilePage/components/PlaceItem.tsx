import PropTypes from 'prop-types'

import { getCityName } from '../../../style/CityMapper'
import * as L from '../styles/PlaceList.style'

export interface PlaceItemInfo {
  contentid: number
  contenttypeid: number
  areacode: number
  sigungucode: number
  place: string
  firstimage: string
}

interface PlaceItemProps {
  place: PlaceItemInfo
  onClick: (place: PlaceItemInfo) => void
}

const getContentTypeDescription = (contenttypeid: number): string => {
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

const PlaceItem: React.FC<PlaceItemProps> = ({ place, onClick }) => {
  const cityName = getCityName(place.areacode, place.sigungucode)

  return (
    <L.PlaceItem key={place.contentid} onClick={() => onClick(place)}>
      <L.PlaceImage src={place.firstimage || ''} alt={place.place} />
      <L.PlaceInfo>
        <L.PlaceName>{place.place}</L.PlaceName>
        <L.PlaceDescription>
          {`${cityName} · ${getContentTypeDescription(place.contenttypeid)}`}
        </L.PlaceDescription>
      </L.PlaceInfo>
    </L.PlaceItem>
  )
}

PlaceItem.propTypes = {
  place: PropTypes.shape({
    contentid: PropTypes.number.isRequired,
    contenttypeid: PropTypes.number.isRequired,
    areacode: PropTypes.number.isRequired,
    sigungucode: PropTypes.number.isRequired,
    place: PropTypes.string.isRequired,
    firstimage: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
}

export default PlaceItem
