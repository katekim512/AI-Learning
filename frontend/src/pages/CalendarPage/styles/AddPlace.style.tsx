import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 6rem);
  margin-bottom: 6rem;
`

export const Container = styled.div`
  padding: 20px 10px;
  padding-bottom: 0px;
  font-family: 'Arial', sans-serif;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
`

export const SearchInput = styled.input`
  padding: 8px 12px;
  font-size: 18px;
  border: none;
  outline: none;
  border-radius: 4px;
  margin-left: 0.5rem;
  margin-top: 0.15rem;
  width: calc(100% - 1.8rem);
  background-color: transparent;
  color: #333;
`

export const PlacesSection = styled.section`
  padding: 0px 10px;
`

export const SectionTitle = styled.div`
  font-size: 16px;
  margin-bottom: 15px;
  margin-left: 5px;
  display: flex;
  align-items: center; // 세로 중앙 정렬
  justify-content: flex-start; // 가로 왼쪽 정렬 (필요에 따라 조정 가능)
  position: relative;
  width: 100%;
`

export const BoldText = styled.span`
  font-weight: bold;
  font-size: 16px;
  margin-right: 5px;
`

export const PlacesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: calc(100vh - 6rem);
  overflow-y: auto;
  padding-bottom: 1rem;
`

export const PlaceItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 0;
  position: relative; /* 자식 요소의 절대 위치를 위한 상대 위치 */
`

export const PlaceNumber = styled.span`
  font-size: 12px;
  font-weight: bold;
  width: 20px;
  text-align: right;
  margin-right: 20px;
  display: inline-block;
  flex-shrink: 0;
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
  margin-left: 5px;

  &:hover {
    background-color: #e0e0e0;
  }
`
export const gpsIcon = styled.button`
  display: inline-block;
  width: 17px;
  height: 17px;
  margin-left: 10px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'%3E%3Cpath fill='black' d='M240 120h-24.37A88.13 88.13 0 0 0 136 40.37V16a8 8 0 0 0-16 0v24.37A88.13 88.13 0 0 0 40.37 120H16a8 8 0 0 0 0 16h24.37A88.13 88.13 0 0 0 120 215.63V240a8 8 0 0 0 16 0v-24.37A88.13 88.13 0 0 0 215.63 136H240a8 8 0 0 0 0-16m-112 80a72 72 0 1 1 72-72a72.08 72.08 0 0 1-72 72'/%3E%3C/svg%3E");
  border: none; /* Removes the border */
  background-color: transparent;
`
export const ReloadIcon = styled.button`
  display: inline-block;
  width: 14px;
  height: 14px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 15 15'%3E%3Cpath fill='black' fill-rule='evenodd' d='M1.85 7.5c0-2.835 2.21-5.65 5.65-5.65c2.778 0 4.152 2.056 4.737 3.15H10.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-1 0v1.813C12.296 3.071 10.666.85 7.5.85C3.437.85.85 4.185.85 7.5s2.587 6.65 6.65 6.65c1.944 0 3.562-.77 4.714-1.942a6.8 6.8 0 0 0 1.428-2.167a.5.5 0 1 0-.925-.38a5.8 5.8 0 0 1-1.216 1.846c-.971.99-2.336 1.643-4.001 1.643c-3.44 0-5.65-2.815-5.65-5.65' clip-rule='evenodd'/%3E%3C/svg%3E");
  border: none;
  background-color: transparent;
  position: absolute; /* 절대 위치 지정 */
  right: 15px; /* 오른쪽 끝에 배치 */
  top: 50%; /* 수직 중앙 정렬 */
  transform: translateY(-50%); /* 수직 중앙 정렬을 위한 보정 */
`
export const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: calc(100vh-6rem);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
`
