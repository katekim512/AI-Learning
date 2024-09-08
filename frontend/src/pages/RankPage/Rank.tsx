//import { useNavigate } from 'react-router-dom'

import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'
import React from 'react'
import styled from 'styled-components'

import img1 from './img/1.png'
import img10 from './img/10.png'
import img11 from './img/11.png'
import img12 from './img/12.png'
import img13 from './img/13.png'
import img14 from './img/14.png'
import img15 from './img/15.png'
import img16 from './img/16.png'
import img17 from './img/17.png'
import img18 from './img/18.png'
import img19 from './img/19.png'
import img2 from './img/2.png'
import img20 from './img/20.png'
import img21 from './img/21.png'
import img22 from './img/22.png'
import img23 from './img/23.png'
import img24 from './img/24.png'
import img25 from './img/25.png'
import img26 from './img/26.png'
import img27 from './img/27.png'
import img28 from './img/28.png'
import img29 from './img/29.png'
import img3 from './img/3.png'
import img30 from './img/30.png'
import img31 from './img/31.png'
import img32 from './img/32.png'
import img4 from './img/4.png'
import img5 from './img/5.png'
import img6 from './img/6.png'
import img7 from './img/7.png'
import img8 from './img/8.png'
import img9 from './img/9.png'
import { getVisited } from '../../api/profile/getVisited'
import { getRank } from '../../api/rank/getRank'
import authToken from '../../stores/authToken'

// const StyledIcon = styled(Icon)`
//   color: #4caf50; /* 색상 */
//   font-size: 24px; /* 크기 */
// `

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* 전체 화면 높이 */
`

const Title = styled.div`
  display: flex;
  justify-content: flex-start; /* 좌측 정렬 */
  align-items: center;
  color: black;
  line-height: 2rem;
  margin-top: 0.5rem;
  height: 4.5rem;
  padding-left: 2rem; /* 좌측 여백 추가 (필요에 따라 조정 가능) */
  text-align: left; /* 텍스트를 좌측 정렬 */
  font-size: 18px;
`

const PlacesContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  gap: 20px;
  max-width: 1200px;
  //margin: 0 auto;
  padding-bottom: 6rem; //하단 메뉴 바 보다 조금 위에 위치
  overflow-y: auto; /* 세로 스크롤 가능하게 설정 */
`

const PlaceCardContainer = styled.div<{ selected: boolean }>`
  width: 20%;
  height: 11%;
  aspect-ratio: 1;
  background-color: ${props => (props.selected ? '#b3d8c3' : '#f9f9f9')};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  text-align: center;
  transition: transform 0.2s;
  position: relative;

  &:hover {
    transform: scale(1.05);
  }
`

const PlaceImage = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
  display: block;
`

const CheckMark = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); // 가운데 정렬
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  background-color: rgba(76, 175, 80, 0.3);
  color: white;
`

const PlaceName = styled.p`
  margin: 0;
  font-size: 8px;
  padding: 5px;
  //font-weight: bold;
`
interface Place {
  contentid: number
  contenttypeid: number
  place: string
  firstimage: string
}

interface VisitedPlace {
  contentid: number
  contenttypeid: number
  areacode: number
  sigungucode: number
  place: string
  firstimage: string
}

