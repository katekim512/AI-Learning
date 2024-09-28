import React, { useEffect, useState } from 'react'

import * as L from '../../styles/PlaceDetail.style'

interface ContentType12Data {
  infocenter: string
  opendate: string
  restdate: string
  expguide: string
  expagerange: string
  accomcount: string
  useseason: string
  usetime: string
  parking: string
  chkbabycarriage: string
  chkpet: string
  chkcreditcard: string
}

interface Props {
  contentid: string
}

const ContentType12: React.FC<Props> = ({ contentid }) => {
  const [data, setData] = useState<ContentType12Data | null>(null)

  useEffect(() => {
    const fetchContentType12Data = async () => {
      try {
        const myServiceKey = process.env.REACT_APP_TOURISM_SERVICE_KEY
        const response = await fetch(
          `https://apis.data.go.kr/B551011/KorService1/detailIntro1?serviceKey=${myServiceKey}&MobileOS=ETC&MobileApp=AppTest&_type=json&contentId=${contentid}&contentTypeId=12&numOfRows=1&pageNo=1`,
        )
        const result = await response.json()
        if (result.response.body.items.item[0]) {
          setData(result.response.body.items.item[0])
        }
      } catch (error) {
        console.error('Failed to fetch content type 12 data:', error)
      }
    }

    fetchContentType12Data()
  }, [contentid])

  const formatText = (text: string) => {
    return text.replace(/<br\s*\/?>/gi, '\n') // <br> 태그를 \n으로 변환
  }

  if (!data) return <L.OverviewText>Loading...</L.OverviewText>

  return (
    <>
      <br></br>
      <br></br>
      <L.OverviewTitle>관광지 상세 정보</L.OverviewTitle>
      <L.OverviewText>
        {data.infocenter && (
          <>
            <strong>정보센터:</strong> {formatText(data.infocenter)}
            <br></br>
            <br></br>
          </>
        )}

        {data.opendate && (
          <>
            <strong>개장일:</strong> {formatText(data.opendate)}
            <br></br>
            <br></br>
          </>
        )}

        {data.restdate && (
          <>
            <strong>휴무일:</strong>
            <br></br>
            {formatText(data.restdate)}
            <br></br>
            <br></br>
          </>
        )}

        {data.expguide && (
          <>
            <strong>체험 안내:</strong> {formatText(data.expguide)}
            <br></br>
            <br></br>
          </>
        )}

        {data.expagerange && (
          <>
            <strong>체험 연령대:</strong> {formatText(data.expagerange)}
            <br></br>
            <br></br>
          </>
        )}

        {data.accomcount && (
          <>
            <strong>숙박 시설 수:</strong> {formatText(data.accomcount)}
            <br></br>
            <br></br>
          </>
        )}

        {data.useseason && (
          <>
            <strong>이용 계절:</strong> {formatText(data.useseason)}
            <br></br>
            <br></br>
          </>
        )}

        {data.usetime && (
          <>
            <strong>이용 시간:</strong>
            <br></br>
            {formatText(formatText(data.usetime))}
            <br></br>
            <br></br>
          </>
        )}
        {data.parking && (
          <>
            <strong>주차 가능 여부:</strong> {formatText(data.parking)}
            <br></br>
            <br></br>
          </>
        )}

        {data.chkbabycarriage && (
          <>
            <strong>유모차 대여 가능:</strong>{' '}
            {formatText(data.chkbabycarriage)}
            <br></br>
            <br></br>
          </>
        )}

        {data.chkpet && (
          <>
            <strong>반려동물 출입 가능:</strong> {formatText(data.chkpet)}
            <br></br>
            <br></br>
          </>
        )}

        {data.chkcreditcard && (
          <>
            <strong>신용카드 사용 가능:</strong>{' '}
            {formatText(data.chkcreditcard)}
            <br></br>
            <br></br>
          </>
        )}
      </L.OverviewText>
    </>
  )
}

export default ContentType12
