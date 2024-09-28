import styled from 'styled-components'

export const PlaceItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 0;
  position: relative; /* 자식 요소의 절대 위치를 위한 상대 위치 */
`

export const PlaceNumber = styled.span`
  font-size: 12px;
  font-weight: bold;
  width: 20px; /* 고정된 너비로 모든 번호를 일관되게 표시 */
  text-align: right; /* 텍스트를 오른쪽 정렬 */
  margin-right: 20px; /* 번호와 이미지 사이의 간격 추가 */
  display: inline-block; /* 너비와 텍스트 정렬을 적용하기 위해 사용 */
  flex-shrink: 0; /* PlaceNumber의 크기를 줄이지 않도록 설정 */
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

export const AddButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  padding: 5px 13px;
  font-size: 13px;
  cursor: pointer;
  white-space: nowrap;
  border-radius: 22px;

  &:hover {
    background-color: #e0e0e0;
  }
`