// 예시 데이터 (실제 데이터로 교체 필요)
const mocktop100Places: Place[] = [
  { contentid: 123445, contenttypeid: 12, place: '첨성대', firstimage: img1 },
  { contentid: 123446, contenttypeid: 12, place: '경복궁', firstimage: img2 },
  { contentid: 123447, contenttypeid: 12, place: '창경궁', firstimage: img3 },
  {
    contentid: 123448,
    contenttypeid: 12,
    place: '국립중앙박물관',
    firstimage: img4,
  },
  {
    contentid: 123449,
    contenttypeid: 12,
    place: '왕궁리유적',
    firstimage: img5,
  },
  {
    contentid: 123450,
    contenttypeid: 12,
    place: '전주한옥마을',
    firstimage: img6,
  },
  { contentid: 123451, contenttypeid: 12, place: '창덕궁', firstimage: img7 },
  { contentid: 123452, contenttypeid: 12, place: '보안사', firstimage: img8 },
  {
    contentid: 123453,
    contenttypeid: 12,
    place: '목포근대역사관',
    firstimage: img9,
  },
  { contentid: 123454, contenttypeid: 12, place: '광화문', firstimage: img10 },
  { contentid: 123455, contenttypeid: 12, place: '삼성궁', firstimage: img11 },
  { contentid: 123456, contenttypeid: 12, place: '임진각', firstimage: img12 },
  {
    contentid: 123457,
    contenttypeid: 12,
    place: '수원 화성',
    firstimage: img13,
  },
  {
    contentid: 123458,
    contenttypeid: 12,
    place: '동궁과 월지',
    firstimage: img14,
  },
  { contentid: 123459, contenttypeid: 12, place: '경포대', firstimage: img15 },
  { contentid: 123460, contenttypeid: 12, place: '공산성', firstimage: img16 },
  { contentid: 123461, contenttypeid: 12, place: '진주성', firstimage: img17 },
  {
    contentid: 123462,
    contenttypeid: 12,
    place: '해미읍성',
    firstimage: img18,
  },
  {
    contentid: 123463,
    contenttypeid: 12,
    place: '행주산성',
    firstimage: img19,
  },
  {
    contentid: 123464,
    contenttypeid: 12,
    place: '도동서원',
    firstimage: img20,
  },
  {
    contentid: 123465,
    contenttypeid: 12,
    place: '안동 하회마을',
    firstimage: img21,
  },
  { contentid: 123466, contenttypeid: 12, place: '석굴암', firstimage: img22 },
  { contentid: 123467, contenttypeid: 12, place: '불국사', firstimage: img23 },
  {
    contentid: 123468,
    contenttypeid: 12,
    place: '강릉 오죽헌',
    firstimage: img24,
  },
  {
    contentid: 123469,
    contenttypeid: 12,
    place: '남산골 한옥마을',
    firstimage: img25,
  },
  { contentid: 123470, contenttypeid: 12, place: '설악산', firstimage: img26 },
  {
    contentid: 123471,
    contenttypeid: 12,
    place: '제주 성산 일출봉',
    firstimage: img27,
  },
  {
    contentid: 123472,
    contenttypeid: 12,
    place: '부산 광안리 해변',
    firstimage: img28,
  },
  {
    contentid: 123473,
    contenttypeid: 12,
    place: '경주 불국사',
    firstimage: img29,
  },
  { contentid: 123474, contenttypeid: 12, place: '남이섬', firstimage: img30 },
  {
    contentid: 123475,
    contenttypeid: 12,
    place: '하동 쌍계사',
    firstimage: img31,
  },
  {
    contentid: 123476,
    contenttypeid: 12,
    place: '제주 한라산',
    firstimage: img32,
  },
]

const mockVisitedPlaces: VisitedPlace[] = [
  {
    contentid: 123445,
    contenttypeid: 12,
    areacode: 1,
    sigungucode: 1,
    place: '첨성대',
    firstimage: 'img1.png',
  },
  {
    contentid: 123447,
    contenttypeid: 12,
    areacode: 4,
    sigungucode: 4,
    place: '창경궁',
    firstimage: 'img3.png',
  },
  {
    contentid: 123452,
    contenttypeid: 12,
    areacode: 2,
    sigungucode: 3,
    place: '보안사',
    firstimage: 'img8.png',
  },
  {
    contentid: 123459,
    contenttypeid: 12,
    areacode: 5,
    sigungucode: 7,
    place: '경포대',
    firstimage: 'img15.png',
  },
  {
    contentid: 123465,
    contenttypeid: 12,
    areacode: 8,
    sigungucode: 6,
    place: '안동 하회마을',
    firstimage: 'img21.png',
  },
]

const PlaceCard: React.FC<{ place: Place; selected: boolean }> = ({
  place,
  selected,
}) => {
  return (
    <PlaceCardContainer selected={selected}>
      {selected && (
        <CheckMark>
          <Icon icon='gravity-ui:check' width='40' height='40' />
        </CheckMark>
      )}
      <PlaceImage src={place.firstimage} alt={place.place} />
      <PlaceName>{place.place}</PlaceName>
    </PlaceCardContainer>
  )
}

const Rank: React.FC = () => {
  //-----API 연결------

  const [visitedPlaces, setVisitedPlaces] = useState<Set<number>>(new Set())
  const [top100Places, setTop100Places] = useState<Place[]>([])

  useEffect(() => {
    const fetchPlaces = async () => {
      const token = authToken.getAccessToken()

      const places = await getRank(token)
      if (places) {
        setTop100Places(places.data)
      }
    }

    const fetchVisitedPlaces = async () => {
      const token = authToken.getAccessToken()
      const visited = await getVisited(token)
      if (visited && visited.data) {
        const visitedIds = new Set(
          visited.data.map((place: VisitedPlace) => place.contentid),
        ) // Set 생성
        setVisitedPlaces(visitedIds)
      }
    }

    fetchPlaces()
    fetchVisitedPlaces()
  }, [])

  useEffect(() => {
    const fetchMockData = () => {
      // Mock 데이터를 사용하여 상태를 설정합니다
      setTop100Places(mocktop100Places)

      const visitedIds = new Set(
        mockVisitedPlaces.map(place => place.contentid),
      )
      setVisitedPlaces(visitedIds)
    }

    fetchMockData()
  }, [])

  return (
    <AppContainer>
      <Title>
        <h1>교육여행장소 TOP100</h1>
      </Title>
      <PlacesContainer>
        {top100Places.map(place => (
          <PlaceCard
            key={place.contentid}
            place={place}
            selected={visitedPlaces.has(place.contentid)}
          />
        ))}
      </PlacesContainer>
    </AppContainer>
  )
}

export default Rank
