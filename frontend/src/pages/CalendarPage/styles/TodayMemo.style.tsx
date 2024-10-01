import styled from 'styled-components'

export const BannerContainer = styled.div`
  background-color: #eff1ff; /* 라이트 퍼플 배경 */
  color: black;
  padding: 10px;
  border-radius: 5px;
  text-align: left;
  margin-bottom: 15px;
  position: relative;
  margin-left: 10px;
  margin-right: 10px;
`

export const BannerTitle = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  padding: 0.2rem;
  margin-left: 10px;
`

export const BannerText = styled.p`
  margin: 0;
  font-size: 12px;
  padding: 0.2rem;
  margin-left: 10px;
`
export const CloseButtonContainer = styled.button`
  position: absolute;
  top: 5px;
  right: 3px;
  height: 14px;
  background: none;
  text-align: right;
  border: none;
  width: 100%;
  cursor: pointer;
`

export const CloseButton = styled.button`
  position: absolute;

  top: 5px;
  right: 10px;
  background: none;
  border: none;
  font-size: 9px;
  cursor: pointer;
`
