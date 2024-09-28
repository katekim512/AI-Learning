import React, { useEffect, useState } from 'react'

import * as L from '../../styles/PlaceDetail.style'

interface ContentType14Data {
  scale: string
  usefee: string
  discountinfo: string
  spendtime: string
  parkingfee: string
  infocenterculture: string
  accomcountculture: string
  usetimeculture: string
  restdateculture: string
  parkingculture: string
  chkbabycarriageculture: string
  chkpetculture: string
  chkcreditcardculture: string
}

interface Props {
  contentid: string
}

const ContentType14: React.FC<Props> = ({ contentid }) => {
  const [data, setData] = useState<ContentType14Data | null>(null)

  useEffect(() => {
    const fetchContentType14Data = async () => {
      try {
        const myServiceKey = process.env.REACT_APP_TOURISM_SERVICE_KEY
        const response = await fetch(
          `https://apis.data.go.kr/B551011/KorService1/detailIntro1?serviceKey=${myServiceKey}&MobileOS=ETC&_type=json&MobileApp=AppTest&contentId=${contentid}&contentTypeId=14&numOfRows=1&pageNo=1`,
        )
        const result = await response.json()
        if (result.response.body.items.item[0]) {
          setData(result.response.body.items.item[0])
        }
      } catch (error) {
        console.error('Failed to fetch content type 14 data:', error)
      }
    }

    fetchContentType14Data()
  }, [contentid])

  const formatText = (text: string) => {
    return text.replace(/<br\s*\/?>/gi, '\n') // <br> 태그를 \n으로 변환
  }

  if (!data) return <L.OverviewText>Loading...</L.OverviewText>

  return (
    <>
      <br />
      <br />
      <L.OverviewTitle>문화시설 상세 정보</L.OverviewTitle>
      <L.OverviewText style={{ whiteSpace: 'pre-wrap' }}>
        {data.scale && (
          <>
            <strong>규모:</strong> {formatText(data.scale)}
            <br />
            <br />
          </>
        )}

        {data.usefee && (
          <>
            <strong>이용 요금:</strong> {formatText(data.usefee)}
            <br />
            <br />
          </>
        )}

        {data.discountinfo && (
          <>
            <strong>할인 정보:</strong> {formatText(data.discountinfo)}
            <br />
            <br />
          </>
        )}

        {data.spendtime && (
          <>
            <strong>소요 시간:</strong> {formatText(data.spendtime)}
            <br />
            <br />
          </>
        )}

        {data.parkingfee && (
          <>
            <strong>주차 요금:</strong> {formatText(data.parkingfee)}
            <br />
            <br />
          </>
        )}

        {data.infocenterculture && (
          <>
            <strong>정보 센터:</strong> {formatText(data.infocenterculture)}
            <br />
            <br />
          </>
        )}

        {data.accomcountculture && (
          <>
            <strong>숙박 시설 수:</strong> {formatText(data.accomcountculture)}
            <br />
            <br />
          </>
        )}

        {data.usetimeculture && (
          <>
            <strong>이용 시간:</strong> {formatText(data.usetimeculture)}
            <br />
            <br />
          </>
        )}

        {data.restdateculture && (
          <>
            <strong>휴무일:</strong> {formatText(data.restdateculture)}
            <br />
            <br />
          </>
        )}

        {data.parkingculture && (
          <>
            <strong>주차 가능 여부:</strong> {formatText(data.parkingculture)}
            <br />
            <br />
          </>
        )}

        {data.chkbabycarriageculture && (
          <>
            <strong>유모차 대여 가능:</strong>{' '}
            {formatText(data.chkbabycarriageculture)}
            <br />
            <br />
          </>
        )}

        {data.chkpetculture && (
          <>
            <strong>반려동물 출입 가능:</strong>{' '}
            {formatText(data.chkpetculture)}
            <br />
            <br />
          </>
        )}

        {data.chkcreditcardculture && (
          <>
            <strong>신용카드 사용 가능:</strong>{' '}
            {formatText(data.chkcreditcardculture)}
            <br />
            <br />
          </>
        )}
      </L.OverviewText>
    </>
  )
}

export default ContentType14
