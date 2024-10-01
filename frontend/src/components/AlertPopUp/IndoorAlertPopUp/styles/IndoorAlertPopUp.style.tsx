import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 다크 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`

export const ModalContainer = styled.div`
  background-color: white;
  border-radius: 10px; /* 둥근 모서리 */
  width: 80%;
  padding: 20px 20px 10px 20px; /* 상 우 하 좌 순서로 패딩 설정 */
  text-align: center;
  box-shadow: 0 0px 1px rgba(0, 0, 0, 0.05);
  position: relative;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 7px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 30px;
  cursor: pointer;
`

export const Message = styled.p`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  text-align: left;
`
export const SmallMessage = styled.p`
  margin-bottom: 20px;
  font-size: 12px;
  color: #333;
  text-align: left;
`

export const LocationContainer = styled.div`
  display: flex;
  flex-direction: column; // 세로 방향으로 아이템 배치
  justify-content: center; // 세로 방향 중앙 정렬
  align-items: center; // 가로 방향 중앙 정렬
  margin: 10px 0;
  width: 100%;
  border-radius: 10px;
  background-color: transparent;
`

export const LocationInfo = styled.div`
  text-align: center;
  width: 100%;
`

export const NavigateButton = styled.button`
  width: 100%;
  background-color: #5f79ff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 0;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #4e67e0;
  }
`
export const DateGroup = styled.div`
  margin: 15px 0px;
`

export const DateHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-left: 7px;
`

export const DateText = styled.span`
  font-weight: bold;
  margin-right: 5px;
  color: #525fd4;
  font-size: 16px;
`

export const WeatherText = styled.span`
  color: black;
  font-weight: bold;
  font-size: 16px;
`
