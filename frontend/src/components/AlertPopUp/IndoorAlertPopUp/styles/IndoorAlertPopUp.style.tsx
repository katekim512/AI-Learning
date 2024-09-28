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
  width: 300px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`

export const Message = styled.p`
  margin-bottom: 7px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  text-align: left;
`

export const LocationContainer = styled.div`
  display: flex;
  margin: 20px 0;
  padding: 10px;
  border-radius: 10px;
  background-color: #f5f5f5;
  align-items: center;
`

export const LocationImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin-right: 10px;
`

export const LocationInfo = styled.div`
  text-align: left;
`

export const LocationName = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`

export const LocationDescription = styled.p`
  font-size: 12px;
  color: #666;
  margin: 0;
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
