import React from 'react'
import styled from 'styled-components'

import BackButton from '../../components/BackButton/BackButton'
import BottomNav from '../../components/BottomMenuBar/BottomMenuBar'
import dummyImage from '../RecommendPage/img/dummy.png'

// 추천 장소 데이터 타입 정의
interface Place {
  id: number
  name: string
  description: string
  imageUrl: string
}

// 추천 장소 데이터를 위한 더미 데이터
const places: Place[] = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  name: '첨성대',
  description: '경주 • 유적지',
  imageUrl: dummyImage, // 실제 이미지 URL로 대체 필요
}))

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 6rem); /* 전체 화면 높이 */
  margin-bottom: 6rem;
`

// 스타일드 컴포넌트 정의
const Container = styled.div`
  padding: 20px;
  padding-bottom: 0px;
  font-family: 'Arial', sans-serif;
`

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`

const SearchInput = styled.input`
  padding: 8px 12px;
  font-size: 14px;
  border: none; /* 테두리 제거 */
  outline: none; /* 포커스 시 기본 테두리 제거 */
  border-radius: 4px;
  margin-left: 0.5rem;
  width: calc(100% - 1.8rem);
  background-color: #f7f7f7; /* 배경색 설정 */
  color: #333; /* 텍스트 색상 설정 */
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.01); /* 내부 그림자 추가 */
`

const PlacesSection = styled.section`
  margin-top: 10px;
`

const SectionTitle = styled.div`
  font-size: 16px;
  margin-bottom: 15px;
  margin-left: 5px;
`

const BoldText = styled.span`
  font-weight: bold;
  font-size: 20px; /* 글씨 크기를 조금 키움 */
`

const PlacesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const PlaceItem = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
`

const PlaceNumber = styled.span`
  font-size: 12px;
  font-weight: bold;
  margin-left: 5px;
  margin-right: 15px;
`

const PlaceImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 5px;
  margin-right: 15px;
`

const PlaceInfo = styled.div`
  flex-grow: 1;
`

const PlaceName = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`

const PlaceDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin: 5px 0 0 0;
`

const AddButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  padding: 5px 13px;
  font-size: 13px;
  cursor: pointer;
  border-radius: 22px;

  &:hover {
    background-color: #e0e0e0;
  }
`

const RecommendDetail: React.FC = () => {
  return (
    <AppContainer>
      <Container>
        <Header>
          <BackButton />
          <SearchInput type='text' placeholder='원하는 장소 검색' />
        </Header>
        <PlacesSection>
          <SectionTitle>
            <BoldText>경주</BoldText> 추천 장소
          </SectionTitle>
          <PlacesList>
            {places.map((place, index) => (
              <PlaceItem key={place.id}>
                <PlaceNumber>{index + 1}</PlaceNumber>
                <PlaceImage src={place.imageUrl} alt={place.name} />
                <PlaceInfo>
                  <PlaceName>{place.name}</PlaceName>
                  <PlaceDescription>경주 • 유적지</PlaceDescription>
                </PlaceInfo>
                <AddButton>추가</AddButton>
              </PlaceItem>
            ))}
          </PlacesList>
        </PlacesSection>
      </Container>
      <BottomNav />
    </AppContainer>
  )
}

export default RecommendDetail
