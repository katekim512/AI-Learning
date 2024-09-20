import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import LevelItem from './LevelItem'
import { postLevel } from '../../../api/profile/postLevel'
import BackButton from '../../../components/BackButton/BackButton'
import authToken from '../../../stores/authToken'
import dummyImage from '../styles/dummy.png'
import * as L from '../styles/EachLevel.style'

// Type for travel destination
interface Level {
  contentid: number
  contenttypeid: number
  areacode: number
  sigungucode: number
  place: string
  firstimage: string
  isVisited: boolean
}

// Sample data
const dummyData: Level[] = [
  {
    contentid: 1,
    contenttypeid: 12,
    areacode: 35,
    sigungucode: 1,
    place: '첨성대',
    firstimage: dummyImage,
    isVisited: false,
  },
  {
    contentid: 2,
    contenttypeid: 12,
    areacode: 35,
    sigungucode: 1,
    place: '동궁과 월지',
    firstimage: dummyImage,
    isVisited: false,
  },
  {
    contentid: 3,
    contenttypeid: 12,
    areacode: 11,
    sigungucode: 3,
    place: '경복궁',
    firstimage: dummyImage,
    isVisited: true,
  },
  {
    contentid: 4,
    contenttypeid: 12,
    areacode: 11,
    sigungucode: 3,
    place: '광화문',
    firstimage: dummyImage,
    isVisited: true,
  },
  {
    contentid: 5,
    contenttypeid: 14,
    areacode: 37,
    sigungucode: 2,
    place: '순천만 국가정원',
    firstimage: dummyImage,
    isVisited: false,
  },
  {
    contentid: 6,
    contenttypeid: 38,
    areacode: 31,
    sigungucode: 4,
    place: '수원 화성박물관',
    firstimage: dummyImage,
    isVisited: true,
  },
  {
    contentid: 7,
    contenttypeid: 28,
    areacode: 39,
    sigungucode: 1,
    place: '한라산 국립공원',
    firstimage: dummyImage,
    isVisited: false,
  },
  {
    contentid: 8,
    contenttypeid: 28,
    areacode: 39,
    sigungucode: 2,
    place: '성산일출봉',
    firstimage: dummyImage,
    isVisited: false,
  },
  {
    contentid: 9,
    contenttypeid: 12,
    areacode: 34,
    sigungucode: 2,
    place: '중원 탑평리 칠층석탑',
    firstimage: dummyImage,
    isVisited: true,
  },
  {
    contentid: 10,
    contenttypeid: 38,
    areacode: 31,
    sigungucode: 5,
    place: '대전 예술의 전당',
    firstimage: dummyImage,
    isVisited: true,
  },
]

const EachLevel: React.FC = () => {
  const [levelPlaces, setLevelPlaces] = useState<Level[]>([])

  const token = authToken.getAccessToken()
  const navigate = useNavigate()
  const { level: level } = useParams<{ level: string }>()

  useEffect(() => {
    fetchPlaces()
  }, [token, level])

  const fetchPlaces = async () => {
    if (!token || !level) return

    try {
      const requestPayload = { level }
      const response = await postLevel(token, requestPayload)

      if (response && response.data) {
        setLevelPlaces([response.data])
      } else {
        setLevelPlaces([])
      }
    } catch (error) {
      console.error('Failed to fetch recommended places:', error)
      setLevelPlaces([])
    }
  }

  //더미데이터 이용
  useEffect(() => {
    setLevelPlaces(dummyData) // Simulate fetching data or setting based on external factors
  }, [level, token]) // Dependencies to trigger the effect when they change

  // Filter destinations based on visited flag
  const notVisited = levelPlaces.filter(place => !place.isVisited)
  const visited = levelPlaces.filter(place => place.isVisited)

  const handleClick = (place: Level) => {
    navigate(
      `/place/${encodeURIComponent(place.contenttypeid)}/${encodeURIComponent(place.contentid)}`,
    )
  }

  return (
    <L.Container>
      <L.ButtonContainer>
        <BackButton />
      </L.ButtonContainer>

      <L.Title>{level} 추천 여행지</L.Title>
      <L.ScrollContainer>
        <L.Section>
          <L.SectionHeader>아직 방문하지 않음</L.SectionHeader>
          <L.DestinationList>
            {notVisited.map((place, index) => (
              <LevelItem
                key={place.contentid}
                place={place}
                index={index}
                onClick={() => handleClick(place)}
              />
            ))}
          </L.DestinationList>
        </L.Section>

        <L.Section>
          <L.SectionHeader>방문 완료</L.SectionHeader>
          <L.DestinationList>
            {visited.map((place, index) => (
              <LevelItem
                key={place.contentid}
                place={place}
                index={index}
                onClick={() => handleClick(place)}
              />
            ))}
          </L.DestinationList>
        </L.Section>
      </L.ScrollContainer>
    </L.Container>
  )
}

export default EachLevel
