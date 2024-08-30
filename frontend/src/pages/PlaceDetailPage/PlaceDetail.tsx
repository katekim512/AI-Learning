import mapMarker from '@iconify/icons-majesticons/map-marker'
import { Icon } from '@iconify/react'
import mapOutline from '@iconify-icons/material-symbols/map-outline'
import heartIcon from '@iconify-icons/tabler/heart-filled'
import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'

import PlaceMap from './components/PlaceMap'
import * as L from './styles/PlaceDetail.style'
import { postLike } from '../../api/calendar/postLike'
// import { postTimelineDetail } from '../../api/calendar/postTimelineDetail'
import BackButton from '../../components/BackButton/BackButton'
import useLikeList from '../../hooks/useLikeList'
import authToken from '../../stores/authToken'

interface PlaceDetail {
  title: string
  addr1: string
  addr2: string
  firstimage: string
  firstimage2: string
  mapx: number
  mapy: number
  homepage: string
  overview: string
}

const PlaceDetail = () => {
  const token = authToken.getAccessToken()
  const { contentid } = useParams<{ contentid: string }>()
  const { contenttypeid } = useParams<{ contenttypeid: string }>()
  const [placeDetail, setPlaceDetail] = useState<PlaceDetail | null>()
  const { likeList, refetch: refetchLikeList } = useLikeList()
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const [showMap, setShowMap] = useState<boolean>(false)
  const imageContainerRef = useRef<HTMLDivElement | null>(null)
  const [imageHeight, setImageHeight] = useState<number>(200)

  // useEffect(() => {
  //   const fetchPlaceDetail = async () => {
  //     if (!token || !contentid) return

  //     const response = await postTimelineDetail(token, Number(contentid))
  //     if (response && response.data) {
  //       setPlaceDetail(response.data)
  //     }
  //   }

  //   fetchPlaceDetail()
  // }, [token, contentid])

  useEffect(() => {
    const fetchCommonPlaceInfo = async () => {
      if (!token || !contentid) return

      try {
        const response = await fetch(
          `https://apis.data.go.kr/B551011/KorService1/detailCommon1?serviceKey=I%2BMzNcsHcMWL7gORiWo%2BBaZ%2FPl8w4OpluiaN88eg5zIYnjtoQ0pxS6Vpy6OaHBaIf%2BrZf9%2FgjDcrtUBv%2BcuhCw%3D%3D&MobileOS=ETC&MobileOS=ETC&MobileApp=AILearning&_type=json&contentId=${contentid}&contentTypeId=${contenttypeid}&defaultYN=Y&firstImageYN=Y&areacodeYN=N&catcodeYN=N&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&numOfRows=10&pageNo=1`,
        )
        const data = await response.json()
        if (data.response.body.items.item[0]) {
          const item = data.response.body.items.item[0]
          setPlaceDetail(item)
        }
      } catch (error) {
        console.error('Failed to fetch place details:', error)
      }
    }

    fetchCommonPlaceInfo()
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
    setShowMap(prevState => !prevState)
  }

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
          <L.Text>{placeDetail?.title || ''}</L.Text>
          <L.LikeContatiner>
            <Icon icon={heartIcon} style={{ fontSize: '16px', color: 'red' }} />
            <L.SmText>{'like 수 반환값' || 0}</L.SmText>
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
              {placeDetail?.addr1},&nbsp;
              {getContentTypeText(Number(contenttypeid))}
            </L.LocationText>
          </L.Title>
          <L.Title>
            <L.SecondLineButton onClick={handleLikeToggle}>
              {isLiked ? '저장됨' : '저장하기'}
            </L.SecondLineButton>
            <L.SecondLineButton onClick={handleMapToggle}>
              장소추가
            </L.SecondLineButton>
          </L.Title>
        </L.SecondLineContainer>

        {showMap ? (
          <PlaceMap
            mapx={placeDetail?.mapx || 0}
            mapy={placeDetail?.mapy || 0}
            height={imageHeight}
          />
        ) : (
          placeDetail?.firstimage && (
            <L.ImageContainer ref={imageContainerRef}>
              <L.PlaceImage
                src={placeDetail.firstimage}
                alt={placeDetail.title}
              />
            </L.ImageContainer>
          )
        )}

        {placeDetail?.homepage && (
          <L.OverviewContainer>
            <L.OverviewTitle>홈페이지</L.OverviewTitle>
            <L.HomepageLink
              dangerouslySetInnerHTML={{ __html: placeDetail.homepage }}
            />
          </L.OverviewContainer>
        )}
        {placeDetail?.overview && (
          <L.OverviewContainer>
            <L.OverviewText>{placeDetail.overview}</L.OverviewText>
          </L.OverviewContainer>
        )}
      </L.Container>
    </>
  )
}

export default PlaceDetail
