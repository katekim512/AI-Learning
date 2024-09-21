import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import BackButton from './BackButton/BackButton'
import * as L from './styles/ChangePassword.style'
import { postNewPassword } from '../../api/profile/postNewPassword'
import authToken from '../../stores/authToken'

const ChangePassword = () => {
  const token = authToken.getAccessToken()
  const navigate = useNavigate()
  const [password, setPassword] = useState<string>('')
  const [checkedPassword, setCheckedPassword] = useState<string>('')

  // 오류 메세지
  const [validMessage, setValidMessage] = useState({
    passwordMessage: '',
    checkedPasswordMessage: '',
  })

  // 유효성 검사
  const [isValid, setIsValid] = useState({
    password: false,
    checkedPassword: false,
  })

  // 비밀번호 유효성 검사
  useEffect(() => {
    const regex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,15}$/

    if (!regex.test(password)) {
      setValidMessage(prev => ({
        ...prev,
        passwordMessage:
          '숫자, 영문, 특수문자를 포함하여 최소 8자를 입력해주세요',
      }))
      setIsValid({ ...isValid, password: false })
    } else {
      setValidMessage(prev => ({
        ...prev,
        passwordMessage: '',
      }))
      setIsValid({ ...isValid, password: true })
    }
  }, [password])

  // 비밀번호 확인
  useEffect(() => {
    if (password !== checkedPassword) {
      setValidMessage(prev => ({
        ...prev,
        checkedPasswordMessage: '비밀번호가 일치하지 않습니다.',
      }))
      setIsValid({ ...isValid, checkedPassword: false })
    } else {
      setValidMessage(prev => ({
        ...prev,
        checkedPasswordMessage: '',
      }))
      setIsValid({ ...isValid, checkedPassword: true })
    }
  }, [password, checkedPassword])

  const handleComplete = async () => {
    if (password.trim() === '') {
      alert('새로운 비밀번호를 입력하세요')
      return
    }

    if (
      validMessage.passwordMessage ===
      '숫자, 영문, 특수문자를 포함하여 최소 8자를 입력해주세요'
    ) {
      alert('비밀번호 조건이 올바르지 않습니다')
      return
    }

    if (
      validMessage.checkedPasswordMessage === '비밀번호가 일치하지 않습니다.'
    ) {
      alert('비밀번호가 일치하지 않습니다')
      return
    }

    const response = await postNewPassword(token, password)
    if (response?.data) {
      navigate('/my-info')
    }
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleCheckedPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCheckedPassword(e.target.value)
  }

  return (
    <>
      <L.Container>
        <L.HeaderContainer>
          <BackButton />
          <L.HeaderText>비밀번호 변경</L.HeaderText>
        </L.HeaderContainer>
        <L.InputWrapper>
          <L.Label>새로운 비밀번호 설정</L.Label>
          <L.Input
            type='password'
            name='password'
            id='password'
            value={password}
            onChange={handlePasswordChange}
            placeholder='영문자, 숫자, 특수문자 포함 8~20자리'
            required
          />
          <L.ValidationMessage error={!isValid.password}>
            {validMessage.passwordMessage}
          </L.ValidationMessage>
          <L.Input
            type='password'
            name='checkedPassword'
            id='checkedPassword'
            placeholder='비밀번호 확인'
            value={checkedPassword}
            onChange={handleCheckedPasswordChange}
            required
          />
          <L.ValidationMessage error={!isValid.checkedPassword}>
            {validMessage.checkedPasswordMessage}
          </L.ValidationMessage>
        </L.InputWrapper>
        <L.BottomButton onClick={handleComplete}>완료</L.BottomButton>
      </L.Container>
    </>
  )
}

export default ChangePassword
