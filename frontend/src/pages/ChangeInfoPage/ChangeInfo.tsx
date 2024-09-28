import { useState } from 'react'
import { useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'

import BackButton from './BackButton/BackButton'
import * as L from './styles/ChangeInfo.style'
import { postUserUpdate } from '../../api/profile/postUserUpdate'
import { useUser } from '../../hooks/useUser'
import authToken from '../../stores/authToken'

const ChangeInfo = () => {
  const token = authToken.getAccessToken()
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { data: userInfo, refetch } = useUser()

  const [year, setYear] = useState<number>(0)
  const currentYear = new Date().getFullYear()
  const startYear = currentYear - 30
  const years = Array.from(
    { length: currentYear - startYear + 1 },
    (_, i) => currentYear - i,
  )

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target
    setYear(Number(value))
  }

  const handleComplete = async () => {
    if (year === userInfo?.birth) {
      alert('기존 정보와 일치합니다')
      return
    }

    if (userInfo) {
      const response = await postUserUpdate(
        token,
        userInfo.nickname,
        year,
        userInfo.city,
      )
      if (response?.data) {
        await refetch()
        queryClient.invalidateQueries('user')

        navigate('/my-info')
      }
    }
  }

  return (
    <>
      <L.Container>
        <L.HeaderContainer>
          <BackButton />
          <L.HeaderText>회원정보 변경</L.HeaderText>
        </L.HeaderContainer>
        <L.InputWrapper>
          <L.Label>자녀 출생연도</L.Label>
          <L.Select
            name='year'
            id='year'
            value={userInfo?.birth}
            onChange={handleSelectChange}
            required
          >
            <option value='' disabled>
              출생연도
            </option>
            {years.map(year => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </L.Select>
          <L.Label>사는 곳</L.Label>
          <L.Select
            name='year'
            id='year'
            value={userInfo?.birth}
            onChange={handleSelectChange}
            required
          >
            <option value='' disabled>
              출생연도
            </option>
            {years.map(year => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </L.Select>
        </L.InputWrapper>
        <L.BottomButton onClick={handleComplete}>완료</L.BottomButton>
      </L.Container>
    </>
  )
}

export default ChangeInfo
