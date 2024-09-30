import { Icon } from '@iconify/react'
import React from 'react'

import * as L from './styles/InfoBannerNoX.style'

interface InfoBannerProps {
  text: string
}

const InfoBannerNoX: React.FC<InfoBannerProps> = ({ text }) => {
  return (
    <L.BannerContainer>
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

export default InfoBannerNoX
