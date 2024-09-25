import React, { useEffect, useState } from 'react'
// import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'

import IndoorPlaceItem from './components/IndoorPlaceItem'
import * as L from './styles/IndoorPlace.style'
//import { postRecommendPlace } from '../../api/calendar/postRecommendPlace'
import {
  DateSchedule,
  PlacePreviewInfo,
  postTimelineDay,
} from '../../api/calendar/postTimelineDay'
import { postTimelineFix } from '../../api/calendar/postTimelineFix'
import { postIndoor } from '../../api/place/postIndoor'
import BackButton from '../../components/BackButton/BackButton'
import Loading from '../../components/Loading/Loading'
import { useAllPlace } from '../../hooks/useAllPlace'
import authToken from '../../stores/authToken'
import { useDayScheduleStore } from '../../stores/useDayScheduleStore'
import { getCityAndSigunguName } from '../../style/CityMapper2'
import NoPlace from '../CalendarPage/components/NoPlace'
import NoPlace2 from '../CalendarPage/components/NoPlace2'
import SearchBar from '../CalendarPage/components/SearchBar'
import { NoPlaceContainer } from '../CalendarPage/styles/NoPlace.style'

interface RecommendPlace {
  contentid: number
  contenttypeid: number
  areacode: number
  sigungucode: number
  place: string
  firstimage: string
}

