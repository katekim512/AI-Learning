import React, { useEffect, useState } from 'react'

import * as L from '../styles/AddPlace.style'

interface RecommendPlace {
  contentid: number
  contenttypeid: number
  areacode: number
  sigungucode: number
  place: string
  firstimage: string
}

interface SearchBarProps {
  allPlaces: RecommendPlace[] // 전체 장소 목록
  recommendedPlaces: RecommendPlace[] // 추천 장소 목록
  onFilteredPlaces: (places: RecommendPlace[]) => void // 필터링된 장소 전달
  getAreaAndSigunguName: (areacode: number, sigungucode: number) => string // 지역명과 시군구명 가져오기 함수
}

const SearchBar: React.FC<SearchBarProps> = ({
  allPlaces,
  recommendedPlaces,
  onFilteredPlaces,
  getAreaAndSigunguName,
}) => {
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const filteredPlaces = searchTerm
      ? allPlaces.filter(place => {
          const areaAndSigunguName = getAreaAndSigunguName(
            place.areacode,
            place.sigungucode,
          )
          return (
            place.place.includes(searchTerm) ||
            areaAndSigunguName.includes(searchTerm)
          )
        })
      : recommendedPlaces

    onFilteredPlaces(filteredPlaces)
  }, [
    searchTerm,
    allPlaces,
    recommendedPlaces,
    onFilteredPlaces,
    getAreaAndSigunguName,
  ])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return (
    <L.SearchInput
      type='text'
      placeholder='원하는 장소 검색'
      value={searchTerm}
      onChange={handleSearchChange}
    />
  )
}

export default SearchBar
