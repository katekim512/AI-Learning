import { Icon } from '@iconify/react'
import mapOutline from '@iconify-icons/material-symbols/map-outline'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import * as L from './styles/PlaceDetail.style'
import {
  PlaceDetailInfo,
  postTimelineDetail,
} from '../../api/calendar/postTimelineDetail'
import BackButton from '../../components/BackButton/BackButton'
import authToken from '../../stores/authToken'

const PlaceDetail = () => {
  const token = authToken.getAccessToken()
  const { contentid } = useParams<{ contentid: string }>()
  const [placeDetail, setPlaceDetail] = useState<PlaceDetailInfo | null>({
    contenttypeid: 12,
    place: '경극고택',
    city: '대구',
    addr1: '대구광역시 동구 옻골로 195-3',
    addr2: '(둔산동)',
    like: 99,
    firstimage:
      'http://tong.visitkorea.or.kr/cms/resource/32/2707032_image2_1.jpg',
    firstimage2:
      'http://tong.visitkorea.or.kr/cms/resource/32/2707032_image2_1.jpg',
    mapx: 128.6866758144,
    mapy: 35.9074757619,
  })

  useEffect(() => {
    const fetchPlaceDetail = async () => {
      if (!token || !contentid) return

      const response = await postTimelineDetail(token, Number(contentid))
      if (response && response.data) {
        setPlaceDetail(response.data)
      }
    }

    fetchPlaceDetail()
  }, [token, contentid])

  return (
    <>
      <BackButton />
      <L.MapIconContainer>
        <Icon icon={mapOutline} width='28' height='28' />
      </L.MapIconContainer>
      <L.Container>
        <L.Title>
          <L.Text>{placeDetail?.place || ''}</L.Text>
        </L.Title>
        {placeDetail?.firstimage && (
          <L.ImageContainer>
            <L.PlaceImage
              src={placeDetail.firstimage}
              alt={placeDetail.place}
            />
          </L.ImageContainer>
        )}
      </L.Container>
    </>
  )
}

export default PlaceDetail
