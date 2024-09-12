import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Background = styled.div`
  position: relative;
  width: 101%;
  height: calc(100vh - 4rem); /* 100vh에서 6rem만큼 뺀 높이 */
  background-image: url('img/placeRecommend/Korea.png'); /* 배경 이미지 경로 */
  background-size: 100% auto; /* 너비 100%, 높이 자동 */
  background-position: bottom center; /* 상단 중앙을 기준으로 정렬 */
  background-repeat: no-repeat; /* 이미지 반복 없음 */
  overflow: hidden; /* 화면 밖 요소 숨기기 */
  margin-bottom: 4rem;
`

const Location = styled.div<{
  top?: string
  left?: string
  bottom?: string
  right?: string
}>`
  position: absolute;
  top: ${props => props.top || 'auto'};
  left: ${props => props.left || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
  right: ${props => props.right || 'auto'};
  transform: translate(-50%, -50%);
  text-align: center;
  cursor: pointer; /* 커서를 손가락 모양으로 변경 */
`

const Icon = styled.img`
  width: 22vw; /* 아이콘의 너비를 뷰포트 너비 기준으로 설정 */
  max-width: 100px; /* 아이콘의 최대 크기 제한 */
  height: auto; /* 비율 유지 */
`

const LocationName = styled.p`
  margin-top: 0.5rem; /* 이미지와 텍스트 사이의 간격 */
  font-size: 0.8rem; /* 텍스트 크기 */
  color: black; /* 텍스트 색상 (원하는 색상으로 변경 가능) */
`

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: black;
  line-height: 2rem;
  margin-top: 0.5rem;
  height: 4.5rem;
  padding-left: 2rem;
  text-align: left;
  font-size: 18px;
`

const Recommend: React.FC = () => {
  const navigate = useNavigate()

  const handleClick = (locationCode: number) => {
    navigate(
      `/place/${encodeURIComponent('contenttypeid')}/${encodeURIComponent(locationCode)}`,
    )
  }
  return (
    <Background>
      <Title>
        <h1>지역별 장소 보기</h1>
      </Title>
      {/* 서울 */}
      <Location top='17%' left='45%' onClick={() => handleClick(1)}>
        <Icon src='/img/placeRecommend/Seoul.png' alt='서울' />
        <LocationName>서울</LocationName>
      </Location>
      {/* 인천 */}
      <Location top='25%' left='19%' onClick={() => handleClick(2)}>
        <Icon src='/img/placeRecommend/Incheon.png' alt='인천' />
        <LocationName>인천</LocationName>
      </Location>
      {/* 강원도 */}
      <Location top='27%' left='75%' onClick={() => handleClick(32)}>
        <Icon src='/img/placeRecommend/Gangwondo.png' alt='강원도' />
        <LocationName>강원도</LocationName>
      </Location>
      {/* 경기도 */}
      <Location top='33%' left='54%' onClick={() => handleClick(31)}>
        <Icon src='img/placeRecommend/Gyeonggido.png' alt='경기도' />
        <LocationName>경기도</LocationName>
      </Location>
      {/* 충청도 */}
      <Location top='43%' left='29%' onClick={() => handleClick(37)}>
        <Icon src='img/placeRecommend/Chungcheongdo.png' alt='충청도' />
        <LocationName>충청도</LocationName>
      </Location>
      {/* 경상도 */}
      <Location top='52%' left='59%' onClick={() => handleClick(35)}>
        <Icon src='img/placeRecommend/Gyeongsangdo.png' alt='경상도' />
        <LocationName>경상도</LocationName>
      </Location>
      {/* 경주 */}
      <Location top='47%' left='82%' onClick={() => handleClick(100)}>
        <Icon src='img/placeRecommend/Gyeongju.png' alt='경주' />
        <LocationName>경주</LocationName>
      </Location>
      {/* 전라도 */}
      <Location top='59%' left='20%' onClick={() => handleClick(37)}>
        <Icon src='img/placeRecommend/Jeonlado.png' alt='전라도' />
        <LocationName>전라도</LocationName>
      </Location>
      {/* 부산 */}
      <Location top='64%' left='70%' onClick={() => handleClick(6)}>
        <Icon src='img/placeRecommend/Busan.png' alt='부산' />
        <LocationName>부산</LocationName>
      </Location>
      {/* 광주 */}
      <Location top='72%' left='27%' onClick={() => handleClick(5)}>
        <Icon src='img/placeRecommend/Gwangju.png' alt='광주' />
        <LocationName>광주</LocationName>
      </Location>
      {/* 제주 */}
      <Location top='90%' left='30%' onClick={() => handleClick(2)}>
        <Icon src='img/placeRecommend/Jeju.png' alt='제주' />
        <LocationName>제주</LocationName>
      </Location>
    </Background>
  )
}

export default Recommend
