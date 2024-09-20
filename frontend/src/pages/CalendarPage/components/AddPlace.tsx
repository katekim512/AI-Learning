import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

// import { postRecommendPlace } from '../../../api/calendar/postRecommendPlace'
import { postAddPlace } from '../../../api/place/postAddPlace'
import BackButton from '../../../components/BackButton/BackButton'
import { useAllPlace } from '../../../hooks/useAllPlace'
import authToken from '../../../stores/authToken'
import PlaceItem from '../../RecommendPage/components/PlaceItem'
import * as L from '../styles/AddPlace.style'
import dummyImage from '../styles/dummy.png'

interface RecommendPlace {
  contentid: number
  contenttypeid: number
  areacode: number
  sigungucode: number
  place: string
  firstimage: string
}

interface OpenAPIPlace {
  contentid: number
  contenttypeid: number
  areacode: number
  sigungucode: number
  title: string // OpenAPI의 장소 이름 필드
  firstimage?: string
}

const areaCodeMap: { [key: number]: string } = {
  1: '서울',
  2: '인천',
  3: '대전',
  4: '대구',
  5: '광주',
  6: '부산',
  7: '울산',
  8: '세종특별자치시',
  31: '경기도',
  32: '강원특별자치도',
  33: '충청북도',
  34: '충청남도',
  35: '경상북도',
  36: '경상남도',
  37: '전북특별자치도',
  38: '전라남도',
  39: '제주도',
}

