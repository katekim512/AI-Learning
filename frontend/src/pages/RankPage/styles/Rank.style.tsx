import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* 전체 화면 높이 */
`

export const Title = styled.div`
  display: flex;
  justify-content: flex-start; /* 좌측 정렬 */
  align-items: center;
  color: black;
  line-height: 2rem;
  margin-top: 0.5rem;
  height: 4.5rem;
  padding-left: 2rem; /* 좌측 여백 추가 (필요에 따라 조정 가능) */
  text-align: left; /* 텍스트를 좌측 정렬 */
  font-size: 18px;
`

export const PlacesContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  gap: 20px;
  max-width: 1200px;
  //margin: 0 auto;
  padding-bottom: 6rem; //하단 메뉴 바 보다 조금 위에 위치
  overflow-y: auto; /* 세로 스크롤 가능하게 설정 */
`

export const PlaceCardContainer = styled.div<{ selected: boolean }>`
  width: 20%;
  height: 11%;
  aspect-ratio: 1;
  background-color: ${props => (props.selected ? '#b3d8c3' : '#eeeeee;')};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  text-align: center;
  transition: transform 0.2s;
  position: relative;

  &:hover {
    transform: scale(1.05);
  }
`

export const PlaceImage = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
  display: block;
`

export const NumberBadge = styled.div`
  position: absolute;
  top: -1px;
  left: -1px;
  background-color: #fff;
  color: #333;
  //border-radius: 10px;
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 7px;
  font-weight: bold;
`

export const CheckMark = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); // 가운데 정렬
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  background-color: rgba(76, 175, 80, 0.3);
  color: white;
`

export const PlaceName = styled.p`
  margin: 0;
  font-size: 8px;
  padding: 5px;
  //font-weight: bold;
`
