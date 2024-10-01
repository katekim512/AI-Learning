import { Icon } from '@iconify/react'
import React from 'react'

import * as L from './styles/InfoBanner.style'

interface InfoBannerProps {
  text: string
  onClose: () => void
  onClick: () => void // 새로운 prop 추가
}

const InfoBanner: React.FC<InfoBannerProps> = ({ text, onClose, onClick }) => {
  return (
    <L.BannerContainer onClick={onClick}>
      {' '}
      {/* onClick 핸들러 추가 */}
      <L.CloseButtonContainer>
        <L.CloseButton
          onClick={e => {
            e.stopPropagation() // 이벤트 버블링 방지
            onClose()
          }}
        >
          <Icon icon='material-symbols-light:close' width='15' height='15' />
        </L.CloseButton>
      </L.CloseButtonContainer>
      <L.BannerText>
        <Icon
          icon='gg:info'
          width='15'
          height='15'
          style={{
            position: 'relative',
            top: '2.5px',
            marginRight: '5px',
          }}
        />
        {text}
      </L.BannerText>
    </L.BannerContainer>
  )
}

export default InfoBanner
