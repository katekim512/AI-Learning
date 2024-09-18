import React from 'react'
import { useNavigate } from 'react-router-dom'

import * as L from '../RecommendPage/styles/Recommend.style'

const Recommend: React.FC = () => {
  const navigate = useNavigate()

  interface LocationRequest {
    areacode: number[] // Array of numbers
    sigungucode: number | null // Number or null
  }

  const handleClick = (location: LocationRequest) => {
    const queryString = `areacode=${encodeURIComponent(JSON.stringify(location.areacode))}&sigungucode=${encodeURIComponent(String(location.sigungucode))}`

    navigate(`/recommend-place-detail?${queryString}`)
  }

  return (
    <L.Background>
      <L.Title>
        <h1>지역별 장소 보기</h1>
      </L.Title>
      {/* 한반도 */}
      <L.Location top='45%' left='50%'>
        <L.Picture src='/img/placeRecommend/place_korea.png' alt='한반도' />
        <L.LocationName></L.LocationName>
      </L.Location>
      {/* 한반도2 - 제주도 */}
      <L.Location top='89%' left='30%'>
        <L.Picture2 src='/img/placeRecommend/place_korea2.png' alt='한반도' />
        <L.LocationName></L.LocationName>
      </L.Location>
      {/* 서울 */}
      <L.Location
        top='17%'
        left='45%'
        onClick={() => handleClick({ areacode: [1], sigungucode: null })}
      >
        <L.Icon src='/img/placeRecommend/place_seoul.png' alt='서울' />
        <L.LocationName>서울</L.LocationName>
      </L.Location>
      {/* 인천 */}
      <L.Location
        top='25%'
        left='19%'
        onClick={() => handleClick({ areacode: [2], sigungucode: null })}
      >
        <L.Icon src='/img/placeRecommend/place_incheon.png' alt='인천' />
        <L.LocationName>인천</L.LocationName>
      </L.Location>
      {/* 강원도 */}
      <L.Location
        top='27%'
        left='75%'
        onClick={() => handleClick({ areacode: [32], sigungucode: null })}
      >
        <L.Icon src='/img/placeRecommend/place_gangwondo.png' alt='강원도' />
        <L.LocationName>강원도</L.LocationName>
      </L.Location>
      {/* 경기도 */}
      <L.Location
        top='33%'
        left='54%'
        onClick={() => handleClick({ areacode: [31], sigungucode: null })}
      >
        <L.Icon src='img/placeRecommend/place_gyeonggido.png' alt='경기도' />
        <L.LocationName className='gyeonggi'>경기도</L.LocationName>
      </L.Location>
      {/* 충청도 */}
      <L.Location
        top='43%'
        left='29%'
        onClick={() => handleClick({ areacode: [33, 34], sigungucode: null })}
      >
        <L.Icon src='img/placeRecommend/place_chungcheongdo.png' alt='충청도' />
        <L.LocationName>충청도</L.LocationName>
      </L.Location>
      {/* 경상도 */}
      <L.Location
        top='52%'
        left='59%'
        onClick={() => handleClick({ areacode: [35, 36], sigungucode: null })}
      >
        <L.Icon src='img/placeRecommend/place_gyeongsangdo.png' alt='경상도' />
        <L.LocationName>경상도</L.LocationName>
      </L.Location>
      {/* 경주 */}
      <L.Location
        top='47%'
        left='82%'
        onClick={() => handleClick({ areacode: [35], sigungucode: 2 })}
      >
        <L.Icon src='img/placeRecommend/place_gyeongju.png' alt='경주' />
        <L.LocationName>경주</L.LocationName>
      </L.Location>
      {/* 전라도 */}
      <L.Location
        top='59%'
        left='20%'
        onClick={() => handleClick({ areacode: [37, 38], sigungucode: null })}
      >
        <L.Icon src='img/placeRecommend/place_jeonlado.png' alt='전라도' />
        <L.LocationName>전라도</L.LocationName>
      </L.Location>
      {/* 부산 */}
      <L.Location
        top='64%'
        left='70%'
        onClick={() => handleClick({ areacode: [6], sigungucode: null })}
      >
        <L.Icon src='img/placeRecommend/place_busan.png' alt='부산' />
        <L.LocationName>부산</L.LocationName>
      </L.Location>
      {/* 광주 */}
      <L.Location
        top='72%'
        left='27%'
        onClick={() => handleClick({ areacode: [5], sigungucode: null })}
      >
        <L.Icon src='img/placeRecommend/place_gwangju.png' alt='광주' />
        <L.LocationName>광주</L.LocationName>
      </L.Location>
      {/* 제주 */}
      <L.Location
        top='88%'
        left='30%'
        onClick={() => handleClick({ areacode: [39], sigungucode: null })}
      >
        <L.Icon src='img/placeRecommend/place_jeju.png' alt='제주' />
        <L.LocationName>제주</L.LocationName>
      </L.Location>
      {/* 모두 보기*/}
      <L.ViewAllButton
        onClick={() => handleClick({ areacode: [], sigungucode: null })}
      >
        모두 보기 &gt;
      </L.ViewAllButton>
    </L.Background>
  )
}

export default Recommend
