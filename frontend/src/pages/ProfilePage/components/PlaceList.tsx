import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import PlaceItem, { PlaceItemInfo } from './PlaceItem'
import { getRecentPlace } from '../../../api/profile/getRecentPlace'
import useLikeList from '../../../hooks/useLikeList'
import useVisitedList from '../../../hooks/useVisitedList'
import authToken from '../../../stores/authToken'
import * as L from '../styles/PlaceList.style'

const PlaceList = () => {
  const navigate = useNavigate()
  const [selectedTab, setSelectedTab] = useState<'recent' | 'like' | 'visited'>(
    'recent',
  )
  const [recentList, setRecentList] = useState<PlaceItemInfo[]>([])
  const [loadingRecent, setLoadingRecent] = useState(false)
  const [errorRecent, setErrorRecent] = useState<string | null>(null)

  const [likeList, setLikeList] = useState<PlaceItemInfo[] | null>(null)
  const [visitedList, setVisitedList] = useState<PlaceItemInfo[] | null>(null)

  const token = authToken.getAccessToken()
  const { likeList: fetchedLikeList } = useLikeList()
  const { visitedList: fetchedVisitedList } = useVisitedList()

  const handleClick = (place: PlaceItemInfo) => {
    navigate(
      `/place/${encodeURIComponent(place.contenttypeid)}/${encodeURIComponent(
        place.contentid,
      )}`,
    )
  }

  // 최근 본 장소 요청 함수
  const fetchRecentPlaces = async () => {
    setLoadingRecent(true)
    setErrorRecent(null)
    try {
      const response = await getRecentPlace(token)
      if (response && response.data) {
        setRecentList(response.data)
      }
    } catch (error) {
      setErrorRecent('최근 본 장소를 불러오는데 실패했습니다.')
      console.error('Error fetching recent places:', error)
    } finally {
      setLoadingRecent(false)
    }
  }

  // 탭이 변경될 때마다 해당 탭의 데이터를 로드하고, 다른 탭의 상태 초기화
  useEffect(() => {
    if (selectedTab === 'recent') {
      fetchRecentPlaces()
      setLikeList(null)
      setVisitedList(null)
    } else if (selectedTab === 'like') {
      setRecentList([])
      setLoadingRecent(false)
      setErrorRecent(null)
      setLikeList(fetchedLikeList || [])
      setVisitedList(null)
    } else if (selectedTab === 'visited') {
      setRecentList([])
      setLoadingRecent(false)
      setErrorRecent(null)
      setLikeList(null)
      setVisitedList(fetchedVisitedList || [])
    }
  }, [selectedTab, fetchedLikeList, fetchedVisitedList])

  // 탭별 데이터 렌더링
  const renderList = () => {
    if (selectedTab === 'recent') {
      if (loadingRecent) return <div>로딩 중...</div>
      if (errorRecent) return <div>{errorRecent}</div>
      return recentList.map(place => (
        <PlaceItem key={place.contentid} place={place} onClick={handleClick} />
      ))
    }
    if (selectedTab === 'like' && likeList) {
      return likeList.map(place => (
        <PlaceItem key={place.contentid} place={place} onClick={handleClick} />
      ))
    }
    if (selectedTab === 'visited' && visitedList) {
      return visitedList.map(place => (
        <PlaceItem key={place.contentid} place={place} onClick={handleClick} />
      ))
    }
    return <div>목록이 없습니다.</div>
  }

  return (
    <L.Container>
      <L.TabContainer>
        <L.Tab
          isSelected={selectedTab === 'recent'}
          onClick={() => setSelectedTab('recent')}
        >
          최근 본
        </L.Tab>
        <L.Tab
          isSelected={selectedTab === 'like'}
          onClick={() => setSelectedTab('like')}
        >
          좋아요
        </L.Tab>
        <L.Tab
          isSelected={selectedTab === 'visited'}
          onClick={() => setSelectedTab('visited')}
        >
          방문한
        </L.Tab>
      </L.TabContainer>
      <L.PlaceListContainer>{renderList()}</L.PlaceListContainer>
    </L.Container>
  )
}

export default PlaceList
