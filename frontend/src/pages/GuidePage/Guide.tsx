import React from 'react'

import GuideBox from './components/GuideBox'
import * as L from './styles/Guide.style'
import { getPattern } from '../../api/profile/getPattern'
import { useUser } from '../../hooks/useUser'
import authToken from '../../stores/authToken'

const Guide: React.FC = () => {
  const token = authToken.getAccessToken()
  const { data: userInfo } = useUser()

  const handleAPITest = async () => {
    if (token) {
      const successResponse = await getPattern(token)
      console.log(successResponse)
    }
  }

  return (
    <L.AppContainer>
      <L.Title>
        <h1>
          <L.Nickname onClick={handleAPITest}>{userInfo?.nickname}</L.Nickname>
          님 일정에 어울리는
          <br></br>가이드 분들이에요!
        </h1>
      </L.Title>
      <GuideBox />
    </L.AppContainer>
  )
}

export default Guide