const sigunguCodeMap: { [key: number]: { [key: number]: string } } = {
  1: {
    1: '강남구',
    2: '강동구',
    3: '강북구',
    4: '강서구',
    5: '관악구',
    6: '광진구',
    7: '구로구',
    8: '금천구',
    9: '노원구',
    10: '도봉구',
    11: '동대문구',
    12: '동작구',
    13: '마포구',
    14: '서대문구',
    15: '서초구',
    16: '성동구',
    17: '성북구',
    18: '송파구',
    19: '양천구',
    20: '영등포구',
    21: '용산구',
    22: '은평구',
    23: '종로구',
    24: '중구',
    25: '중랑구',
  },
  2: {
    1: '강화군',
    2: '계양구',
    3: '미추홀구',
    4: '남동구',
    5: '동구',
    6: '부평구',
    7: '서구',
    8: '연수구',
    9: '옹진군',
    10: '중구',
  },
  3: {
    1: '대덕구',
    2: '동구',
    3: '서구',
    4: '유성구',
    5: '중구',
  },
  4: {
    1: '남구',
    2: '달서구',
    3: '달성군',
    4: '동구',
    5: '북구',
    6: '서구',
    7: '수성구',
    8: '중구',
    9: '군위군',
  },
  5: {
    1: '광산구',
    2: '남구',
    3: '동구',
    4: '북구',
    5: '서구',
  },
  6: {
    1: '강서구',
    2: '금정구',
    3: '기장군',
    4: '남구',
    5: '동구',
    6: '동래구',
    7: '부산진구',
    8: '북구',
    9: '사상구',
    10: '사하구',
    11: '서구',
    12: '수영구',
    13: '연제구',
    14: '영도구',
    15: '중구',
    16: '해운대구',
  },
  7: {
    1: '중구',
    2: '남구',
    3: '동구',
    4: '북구',
    5: '울주군',
  },
  8: {
    1: '세종특별자치시',
  },
  31: {
    1: '가평군',
    2: '고양시',
    3: '과천시',
    4: '광명시',
    5: '광주시',
    6: '구리시',
    7: '군포시',
    8: '김포시',
    9: '남양주시',
    10: '동두천시',
    11: '부천시',
    12: '성남시',
    13: '수원시',
    14: '시흥시',
    15: '안산시',
    16: '안성시',
    17: '안양시',
    18: '양주시',
    19: '양평군',
    20: '여주시',
    21: '연천군',
    22: '오산시',
    23: '용인시',
    24: '의왕시',
    25: '의정부시',
    26: '이천시',
    27: '파주시',
    28: '평택시',
    29: '포천시',
    30: '하남시',
    31: '화성시',
  },
  32: {
    1: '강릉시',
    2: '고성군',
    3: '동해시',
    4: '삼척시',
    5: '속초시',
    6: '양구군',
    7: '양양군',
    8: '영월군',
    9: '원주시',
    10: '인제군',
    11: '정선군',
    12: '철원군',
    13: '춘천시',
    14: '태백시',
    15: '평창군',
    16: '홍천군',
    17: '화천군',
    18: '횡성군',
  },
  33: {
    1: '괴산군',
    2: '단양군',
    3: '보은군',
    4: '영동군',
    5: '옥천군',
    6: '음성군',
    7: '제천시',
    8: '진천군',
    9: '청원군',
    10: '청주시',
    11: '충주시',
    12: '증평군',
  },
  34: {
    1: '공주시',
    2: '금산군',
    3: '논산시',
    4: '당진시',
    5: '보령시',
    6: '부여군',
    7: '서산시',
    8: '서천군',
    9: '아산시',
    11: '예산군',
    12: '천안시',
    13: '청양군',
    14: '태안군',
    15: '홍성군',
    16: '계룡시',
  },
  35: {
    1: '경산시',
    2: '경주시',
    3: '고령군',
    4: '구미시',
    6: '김천시',
    7: '문경시',
    8: '봉화군',
    9: '상주시',
    10: '성주군',
    11: '안동시',
    12: '영덕군',
    13: '영양군',
    14: '영주시',
    15: '영천시',
    16: '예천군',
    17: '울릉군',
    18: '울진군',
    19: '의성군',
    20: '청도군',
    21: '청송군',
    22: '칠곡군',
    23: '포항시',
  },
  36: {
    1: '거제시',
    2: '거창군',
    3: '고성군',
    4: '김해시',
    5: '남해군',
    6: '마산시',
    7: '밀양시',
    8: '사천시',
    9: '산청군',
    10: '양산시',
    12: '의령군',
    13: '진주시',
    14: '진해시',
    15: '창녕군',
    16: '창원시',
    17: '통영시',
    18: '하동군',
    19: '함안군',
    20: '함양군',
    21: '합천군',
  },
  37: {
    1: '고창군',
    2: '군산시',
    3: '김제시',
    4: '남원시',
    5: '무주군',
    6: '부안군',
    7: '순창군',
    8: '완주군',
    9: '익산시',
    10: '임실군',
    11: '장수군',
    12: '전주시',
    13: '정읍시',
    14: '진안군',
  },
  38: {
    1: '강진군',
    2: '고흥군',
    3: '곡성군',
    4: '광양시',
    5: '구례군',
    6: '나주시',
    7: '담양군',
    8: '목포시',
    9: '무안군',
    10: '보성군',
    11: '순천시',
    12: '신안군',
    13: '여수시',
    16: '영광군',
    17: '영암군',
    18: '완도군',
    19: '장성군',
    20: '장흥군',
    21: '진도군',
    22: '함평군',
    23: '해남군',
    24: '화순군',
  },
  39: {
    1: '남제주군',
    2: '북제주군',
    3: '서귀포시',
    4: '제주시',
  },
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

const AddPlace: React.FC = () => {
  const token = authToken.getAccessToken()
  const navigate = useNavigate()

  const { date: dateParam } = useParams<{ date: string }>()
  const date: string | null = dateParam ?? null

  console.log('Date:', date)

  const [recommendedPlaces, setRecommendedPlaces] = useState<RecommendPlace[]>(
    [],
  )
  const [searchTerm, setSearchTerm] = useState('') // 검색어 상태 추가

  const {
    data: allPlaces,
    isLoading: isAllPlacesLoading,
    error: allPlacesError,
  } = useAllPlace() //전체 데이터 불러오기

  const [showAllPlaces, setShowAllPlaces] = useState(false)

  const formatDate = (dateString: string | null): string => {
    if (!dateString) {
      return '날짜 없음'
    } else {
      const date = new Date(dateString)
      const month = date.getMonth() + 1
      const day = date.getDate()
      return `${month}월 ${day}일`
    }
  }

  //-----API 연결----
  // useEffect(() => {
  //   fetchPlaces()
  // }, [token, date])

  // const fetchPlaces = async () => {
  //   if (!token || !date) return

  //   try {
  //     const requestPayload = { date }
  //     const response = await postRecommendPlace(token, requestPayload)

  //     if (response && response.data) {
  //       setRecommendedPlaces(response.data)
  //     } else {
  //       setRecommendedPlaces([])
  //     }
  //   } catch (error) {
  //     console.error('Failed to fetch recommended places:', error)
  //     setRecommendedPlaces([])
  //   }
  // }

  // 더미 데이터를 상태로 설정
  useEffect(() => {
    setRecommendedPlaces(dummyData)
  }, [date, token])

  const handleClick = (place: RecommendPlace) => {
    navigate(
      `/place/${encodeURIComponent(place.contenttypeid)}/${encodeURIComponent(place.contentid)}`,
      { state: { date } },
    )
  }

  const handleAddButtonClick = async (
    e: React.MouseEvent,
    contentid: number,
  ) => {
    e.stopPropagation()

    if (!date) {
      console.error('Date is null or undefined.')
      return
    }

    try {
      const response = await postAddPlace(token, contentid, date)
      if (response) {
        console.log('Place added successfully:', response.data.message)
      } else {
        console.error('Failed to add place.')
      }
    } catch (error) {
      console.error('Error adding place:', error)
    }
  }

  const fetchPlacesByContentType = async (
    latitude: number,
    longitude: number,
  ) => {
    const radius = '5000' // 검색 반경 (10km)
    const serviceKey = process.env.REACT_APP_TOURISM_SERVICE_KEY
    const contentTypeIds = [12, 14, 15] // 검색할 contentTypeId 목록
    let fetchedGpsPlaces: RecommendPlace[] = []

    try {
      for (const contentTypeId of contentTypeIds) {
        const url = `https://apis.data.go.kr/B551011/KorService1/locationBasedList1?serviceKey=${serviceKey}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AILearning&_type=json&listYN=Y&arrange=A&mapX=${longitude}&mapY=${latitude}&radius=${radius}&contentTypeId=${contentTypeId}`

        const response = await fetch(url)

        if (response.ok) {
          const contentType = response.headers.get('content-type') || ''
          if (contentType.includes('application/json')) {
            const data = await response.json()
            if (data.response?.body?.items?.item) {
              // 장소 항목들을 배열에 병합하고 'title'을 'place'로 매핑
              const places = data.response.body.items.item.map(
                (item: OpenAPIPlace) => ({
                  contentid: item.contentid,
                  contenttypeid: item.contenttypeid,
                  areacode: Number(item.areacode),
                  sigungucode: item.sigungucode,
                  place: item.title, // OpenAPI의 'title'을 'place'로 매핑
                  firstimage: item.firstimage || '/img/default_pic.png', // 이미지가 없는 경우 더미 이미지 사용
                }),
              )

              fetchedGpsPlaces = fetchedGpsPlaces.concat(places)

              // 변환된 장소 목록에서 contentid 값만 콘솔에 출력
              places.forEach((place: OpenAPIPlace) => {
                console.log(`contentid: ${place.contentid}`)
              })
            }
          } else {
            console.error('Expected JSON, but received:', await response.text())
          }
        } else {
          console.error('Failed to fetch places:', response.statusText)
        }
      }

      setRecommendedPlaces(fetchedGpsPlaces)
      console.log('Places fetched by content type:', fetchedGpsPlaces)
    } catch (error) {
      console.error('Error fetching places by content type:', error)
    }
  }

  const handleGPSButtonClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords
          fetchPlacesByContentType(latitude, longitude)
        },
        error => {
          console.error('Error getting location:', error)
        },
      )
    } else {
      console.error('Geolocation is not supported by this browser.')
    }
  }

  const getAreaAndSigunguName = (
    areacode: number,
    sigungucode: number,
  ): string => {
    const areaName = areaCodeMap[areacode] || ''
    const sigunguName = sigunguCodeMap[areacode]?.[sigungucode] || ''
    return `${areaName} ${sigunguName}`.trim()
  }

  const filteredPlaces = searchTerm
    ? (allPlaces?.data ?? []).filter((place: RecommendPlace) => {
        const areaAndSigunguName = getAreaAndSigunguName(
          place.areacode,
          place.sigungucode,
        )
        return (
          place.place.includes(searchTerm) || // 장소 이름에 검색어 포함
          areaAndSigunguName.includes(searchTerm) // 지역 또는 시군구 이름에 검색어 포함
        )
      })
    : recommendedPlaces // 검색어가 없으면 추천 장소를 보여줌

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value
    setSearchTerm(term)

    // 검색어가 입력되면 전체 목록을 보여줌
    setShowAllPlaces(term.length > 0)
  }

  // const handleReloadButtonClick = () => {
  //   fetchPlaces()
  // }

  return (
    <L.AppContainer>
      <L.Container>
        <L.Header>
          <BackButton />
          <L.SearchInput
            type='text'
            placeholder='원하는 장소 검색'
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </L.Header>

        <L.PlacesSection>
          <L.SectionTitle>
            <L.BoldText>{formatDate(date)}</L.BoldText>{' '}
            {showAllPlaces ? '검색 결과' : '추천 장소'}
            <L.gpsIcon onClick={handleGPSButtonClick}></L.gpsIcon>
          </L.SectionTitle>

          <L.PlacesList>
            {isAllPlacesLoading ? (
              <div>Loading...</div>
            ) : allPlacesError ? (
              <div>Error occurred </div>
            ) : filteredPlaces && filteredPlaces.length > 0 ? (
              filteredPlaces.map((place, index) => (
                <PlaceItem
                  key={place.contentid}
                  place={place}
                  index={index}
                  onClick={handleClick}
                  onAddClick={handleAddButtonClick}
                />
              ))
            ) : (
              <div>Loading</div>
            )}
          </L.PlacesList>
        </L.PlacesSection>
      </L.Container>
    </L.AppContainer>
  )
}

export default AddPlace
