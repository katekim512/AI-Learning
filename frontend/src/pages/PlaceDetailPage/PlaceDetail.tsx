import mapMarker from '@iconify/icons-majesticons/map-marker'
import { Icon } from '@iconify/react'
import heartIcon from '@iconify-icons/tabler/heart-filled'
import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'

import ContentType12 from './components/ContentType12'
import ContentType14 from './components/ContentType14'
import ContentType15 from './components/ContentType15'
import PlaceMap from './components/PlaceMap'
import * as L from './styles/PlaceDetail.style'
import { postAddVisited } from '../../api/calendar/postAddVisited'
import { postLike } from '../../api/calendar/postLike'
import { postPlaceLike } from '../../api/calendar/postPlaceLike'
import BackButton from '../../components/BackButton/BackButton'
import useLikeList from '../../hooks/useLikeList'
import useVisitedList from '../../hooks/useVisitedList'
import authToken from '../../stores/authToken'
import { getCityName } from '../../style/CityMapper'

interface PlaceDetail {
  title: string
  addr1: string
  addr2: string
  areacode: number
  sigungucode: number
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
  const [placeDetail, setPlaceDetail] = useState<PlaceDetail | null>(null)
  const [likeInfo, setLikeInfo] = useState<number>(0)
  const { likeList, refetch: refetchLikeList } = useLikeList()
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const { visitedList, refetch: refetchVisitedList } = useVisitedList()
  const [isVisited, setIsVisited] = useState<boolean>(false)
  const [showMap, setShowMap] = useState<boolean>(false)
  const imageContainerRef = useRef<HTMLDivElement | null>(null)
  const [imageHeight, setImageHeight] = useState<number>(200)
  const [city, setCity] = useState<string>('')

  useEffect(() => {
    fetchCommonPlaceInfo()
    fetchPlaceLikeTotal()
  }, [token, contentid])

  useEffect(() => {
    if (imageContainerRef.current) {
      const imageElement = imageContainerRef.current.querySelector('img')
      if (imageElement) {
        setImageHeight(imageElement.clientHeight)
      }
    }
  }, [placeDetail?.firstimage])

  useEffect(() => {
    if (likeList && contentid) {
      const liked = likeList.some(
        place => place.contentid.toString() === contentid,
      )
      setIsLiked(liked)
    }
  }, [likeList, contentid])

  useEffect(() => {
    if (visitedList && contentid) {
      const visited = visitedList.some(
        place => place.contentid.toString() === contentid,
      )
      setIsVisited(visited)
    }
  }, [visitedList, contentid])

  // placeDetail이 업데이트될 때 city 설정
  useEffect(() => {
    if (placeDetail) {
      const cityName = getCityName(
        placeDetail.areacode,
        placeDetail.sigungucode,
      )
      setCity(cityName)
    }
  }, [placeDetail])

  const fetchCommonPlaceInfo = async () => {
    if (!token || !contentid) return

    try {
      const myServiceKey = process.env.REACT_APP_TOURISM_SERVICE_KEY
      const response = await fetch(
        `https://apis.data.go.kr/B551011/KorService1/detailCommon1?serviceKey=${myServiceKey}&MobileOS=ETC&MobileOS=ETC&MobileApp=AILearning&_type=json&contentId=${contentid}&contentTypeId=${contenttypeid}&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=N&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&numOfRows=10&pageNo=1`,
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

  const fetchPlaceLikeTotal = async () => {
    if (!token || !contentid) return

    const successResponse = await postPlaceLike(token, Number(contentid))
    if (successResponse && successResponse.data) {
      setLikeInfo(successResponse.data.like)
    }
  }

  const handleLikeToggle = async () => {
    if (!token || !contentid) return

    try {
      await postLike(token, Number(contentid))
      await refetchLikeList()
      setIsLiked(!isLiked)
      fetchPlaceLikeTotal()
    } catch (error) {
      console.error('Error toggling like:', error)
    }
  }

  const handleVistedCheckButton = async () => {
    if (!token || !contentid) return

    try {
      await postAddVisited(token, Number(contentid))
      await refetchVisitedList()
      setIsVisited(!isVisited)
    } catch (error) {
      console.error('Error toggling visited:', error)
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
        return '기타'
    }
  }

  return (
    <>
      <L.Container>
        <L.HeaderContainer>
          <BackButton />
          <L.HeaderRightIcons>
            <L.VisitedCheckButton onClick={handleVistedCheckButton}>
              {isVisited ? (
                <>
                  방문완료&nbsp;
                  <Icon icon='iconamoon:check' width='12' height='12' />
                </>
              ) : (
                <>
                  방문한 장소&nbsp;
                  <Icon icon='material-symbols:add' width='12' height='12' />
                </>
              )}
            </L.VisitedCheckButton>
            <L.MapButton>
              {placeDetail?.firstimage && (
                <>
                  {showMap ? (
                    <Icon
                      icon='system-uicons:picture'
                      width='28'
                      height='28'
                      onClick={handleMapToggle}
                    />
                  ) : (
                    <Icon
                      icon='material-symbols-light:map-outline'
                      width='28'
                      height='28'
                      onClick={handleMapToggle}
                    />
                  )}
                </>
              )}
            </L.MapButton>
          </L.HeaderRightIcons>
        </L.HeaderContainer>
        <L.Title>
          <L.Text>{placeDetail?.title || ''}</L.Text>
          <L.LikeContatiner>
            <Icon icon={heartIcon} style={{ fontSize: '16px', color: 'red' }} />
            <L.SmText>{likeInfo || 0}</L.SmText>
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
              {city},&nbsp;
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
        ) : placeDetail?.firstimage ? (
          <L.ImageContainer ref={imageContainerRef}>
            <L.PlaceImage
              src={placeDetail.firstimage}
              alt={placeDetail.title}
            />
          </L.ImageContainer>
        ) : (
          <PlaceMap
            mapx={placeDetail?.mapx || 0}
            mapy={placeDetail?.mapy || 0}
            height={imageHeight}
          />
        )}
        <L.OverviewContainer>
          {placeDetail?.homepage && (
            <>
              <L.OverviewTitle>홈페이지</L.OverviewTitle>
              <L.HomepageLink
                dangerouslySetInnerHTML={{ __html: placeDetail.homepage }}
              />
              <br></br>
            </>
          )}
          {placeDetail?.overview && (
            <L.OverviewText>{placeDetail.overview}</L.OverviewText>
          )}
          {Number(contenttypeid) === 12 && (
            <ContentType12 contentid={contentid!} />
          )}
          {Number(contenttypeid) === 14 && (
            <ContentType14 contentid={contentid!} />
          )}
          {Number(contenttypeid) === 15 && (
            <ContentType15 contentid={contentid!} />
          )}
        </L.OverviewContainer>
      </L.Container>
    </>
  )
}

export default PlaceDetail
