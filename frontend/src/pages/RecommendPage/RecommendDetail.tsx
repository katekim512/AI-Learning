import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import PlaceItem from './components/PlaceItem'
import dummyImage from './img/dummy.png'
import * as L from './styles/RecommendDetail.style'
// import { getAllPlace } from '../../api/calendar/getAllPlace'
// import { postRecommendPlace } from '../../api/recommend/postRecommendPlace'
import BackButton from '../../components/BackButton/BackButton'
import authToken from '../../stores/authToken'

interface RecommendPlace {
  contentid: number
  contenttypeid: number
  areacode: number
  sigungucode: number
  place: string
  firstimage: string
}

const dummyData: RecommendPlace[] = [
  {
    contentid: 1,
    contenttypeid: 12,
    areacode: 35,
    sigungucode: 2,
    place: '불국사',
    firstimage: dummyImage,
  },
  {
    contentid: 2,
    contenttypeid: 12,
    areacode: 35,
    sigungucode: 2,
    place: '석굴암',
    firstimage: dummyImage,
  },
  {
    contentid: 3,
    contenttypeid: 12,
    areacode: 35,
    sigungucode: 2,
    place: '동궁과 월지',
    firstimage: dummyImage,
  },
  {
    contentid: 4,
    contenttypeid: 14,
    areacode: 35,
    sigungucode: 2,
    place: '경주 대릉원',
    firstimage: dummyImage,
  },
  {
    contentid: 5,
    contenttypeid: 12,
    areacode: 35,
    sigungucode: 3,
    place: '첨성대',
    firstimage: dummyImage,
  },
  {
    contentid: 6,
    contenttypeid: 15,
    areacode: 35,
    sigungucode: 4,
    place: '포석정',
    firstimage: dummyImage,
  },
  {
    contentid: 7,
    contenttypeid: 12,
    areacode: 35,
    sigungucode: 5,
    place: '경주 남산',
    firstimage: dummyImage,
  },
  {
    contentid: 8,
    contenttypeid: 16,
    areacode: 35,
    sigungucode: 6,
    place: '문무대왕릉',
    firstimage: dummyImage,
  },
  {
    contentid: 9,
    contenttypeid: 12,
    areacode: 35,
    sigungucode: 7,
    place: '경주 오릉',
    firstimage: dummyImage,
  },
  {
    contentid: 10,
    contenttypeid: 14,
    areacode: 35,
    sigungucode: 8,
    place: '경주 국립공원',
    firstimage: dummyImage,
  },
  {
    contentid: 11,
    contenttypeid: 13,
    areacode: 35,
    sigungucode: 9,
    place: '경주 월정교',
    firstimage: dummyImage,
  },
  {
    contentid: 12,
    contenttypeid: 12,
    areacode: 35,
    sigungucode: 10,
    place: '경주 황리단길',
    firstimage: dummyImage,
  },
  {
    contentid: 13,
    contenttypeid: 12,
    areacode: 35,
    sigungucode: 11,
    place: '경주 보문단지',
    firstimage: dummyImage,
  },
]

const RecommendDetail: React.FC = () => {
  const token = authToken.getAccessToken()
  const navigate = useNavigate() // useNavigate 훅 사용

  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)

  // Retrieve query parameters
  const areacode = JSON.parse(searchParams.get('areacode') || '[]')
  const sigungucode = searchParams.get('sigungucode')
  const [recommendedPlaces, setRecommendedPlaces] = useState<RecommendPlace[]>(
    [],
  )
  const [searchTerm, setSearchTerm] = useState('') // 검색어 상태 추가
  //-----API 연결----
  // useEffect(() => {
  //   const fetchPlaces = async () => {
  //     if (sigungucode === null) return

  //     if (areacode.length === 0) {
  //       // areacode가 빈 배열인 경우
  //       const allPlaces = await getAllPlace(token)
  //       if (allPlaces) {
  //         setRecommendedPlaces(allPlaces.data)
  //       } else {
  //         setRecommendedPlaces([]) // null인 경우 빈 배열로 설정
  //       }
  //     } else {
  //       // areacode가 값이 있는 경우
  //       const requestPayload = [
  //         {
  //           areacode,
  //           sigungucode: sigungucode !== 'null' ? Number(sigungucode) : null,
  //         },
  //       ]

  //       try {
  //         const response = await postRecommendPlace(token, requestPayload)
  //         if (response && response.data) {
  //           setRecommendedPlaces(response.data) // API에서 받아온 추천 장소 데이터 저장
  //         }
  //       } catch (error) {
  //         console.error('추천 장소를 가져오는 데 실패했습니다:', error)
  //       }
  //     }
  //   }

  //   fetchPlaces()
  // }, [areacode, sigungucode, token])

  // 더미 데이터를 상태로 설정
  useEffect(() => {
    setRecommendedPlaces(dummyData)
  }, [areacode, sigungucode, token])

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
                locationName={locationName}
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
