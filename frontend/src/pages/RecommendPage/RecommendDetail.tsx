import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { getAllPlace } from '../../api/calendar/getAllPlace'
import { postRecommendPlace } from '../../api/recommend/postRecommendPlace'
import BackButton from '../../components/BackButton/BackButton'
import BottomNav from '../../components/BottomMenuBar/BottomMenuBar'
import authToken from '../../stores/authToken'
import dummyImage from '../RecommendPage/img/dummy.png'

interface RecommendPlace {
  contentid: number
  contenttypeid: number
  areacode: number
  sigungucode: number
  place: string
  firstimage: string
}

// const dummyData: RecommendPlace[] = [
//   {
//     contentid: 1,
//     contenttypeid: 12,
//     areacode: 35,
//     sigungucode: 2,
//     place: '불국사',
//     firstimage: dummyImage,
//   },
//   {
//     contentid: 2,
//     contenttypeid: 12,
//     areacode: 35,
//     sigungucode: 2,
//     place: '석굴암',
//     firstimage: dummyImage,
//   },
//   {
//     contentid: 3,
//     contenttypeid: 12,
//     areacode: 35,
//     sigungucode: 2,
//     place: '동궁과 월지',
//     firstimage: dummyImage,
//   },
// ]

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 6rem); /* 전체 화면 높이 */
  margin-bottom: 6rem;
`

// 스타일드 컴포넌트 정의
const Container = styled.div`
  padding: 20px;
  padding-bottom: 0px;
  font-family: 'Arial', sans-serif;
`

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`

const SearchInput = styled.input`
  padding: 8px 12px;
  font-size: 14px;
  border: none; /* 테두리 제거 */
  outline: none; /* 포커스 시 기본 테두리 제거 */
  border-radius: 4px;
  margin-left: 0.5rem;
  width: calc(100% - 1.8rem);
  background-color: #f7f7f7; /* 배경색 설정 */
  color: #333; /* 텍스트 색상 설정 */
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.01); /* 내부 그림자 추가 */
`

const PlacesSection = styled.section`
  margin-top: 10px;
`

const SectionTitle = styled.div`
  font-size: 16px;
  margin-bottom: 15px;
  margin-left: 5px;
`

const BoldText = styled.span`
  font-weight: bold;
  font-size: 20px; /* 글씨 크기를 조금 키움 */
`

const PlacesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const PlaceItem = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
`

const PlaceNumber = styled.span`
  font-size: 12px;
  font-weight: bold;
  margin-left: 5px;
  margin-right: 15px;
`

const PlaceImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 5px;
  margin-right: 15px;
`

const PlaceInfo = styled.div`
  flex-grow: 1;
`

const PlaceName = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`

const PlaceDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin: 5px 0 0 0;
`

const AddButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  padding: 5px 13px;
  font-size: 13px;
  cursor: pointer;
  border-radius: 22px;

  &:hover {
    background-color: #e0e0e0;
  }
`

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
  useEffect(() => {
    const fetchPlaces = async () => {
      if (sigungucode === null) return

      if (areacode.length === 0) {
        // areacode가 빈 배열인 경우
        const allPlaces = await getAllPlace(token)
        if (allPlaces) {
          setRecommendedPlaces(allPlaces.data)
        } else {
          setRecommendedPlaces([]) // null인 경우 빈 배열로 설정
        }
      } else {
        // areacode가 값이 있는 경우
        const requestPayload = [
          {
            areacode,
            sigungucode: sigungucode !== 'null' ? Number(sigungucode) : null,
          },
        ]

        try {
          const response = await postRecommendPlace(token, requestPayload)
          if (response && response.data) {
            setRecommendedPlaces(response.data) // API에서 받아온 추천 장소 데이터 저장
          }
        } catch (error) {
          console.error('추천 장소를 가져오는 데 실패했습니다:', error)
        }
      }
    }

    fetchPlaces()
  }, [areacode, sigungucode, token])

  // 더미 데이터를 상태로 설정
  // useEffect(() => {
  //   setRecommendedPlaces(dummyData)
  // }, [areacode, sigungucode, token])

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

  const getContentTypeDescription = (contenttypeid: number): string => {
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

  const filteredPlaces = recommendedPlaces.filter(place =>
    place.place.includes(searchTerm),
  )

  const handleAddButtonClick = (contentid: number, place: string) => {
    navigate(`/dateselected/${contentid}/${encodeURIComponent(place)}`)
  }

  return (
    <AppContainer>
      <Container>
        <Header>
          <BackButton />
          <SearchInput
            type='text'
            placeholder='원하는 장소 검색'
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)} // 검색어 업데이트
          />
        </Header>
        <PlacesSection>
          <SectionTitle>
            <BoldText>{locationName}</BoldText> 추천 장소
          </SectionTitle>
          <PlacesList>
            {filteredPlaces.map((place, index) => (
              <PlaceItem key={place.contentid}>
                <PlaceNumber>{index + 1}</PlaceNumber>
                <PlaceImage
                  src={place.firstimage || dummyImage}
                  alt={place.place}
                />
                <PlaceInfo>
                  <PlaceName>{place.place}</PlaceName>
                  <PlaceDescription>
                    {`${locationName} · ${getContentTypeDescription(place.contenttypeid)}`}
                  </PlaceDescription>
                </PlaceInfo>
                <AddButton
                  onClick={() =>
                    handleAddButtonClick(place.contentid, place.place)
                  }
                >
                  추가
                </AddButton>
              </PlaceItem>
            ))}
          </PlacesList>
        </PlacesSection>
      </Container>
      <BottomNav />
    </AppContainer>
  )
}

export default RecommendDetail
