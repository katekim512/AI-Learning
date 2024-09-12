import React from 'react'
import { useNavigate } from 'react-router-dom'

import * as L from '../RecommendPage/styles/Recommend.style' // Import the styled components with alias L

const Recommend: React.FC = () => {
  const navigate = useNavigate()

  const handleClick = (locationCode: number) => {
    navigate(`/recommend-place-detail/${encodeURIComponent(locationCode)}`)
  }

  return (
    <L.Background>
      <L.Title>
        <h1>지역별 장소 보기</h1>
      </L.Title>
      {/* 서울 */}
      <L.Location top='17%' left='45%' onClick={() => handleClick(1)}>
        <L.Icon src='/img/placeRecommend/Seoul.png' alt='서울' />
        <L.LocationName>서울</L.LocationName>
      </L.Location>
      {/* 인천 */}
      <L.Location top='25%' left='19%' onClick={() => handleClick(2)}>
        <L.Icon src='/img/placeRecommend/Incheon.png' alt='인천' />
        <L.LocationName>인천</L.LocationName>
      </L.Location>
      {/* 강원도 */}
      <L.Location top='27%' left='75%' onClick={() => handleClick(32)}>
        <L.Icon src='/img/placeRecommend/Gangwondo.png' alt='강원도' />
        <L.LocationName>강원도</L.LocationName>
      </L.Location>
      {/* 경기도 */}
      <L.Location top='33%' left='54%' onClick={() => handleClick(31)}>
        <L.Icon src='img/placeRecommend/Gyeonggido.png' alt='경기도' />
        <L.LocationName>경기도</L.LocationName>
      </L.Location>
      {/* 충청도 */}
      <L.Location top='43%' left='29%' onClick={() => handleClick(37)}>
        <L.Icon src='img/placeRecommend/Chungcheongdo.png' alt='충청도' />
        <L.LocationName>충청도</L.LocationName>
      </L.Location>
      {/* 경상도 */}
      <L.Location top='52%' left='59%' onClick={() => handleClick(35)}>
        <L.Icon src='img/placeRecommend/Gyeongsangdo.png' alt='경상도' />
        <L.LocationName>경상도</L.LocationName>
      </L.Location>
      {/* 경주 */}
      <L.Location top='47%' left='82%' onClick={() => handleClick(100)}>
        <L.Icon src='img/placeRecommend/Gyeongju.png' alt='경주' />
        <L.LocationName>경주</L.LocationName>
      </L.Location>
      {/* 전라도 */}
      <L.Location top='59%' left='20%' onClick={() => handleClick(37)}>
        <L.Icon src='img/placeRecommend/Jeonlado.png' alt='전라도' />
        <L.LocationName>전라도</L.LocationName>
      </L.Location>
      {/* 부산 */}
      <L.Location top='64%' left='70%' onClick={() => handleClick(6)}>
        <L.Icon src='img/placeRecommend/Busan.png' alt='부산' />
        <L.LocationName>부산</L.LocationName>
      </L.Location>
      {/* 광주 */}
      <L.Location top='72%' left='27%' onClick={() => handleClick(5)}>
        <L.Icon src='img/placeRecommend/Gwangju.png' alt='광주' />
        <L.LocationName>광주</L.LocationName>
      </L.Location>
      {/* 제주 */}
      <L.Location top='90%' left='30%' onClick={() => handleClick(2)}>
        <L.Icon src='img/placeRecommend/Jeju.png' alt='제주' />
        <L.LocationName>제주</L.LocationName>
      </L.Location>
    </L.Background>
  )
}

export default Recommend
