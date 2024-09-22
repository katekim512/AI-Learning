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
  onSearchInput: (input: string) => void // 부모로 검색어 전달
  areacode?: number
  sigungucode?: number
}

const SearchBar: React.FC<SearchBarProps> = ({
  allPlaces,
  recommendedPlaces,
  onFilteredPlaces,
  getAreaAndSigunguName,
  onSearchInput,
  areacode,
  sigungucode,
}) => {
  const [searchTerm, setSearchTerm] = useState('')

  // useEffect(() => {
  //   // Notify parent component of the search term
  //   onSearchInput(searchTerm)

  //   // Filter places based on search term or show recommendedPlaces
  //   const filteredPlaces = searchTerm
  //     ? allPlaces.filter(place => {
  //         const areaAndSigunguName = getAreaAndSigunguName(
  //           place.areacode,
  //           place.sigungucode,
  //         )
  //         return (
  //           place.place.includes(searchTerm) ||
  //           areaAndSigunguName.includes(searchTerm)
  //         )
  //       })
  //     : recommendedPlaces

  //   onFilteredPlaces(filteredPlaces)
  // }, [searchTerm])

  useEffect(() => {
    // Notify parent component of the search term
    onSearchInput(searchTerm)

    // Filter places based on search term, areacode, and sigungucode
    const filteredPlaces = allPlaces.filter(place => {
      // Check if the place matches the areacode and sigungucode, if provided
      const matchesAreaAndSigungu =
        (!areacode || place.areacode === areacode) &&
        (!sigungucode || place.sigungucode === sigungucode)

      const areaAndSigunguName = getAreaAndSigunguName(
        place.areacode,
        place.sigungucode,
      )

      // Check if the place matches the search term or the area/sigungucode name
      const matchesSearchTerm =
        place.place.includes(searchTerm) ||
        areaAndSigunguName.includes(searchTerm)

      // Return true if both the area/sigungucode filter and the search term match
      return matchesAreaAndSigungu && matchesSearchTerm
    })

    // If no search term is entered, use recommended places
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