const IndoorPlace: React.FC = () => {
  const token = authToken.getAccessToken()
  const navigate = useNavigate()
  const { daySchedule, setDaySchedule } = useDayScheduleStore()

  const { date: dateParam, contentid: contentidParam } = useParams<{
    date: string
    contentid: string
  }>()
  const date: string | null = dateParam ?? null
  const contentid: string | null = contentidParam ?? null

  console.log('Date:', date)

  const [indoorPlaces, setIndoorPlaces] = useState<RecommendPlace[]>([])

  // const { isLoading: isIndoorPlacesLoading } = useQuery(
  //   ['indoorPlaces', date],
  //   () => postIndoor(token, date as string),
  //   {
  //     enabled: !!token && !!date,
  //     onSuccess: response => {
  //       if (response && response.data) {
  //         setIndoorPlaces(response.data)
  //       }
  //     },
  //     onError: error => {
  //       console.error('Error fetching indoor places:', error)
  //     },
  //   },
  // )
  // // 원래 스케줄 가져오기
  // const { isLoading: isScheduleLoading } = useQuery(
  //   ['daySchedule', date],
  //   () => postTimelineDay(token, date as string),
  //   {
  //     enabled: !!token && !!date,
  //     select: response => response?.data,
  //     onSuccess: data => setDaySchedule(data),
  //   },
  // )

  const [filteredPlaces, setFilteredPlaces] = useState<RecommendPlace[]>([]) // 필터링된 장소 상태
  const [isLoading, setIsLoading] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const {
    data: allPlaces,
    isLoading: isAllPlacesLoading,
    error: allPlacesError,
  } = useAllPlace() //전체 데이터 불러오기

  useEffect(() => {
    const fetchData = async () => {
      if (!token || !date) return

      setIsLoading(true)
      try {
        // 실내 장소 가져오기
        const indoorResponse = await postIndoor(token, date)
        if (indoorResponse && indoorResponse.data) {
          setIndoorPlaces(indoorResponse.data)
        }

        // 일정 가져오기
        const scheduleResponse = await postTimelineDay(token, date)
        if (scheduleResponse && scheduleResponse.data) {
          setDaySchedule(scheduleResponse.data)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [token, date, setDaySchedule])

  // const formatDate = (dateString: string | null): string => {
  //   if (!dateString) {
  //     return '날짜 없음'
  //   } else {
  //     const date = new Date(dateString)
  //     const month = date.getMonth() + 1
  //     const day = date.getDate()
  //     return `${month}월 ${day}일`
  //   }
  // }

  // const { isLoading: isScheduleLoading } = useQuery(
  //   ['daySchedule', date],
  //   () => postTimelineDay(token, date as string),
  //   {
  //     enabled: !!token && !!date,
  //     select: response => response?.data,
  //     onSuccess: data => setDaySchedule(data),
  //   }
  // )

  const fetchPlaces = async () => {
    if (token && date) {
      await postTimelineDay(token, date as string)
    }
  }

  useEffect(() => {
    if (isAllPlacesLoading || isLoading) {
      setIsLoading(true)
    } else {
      setIsLoading(false)
    }
    fetchPlaces()
  }, [token, date])

  const handleSearchInput = (input: string) => {
    setSearchInput(input)
  }

  const handleClick = (place: RecommendPlace) => {
    navigate(
      `/place/${encodeURIComponent(place.contenttypeid)}/${encodeURIComponent(place.contentid)}`,
      { state: { date } },
    )
  }

  const handleFixButtonClick = async (
    e: React.MouseEvent,
    newPlace: RecommendPlace,
  ) => {
    e.stopPropagation()

    if (!date || !daySchedule || !contentid) {
      console.error('Date, day schedule, or contentid is null or undefined.')
      return
    }

    try {
      // URL의 contentid와 일치하는 장소 찾기
      const indexToReplace = daySchedule.info.findIndex(
        place => place.contentid.toString() === contentid,
      )

      if (indexToReplace === -1) {
        console.error('Place to replace not found in current schedule.')
        return
      }

      // 새로운 장소 정보 생성
      const newPlaceInfo: PlacePreviewInfo = {
        contentid: newPlace.contentid,
        contenttypeid: newPlace.contenttypeid,
        areacode: newPlace.areacode,
        sigungucode: newPlace.sigungucode,
        place: newPlace.place,
        order: daySchedule.info[indexToReplace].order, // 기존 순서 유지
        firstimage: newPlace.firstimage,
        mapx: 0, // 이 값은 RecommendPlace에 없으므로 기본값 설정
        mapy: 0, // 이 값은 RecommendPlace에 없으므로 기본값 설정
      }
      // 새로운 일정 생성
      const updatedSchedule: DateSchedule = {
        ...daySchedule,
        info: [
          ...daySchedule.info.slice(0, indexToReplace),
          newPlaceInfo,
          ...daySchedule.info.slice(indexToReplace + 1),
        ],
      }

      const response = await postTimelineFix(token, updatedSchedule)

      if (response && response.data) {
        navigate('/calendar', {
          state: {
            selectedDate: date,
          },
        })
      } else {
        console.error('Failed to update place.')
      }
    } catch (error) {
      console.error('Error updating place:', error)
    }
  }

  const handleReloadButtonClick = () => {
    fetchPlaces()
  }

  return (
    <L.AppContainer>
      <L.Container>
        <L.Header>
          <BackButton />
          <SearchBar
            allPlaces={allPlaces?.data ?? []}
            recommendedPlaces={indoorPlaces}
            onFilteredPlaces={setFilteredPlaces}
            onSearchInput={handleSearchInput}
            getCityAndSigunguName={getCityAndSigunguName}
          />
        </L.Header>

        <L.PlacesSection>
          <L.SectionTitle>
            실내장소 추천
            <L.ReloadIcon onClick={handleReloadButtonClick}></L.ReloadIcon>
          </L.SectionTitle>
          {isLoading ? (
            <NoPlaceContainer>
              <Loading />
            </NoPlaceContainer>
          ) : allPlacesError ? (
            <div>Error occurred</div> // Show error message if an error occurs
          ) : searchInput ? (
            // If search input is present, show filtered places
            filteredPlaces.length > 0 ? (
              <L.PlacesList>
                {filteredPlaces.map((place, index) => (
                  <IndoorPlaceItem
                    key={place.contentid}
                    place={place}
                    index={index}
                    onClick={() => handleClick(place)}
                    onFixClick={e => handleFixButtonClick(e, place)}
                  />
                ))}
              </L.PlacesList>
            ) : (
              <NoPlace2 />
            )
          ) : indoorPlaces.length > 0 ? (
            <L.PlacesList>
              {indoorPlaces.map((place, index) => (
                <IndoorPlaceItem
                  key={place.contentid}
                  place={place}
                  index={index}
                  onClick={() => handleClick(place)}
                  onFixClick={e => handleFixButtonClick(e, place)}
                />
              ))}
            </L.PlacesList>
          ) : (
            <NoPlace />
          )}
        </L.PlacesSection>
      </L.Container>
    </L.AppContainer>
  )
}

export default IndoorPlace
