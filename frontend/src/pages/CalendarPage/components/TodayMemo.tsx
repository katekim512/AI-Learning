import React from 'react'

import * as L from '../styles/TodayMemo.style'

interface InfoBannerProps {
  text: string
}

const TodayMemo: React.FC<InfoBannerProps> = ({ text }) => {
  return (
    <L.BannerContainer>
      <L.BannerTitle>오늘의 메모에요!</L.BannerTitle>
      <L.BannerText>{text}</L.BannerText>
    </L.BannerContainer>
  )
}

export default TodayMemo
