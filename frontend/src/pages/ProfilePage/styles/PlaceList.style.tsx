import styled from 'styled-components'

// 전체 컨테이너
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* 부모 요소의 남은 공간을 차지 */
  height: 0; /* 남은 공간을 채우기 위해 필요 */
`

// 탭 컨테이너
export const TabContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
`

// 각 탭 스타일
export const Tab = styled.button<{ isSelected: boolean }>`
  flex: 1;
  padding: 10px 0;
  border: none;
  background: ${({ isSelected }) => (isSelected ? '#eee' : 'white')};
  color: ${({ isSelected }) => (isSelected ? '#525FD4' : '#555')};
  cursor: pointer;
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'normal')};
  border-bottom: ${({ isSelected }) =>
    isSelected ? '2px solid #525FD4' : 'none'};
  outline: none;

  &:hover {
    background: #f5f5f5;
  }
`

// 장소 목록을 감싸는 컨테이너 (스크롤 가능)
export const PlaceListContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
`

export const PlaceItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 0;
`

export const PlaceImage = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 5px;
  margin-right: 15px;
`

export const PlaceInfo = styled.div`
  flex-grow: 1;
`

export const PlaceName = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`

export const PlaceDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin: 5px 0 0 0;
`
