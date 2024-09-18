import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import PlaceItem from './components/PlaceItem'
import * as L from './styles/RecommendDetail.style'
import { postRecommendPlace } from '../../api/recommend/postRecommendPlace'
import BackButton from '../../components/BackButton/BackButton'
import { useAllPlace } from '../../hooks/useAllPlace'
import authToken from '../../stores/authToken'

interface RecommendPlace {
  contentid: number
  contenttypeid: number
  areacode: number
  sigungucode: number
  place: string
  firstimage: string
}

const RecommendDetail: React.FC = () => {
  const token = authToken.getAccessToken()
  const navigate = useNavigate()
  const location = useLocation()

  const searchParams = new URLSearchParams(location.search)
  const areacode = JSON.parse(searchParams.get('areacode') || '[]')
  const sigungucode = searchParams.get('sigungucode')
  const [recommendedPlaces, setRecommendedPlaces] = useState<RecommendPlace[]>(
    [],
  )
  const [searchTerm, setSearchTerm] = useState('') // 검색어 상태 추가
  const { data: allPlaces, isLoading, error } = useAllPlace()

  // 항상 useEffect를 조건없이 호출
  useEffect(() => {
    fetchPlaces()
  }, [token])

  // Loading이나 Error 상태는 useEffect 외부에서 처리
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error fetching places</div>

  const fetchPlaces = async () => {
    if (sigungucode === null) return

    if (areacode.length === 0) {
      // areacode가 빈 배열인 경우
      if (allPlaces) setRecommendedPlaces(allPlaces.data)
    } else {
      // areacode가 값이 있는 경우
      let sigungu = null
      if (sigungucode !== 'null') {
        sigungu = Number(sigungucode)
      }

      try {
        const response = await postRecommendPlace(token, areacode, sigungu)
        if (response && response.data) {
          setRecommendedPlaces(response.data)
        }
      } catch (error) {
        console.error('추천 장소를 가져오는 데 실패했습니다:', error)
      }
    }
  }

  const getLocationName = (
    areacode: number[],
    sigungucode: number | null,
  ): string => {
    if (areacode.length === 0) return '전체'
    if (areacode.includes(1)) return '서울'
    if (areacode.includes(2)) return '인천'
    if (areacode.includes(32)) return '강원도'
    if (areacode.includes(31)) return '경기도'
    if (areacode.includes(33) || areacode.includes(34)) return '충청도'
    if (areacode.includes(35) && sigungucode === 2) return '경주' // 특정 조건에 맞춰 경주로 설정
    if (areacode.includes(35) || areacode.includes(36)) return '경상도'
    if (areacode.includes(37) || areacode.includes(38)) return '전라도'
    if (areacode.includes(6)) return '부산'
    if (areacode.includes(5)) return '광주'
    if (areacode.includes(39)) return '제주'
    return '알 수 없음' // 매칭되지 않는 경우 기본값
  }

  const locationName = getLocationName(
    areacode,
    sigungucode !== 'null' ? Number(sigungucode) : null,
  )

  const filteredPlaces = recommendedPlaces.filter(place =>
    place.place.includes(searchTerm),
  )

  const handleClick = (place: RecommendPlace) => {
    navigate(
      `/place/${encodeURIComponent(place.contenttypeid)}/${encodeURIComponent(place.contentid)}`,
    )
  }

  const handleAddButtonClick = (
    e: React.MouseEvent,
    contentid: number,
    place: string,
  ) => {
    e.stopPropagation() // 상세페이지와 추가버튼 분리
    navigate(`/dateselected/${contentid}/${encodeURIComponent(place)}`)
  }

  return (
    <L.AppContainer>
      <L.Container>
        <L.Header>
          <BackButton />
          <L.SearchInput
            type='text'
            placeholder='원하는 장소 검색'
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </L.Header>
        <L.PlacesSection>
          <L.SectionTitle>
            <L.BoldText>{locationName}</L.BoldText> 추천 장소
          </L.SectionTitle>
          <L.PlacesList>
            {filteredPlaces.map((place, index) => (
              <PlaceItem
                key={place.contentid}
                place={place}
                index={index}
                onClick={handleClick}
                onAddClick={handleAddButtonClick}
              />
            ))}
          </L.PlacesList>
        </L.PlacesSection>
      </L.Container>
    </L.AppContainer>
  )
}

export default RecommendDetail
