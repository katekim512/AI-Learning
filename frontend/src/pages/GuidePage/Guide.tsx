import React from 'react'

import * as L from './styles/Guide.style'
import { useUser } from '../../hooks/useUser'

const Guide: React.FC = () => {
  const { data: userInfo } = useUser()

  return (
    <L.AppContainer>
      <L.Title>
        <h1>
          <L.Nickname>{userInfo?.nickname}</L.Nickname>님 일정에 어울리는
          <br></br>가이드 분들이에요!
        </h1>
      </L.Title>
    </L.AppContainer>
  )
}

export default Guide
