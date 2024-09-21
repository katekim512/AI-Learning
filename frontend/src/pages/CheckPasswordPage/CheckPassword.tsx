import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import BackButton from './BackButton/BackButton'
import * as L from './styles/CheckPassword.style'
import { postCheckPassword } from '../../api/profile/postCheckPassword'
import authToken from '../../stores/authToken'

const CheckPassword = () => {
  const token = authToken.getAccessToken()
  const navigate = useNavigate()
  const [password, setPassword] = useState<string>('')

  const handleComplete = async () => {
    if (password.trim() === '') {
      alert('비밀번호를 입력하세요')
      return
    }

    try {
      const response = await postCheckPassword(token, password)
      if (response?.data.isCorrect) {
        navigate('/change-password')
      } else {
        alert('비밀번호가 틀렸습니다.')
      }
    } catch (error) {
      console.error('비밀번호 확인 중 오류 발생:', error)
      alert('비밀번호 확인에 실패했습니다.')
    }
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  return (
    <>
      <L.Container>
        <L.HeaderContainer>
          <BackButton />
          <L.HeaderText>비밀번호 확인</L.HeaderText>
        </L.HeaderContainer>
        <L.InputWrapper>
          <L.Input
            type='password'
            name='password'
            id='password'
            value={password}
            onChange={handlePasswordChange}
            placeholder='비밀번호 확인'
            required
          />
        </L.InputWrapper>
        <L.BottomButton onClick={handleComplete}>완료</L.BottomButton>
      </L.Container>
    </>
  )
}

export default CheckPassword
