import React, { useEffect, useState } from 'react'

import * as L from '../styles/PlaceDetail.style'

interface ContentType15Data {
  sponsor1: string
  sponsor1tel: string
  sponsor2: string
  sponsor2tel: string
  eventenddate: string
  playtime: string
  eventplace: string
  eventhomepage: string
  agelimit: string
  bookingplace: string
  placeinfo: string
  subevent: string
  program: string
  eventstartdate: string
  usetimefestival: string
  discountinfofestival: string
  spendtimefestival: string
  festivalgrade: string
}

interface Props {
  contentid: string
}

const ContentType15: React.FC<Props> = ({ contentid }) => {
  const [data, setData] = useState<ContentType15Data | null>(null)

  useEffect(() => {
    const fetchContentType15Data = async () => {
      try {
        const myServiceKey = process.env.REACT_APP_TOURISM_SERVICE_KEY
        const response = await fetch(
          `https://apis.data.go.kr/B551011/KorService1/detailIntro1?serviceKey=${myServiceKey}&MobileOS=ETC&_type=json&MobileApp=AppTest&contentId=${contentid}&contentTypeId=15&numOfRows=1&pageNo=1`,
        )
        const result = await response.json()
        if (result.response.body.items.item[0]) {
          setData(result.response.body.items.item[0])
        }
      } catch (error) {
        console.error('Failed to fetch content type 15 data:', error)
      }
    }

    fetchContentType15Data()
  }, [contentid])

  const formatText = (text: string) => {
    return text.replace(/<br\s*\/?>/gi, '\n') // <br> 태그를 \n으로 변환
  }

  if (!data) return <L.OverviewText>Loading...</L.OverviewText>

  return (
    <>
      <br />
      <br />
      <L.OverviewTitle>축제공연행사 상세 정보</L.OverviewTitle>
      <L.OverviewText style={{ whiteSpace: 'pre-wrap' }}>
        {data.sponsor1 && (
          <>
            <strong>주최자:</strong> {formatText(data.sponsor1)}
            <br />
            <br />
          </>
        )}

        {data.sponsor1tel && (
          <>
            <strong>주최자 연락처:</strong> {formatText(data.sponsor1tel)}
            <br />
            <br />
          </>
        )}

        {data.sponsor2 && (
          <>
            <strong>주관자:</strong> {formatText(data.sponsor2)}
            <br />
            <br />
          </>
        )}

        {data.sponsor2tel && (
          <>
            <strong>주관자 연락처:</strong> {formatText(data.sponsor2tel)}
            <br />
            <br />
          </>
        )}

        {data.eventenddate && (
          <>
            <strong>행사 종료일:</strong> {formatText(data.eventenddate)}
            <br />
            <br />
          </>
        )}

        {data.playtime && (
          <>
            <strong>공연 시간:</strong> {formatText(data.playtime)}
            <br />
            <br />
          </>
        )}

        {data.eventplace && (
          <>
            <strong>행사 장소:</strong> {formatText(data.eventplace)}
            <br />
            <br />
          </>
        )}

        {data.eventhomepage && (
          <>
            <strong>홈페이지:</strong> {formatText(data.eventhomepage)}
            <br />
            <br />
          </>
        )}

        {data.agelimit && (
          <>
            <strong>연령 제한:</strong> {formatText(data.agelimit)}
            <br />
            <br />
          </>
        )}

        {data.bookingplace && (
          <>
            <strong>예약 장소:</strong> {formatText(data.bookingplace)}
            <br />
            <br />
          </>
        )}

        {data.placeinfo && (
          <>
            <strong>장소 정보:</strong> {formatText(data.placeinfo)}
            <br />
            <br />
          </>
        )}

        {data.subevent && (
          <>
            <strong>부대 행사:</strong> {formatText(data.subevent)}
            <br />
            <br />
          </>
        )}

        {data.program && (
          <>
            <strong>프로그램:</strong> {formatText(data.program)}
            <br />
            <br />
          </>
        )}

        {data.eventstartdate && (
          <>
            <strong>행사 시작일:</strong> {formatText(data.eventstartdate)}
            <br />
            <br />
          </>
        )}

        {data.usetimefestival && (
          <>
            <strong>이용 시간:</strong> {formatText(data.usetimefestival)}
            <br />
            <br />
          </>
        )}

        {data.discountinfofestival && (
          <>
            <strong>할인 정보:</strong> {formatText(data.discountinfofestival)}
            <br />
            <br />
          </>
        )}

        {data.spendtimefestival && (
          <>
            <strong>소요 시간:</strong> {formatText(data.spendtimefestival)}
            <br />
            <br />
          </>
        )}

        {data.festivalgrade && (
          <>
            <strong>축제 등급:</strong> {formatText(data.festivalgrade)}
            <br />
            <br />
          </>
        )}
      </L.OverviewText>
    </>
  )
}

export default ContentType15
