import React, { useEffect, useState } from 'react'

import { fetchPlacePlan } from './ChatGPT'
import { useUser } from '../../../../hooks/useUser'
import * as L from '../../styles/PlaceDetail.style'

interface Props {
  title: string
  overview: string
}

const StudyPlan: React.FC<Props> = ({ title, overview }) => {
  const { data: userInfo } = useUser()
  const [plan, setPlan] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const calculateAge = (birth: number) => {
    const currentYear = new Date().getFullYear()
    return currentYear - birth // 나이 계산
  }

  useEffect(() => {
    const getPlan = async () => {
      if (userInfo?.birth) {
        setLoading(true)
        const age = calculateAge(userInfo.birth)
        try {
          const placePlan = await fetchPlacePlan(title, overview, age)
          setPlan(placePlan)
        } catch (error) {
          console.error('Failed to fetch learning plan:', error)
        } finally {
          setLoading(false)
        }
      }
    }

    getPlan()
  }, [title, userInfo?.birth])

  return (
    <>
      <L.OverviewTitle>교외체험학습계획</L.OverviewTitle>
      {loading ? (
        <L.OverviewText>로딩 중...</L.OverviewText>
      ) : (
        <L.OverviewText>{plan || '계획이 없습니다.'}</L.OverviewText>
      )}
    </>
  )
}

export default StudyPlan
