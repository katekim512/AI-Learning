import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import AlertPopUp3 from '../../../components/AlertPopUp/AlertPopUp3/AlertPopUp3'
import IndoorAlertPopUp2 from '../../../components/AlertPopUp/IndoorAlertPopUp2/IndoorAlertPopUp2'
import { useAlertStore } from '../../../stores/useFutureAlerts'
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
  const [showIndoorPopUp2, setShowIndoorPopUp2] = useState(false)
  const cityName = getCityName(place.areacode, place.sigungucode)
  const navigate = useNavigate()
  const { futureAlerts } = useAlertStore()

  const handleFixButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setShowAlert(true)
  }

  const handleConfirm = async () => {
    setShowAlert(false)
    await onFixClick(place, originalPlaceName)

    if (futureAlerts.length > 0) {
      setShowIndoorPopUp2(true)
    } else {
      navigate('/calendar')
    }
  }

  const handleCancel = () => {
    setShowAlert(false)
  }

  const handleCloseIndoorPopUp2 = () => {
    setShowIndoorPopUp2(false)
    navigate('/calendar')
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
        <AlertPopUp3
          message={`${originalPlaceName}를 ${place.place}로 변경하시겠습니까?`}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
      {showIndoorPopUp2 && (
        <IndoorAlertPopUp2 onClose={handleCloseIndoorPopUp2} />
      )}
    </>
  )
}

export default IndoorPlaceItem
