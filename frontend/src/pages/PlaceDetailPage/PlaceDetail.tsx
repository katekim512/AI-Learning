import mapMarker from '@iconify/icons-majesticons/map-marker'
import { Icon } from '@iconify/react'
import mapOutline from '@iconify-icons/material-symbols/map-outline'
import heartIcon from '@iconify-icons/tabler/heart-filled'
import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'

import * as L from './styles/PlaceDetail.style'
import { postLike } from '../../api/calendar/postLike'
import {
  PlaceDetailInfo,
  postTimelineDetail,
} from '../../api/calendar/postTimelineDetail'
import BackButton from '../../components/BackButton/BackButton'
import useLikeList from '../../hooks/useLikeList'
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
  const { likeList, refetch: refetchLikeList } = useLikeList()
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const [showMap, setShowMap] = useState<boolean>(false)
  const mapContainerRef = useRef<HTMLDivElement | null>(null)
  const imageContainerRef = useRef<HTMLDivElement | null>(null)
  const [imageHeight, setImageHeight] = useState<number>(200)

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

  useEffect(() => {
    if (imageContainerRef.current) {
      const imageElement = imageContainerRef.current.querySelector('img')
      if (imageElement) {
        setImageHeight(imageElement.clientHeight)
      }
    }
  }, [placeDetail?.firstimage])

  // 좋아요 리스트에 현재 장소가 있는지 확인
  useEffect(() => {
    if (likeList && contentid) {
      setIsLiked(likeList.some(place => place.contentid === Number(contentid)))
    }
  }, [likeList, contentid])

  const handleLikeToggle = async () => {
    if (!token || !contentid) return

    try {
      await postLike(token, Number(contentid))
      await refetchLikeList() // 좋아요 리스트 갱신
      setIsLiked(!isLiked) // 상태 변경
    } catch (error) {
      console.error('Error toggling like:', error)
    }
  }

  const handleMapToggle = () => {
    setShowMap(!showMap) // Toggle between map and image
  }

  // Kakao Map API initialization
  useEffect(() => {
    // 추후 showMap && 추가!
    if (mapContainerRef.current && placeDetail) {
      const { mapx, mapy } = placeDetail
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const kakao = (window as any).kakao

      if (!kakao.maps) {
        const script = document.createElement('script')
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_APP_KEY&autoload=false`
        document.head.appendChild(script)

        script.onload = () => {
          kakao.maps.load(() => {
            const container = mapContainerRef.current
            const options = {
              center: new kakao.maps.LatLng(mapy, mapx),
              level: 3,
            }
            new kakao.maps.Map(container, options)
          })
        }
      } else {
        const container = mapContainerRef.current
        const options = {
          center: new kakao.maps.LatLng(mapy, mapx),
          level: 3,
        }
        new kakao.maps.Map(container, options)
      }
    }
  }, [showMap, placeDetail])

  const getContentTypeText = (contenttypeid: number) => {
    switch (contenttypeid) {
      case 12:
        return '관광지'
      case 14:
        return '문화시설'
      case 15:
        return '축제공연행사'
      default:
        return ''
    }
  }

  return (
    <>
      <BackButton />
      <L.MapIconContainer onClick={handleMapToggle}>
        <Icon icon={mapOutline} width='28' height='28' />
      </L.MapIconContainer>
      <L.Container>
        <L.Title>
          <L.Text>{placeDetail?.place || ''}</L.Text>
          <L.LikeContatiner>
            <Icon icon={heartIcon} style={{ fontSize: '16px', color: 'red' }} />
            <L.SmText>{placeDetail?.like || 0}</L.SmText>
          </L.LikeContatiner>
        </L.Title>
        <L.SecondLineContainer>
          <L.Title>
            <Icon
              icon={mapMarker}
              width='18'
              height='18'
              style={{ color: '#BCBCBC' }}
            />
            <L.LocationText>
              {placeDetail?.city},&nbsp;
              {getContentTypeText(placeDetail!.contenttypeid)}
            </L.LocationText>
          </L.Title>
          <L.Title>
            <L.SecondLineButton onClick={handleLikeToggle}>
              {isLiked ? '저장됨' : '저장하기'}
            </L.SecondLineButton>
            <L.SecondLineButton>장소추가</L.SecondLineButton>
          </L.Title>
        </L.SecondLineContainer>
        <L.ImageContainer
          ref={mapContainerRef}
          style={{
            height: `${imageHeight}px`,
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        />
        {showMap ? (
          <L.ImageContainer
            ref={mapContainerRef}
            style={{
              height: `${imageHeight}px`,
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          />
        ) : (
          placeDetail?.firstimage && (
            <L.ImageContainer>
              <L.PlaceImage
                src={placeDetail.firstimage}
                alt={placeDetail.place}
              />
            </L.ImageContainer>
          )
        )}
      </L.Container>
    </>
  )
}

export default PlaceDetail
