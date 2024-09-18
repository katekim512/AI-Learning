import { Icon } from '@iconify/react'
import React from 'react'

import * as L from './styles/InfoBanner.style'

interface InfoBannerProps {
  text: string
  onClose: () => void
}

const InfoBanner: React.FC<InfoBannerProps> = ({ text, onClose }) => {
  return (
    <L.BannerContainer>
      <L.CloseButtonContainer>
        <L.CloseButton onClick={onClose}>
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
      </L.BannerText>{' '}
      {/* 전달받은 텍스트를 표시 */}
    </L.BannerContainer>
  )
}

export default InfoBanner
