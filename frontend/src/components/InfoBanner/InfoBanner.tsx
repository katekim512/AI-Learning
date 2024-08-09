import React from 'react'
import styled from 'styled-components'

const BannerContainer = styled.div`
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

const BannerText = styled.p`
  margin: 0;
  font-size: 11px;
  margin-top: 9px;
  margin-left: 10px;
  margin-bottom: 5px;
`
const CloseButtonContainer = styled.button`
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

const CloseButton = styled.button`
  position: absolute;

  top: 5px;
  right: 10px;
  background: none;
  border: none;
  font-size: 9px;
  cursor: pointer;
`

interface InfoBannerProps {
  text: string
  onClose: () => void
}

const InfoBanner: React.FC<InfoBannerProps> = ({ text, onClose }) => {
  return (
    <BannerContainer>
      <CloseButtonContainer>
        <CloseButton onClick={onClose}>X</CloseButton>
      </CloseButtonContainer>
      <BannerText>{text}</BannerText> {/* 전달받은 텍스트를 표시 */}
    </BannerContainer>
  )
}

export default InfoBanner
