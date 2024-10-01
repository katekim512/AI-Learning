import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { getPattern } from '../../../api/profile/getPattern'
import BackButton from '../../../components/BackButton/BackButton'
import Loading from '../../../components/Loading/Loading'
import authToken from '../../../stores/authToken'
import * as L from '../styles/Pattern.style'

interface PatternData {
  id: number
  email: string
  nickname: string
  character: string
  pattern: string
  description: string
}

const Pattern: React.FC = () => {
  const [patternData, setPatternData] = useState<PatternData | null>(null)
  const token = authToken.getAccessToken()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchPattern = async () => {
      if (token) {
        try {
          const data = await getPattern(token)
          console.log(data)
          setPatternData(data)
        } catch (error) {
          console.error('Failed to fetch pattern:', error)
        }
      }
    }

    fetchPattern()
  }, [token])

  if (!patternData) return <Loading />

  return (
    <L.Container>
      <L.ButtonContainer>
        <BackButton />
      </L.ButtonContainer>

      <L.ScrollContainer>
        <L.Title>{patternData.nickname}님의 교육여행패턴은?</L.Title>
        <L.CharacterImage src={patternData.character} alt='Character' />
        <L.PatternText>{patternData.pattern}</L.PatternText>
        <L.Description>{patternData.description}</L.Description>
        <L.MoreButton onClick={() => navigate('/pattern-details')}>
          교육패턴 더 알아보기
        </L.MoreButton>
      </L.ScrollContainer>
    </L.Container>
  )
}

export default Pattern
