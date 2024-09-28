import React, { useEffect, useState } from 'react'

import AccomodationItem from './AccomodationItem'
import * as L from '../styles/PlaceDetail.style'

interface AccomodationData {
  addr1: string
  title: string
  firstimage: string
}

interface Props {
  areacode: number
  sigungucode: number
}

const AccomodationList: React.FC<Props> = ({ areacode, sigungucode }) => {
  const [data, setData] = useState<AccomodationData[]>([])

  useEffect(() => {
    const fetchAccomodationData = async () => {
      try {
        const myServiceKey = process.env.REACT_APP_TOURISM_SERVICE_KEY
        const response = await fetch(
          `https://apis.data.go.kr/B551011/KorService1/areaBasedList1?serviceKey=${myServiceKey}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AILearning&_type=json&listYN=Y&arrange=O&contentTypeId=32&areaCode=${areacode}&sigunguCode=${sigungucode}&cat1=B02`,
        )
        const result = await response.json()
        if (result.response.body.items.item) {
          setData(result.response.body.items.item)
        }
      } catch (error) {
        console.error('Failed to fetch data:', error)
      }
    }

    fetchAccomodationData()
  }, [areacode, sigungucode])

  if (!data.length) return <L.OverviewText>Loading...</L.OverviewText>

  return (
    <>
      <br></br>
      <br></br>
      <L.OverviewTitle>주변 숙박 장소들이에요!</L.OverviewTitle>
      {data.slice(0, 3).map((item, index) => (
        <AccomodationItem key={index} item={item} />
      ))}
    </>
  )
}

export default AccomodationList
