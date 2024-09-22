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
  getCityAndSigunguName: (areacode: number, sigungucode: number) => string // 지역명과 시군구명 가져오기 함수
  onSearchInput: (input: string) => void // 부모로 검색어 전달
  areacode?: number
  sigungucode?: number
}

const SearchBar: React.FC<SearchBarProps> = ({
  allPlaces,
  recommendedPlaces,
  onFilteredPlaces,
  getCityAndSigunguName,
  onSearchInput,
  areacode,
  sigungucode,
}) => {
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    onSearchInput(searchTerm)

    const filteredPlaces = allPlaces.filter(place => {
      const citySigungu = getCityAndSigunguName(
        place.areacode,
        place.sigungucode,
      )

      const matchesAreaAndSigungu =
        (!areacode || place.areacode === areacode) &&
        (!sigungucode || place.sigungucode === sigungucode)
      const matchesSearchTerm =
        place.place.includes(searchTerm) || citySigungu.includes(searchTerm)

      return matchesAreaAndSigungu && matchesSearchTerm
    })

    const finalPlaces = searchTerm ? filteredPlaces : recommendedPlaces

    onFilteredPlaces(finalPlaces)
  }, [searchTerm])

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
