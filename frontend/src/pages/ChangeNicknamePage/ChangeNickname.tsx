import { useState } from 'react'
import { useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'

import BackButton from './BackButton/BackButton'
import * as L from './styles/ChangeNickname.style'
import { checkNickname } from '../../api/auth/postCheckNickname'
import { postUserUpdate } from '../../api/profile/postUserUpdate'
import { useUser } from '../../hooks/useUser'
import authToken from '../../stores/authToken'

const ChangeNickname = () => {
  const token = authToken.getAccessToken()
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { data: userInfo, refetch } = useUser()
  const [nickname, setNickname] = useState<string>('')

  // 오류 메시지 및 유효성 상태 통합 관리
  const [nicknameState, setNicknameState] = useState({
    message: '',
    isValid: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value)
  }

  const handleCheckNickname = async () => {
    const nicknameResult = await checkNickname(nickname)

    if (nicknameResult?.data.isExist) {
      setNicknameState({
        message: '중복된 닉네임입니다.',
        isValid: false,
      })
    } else if (nicknameResult?.data.isExist === false) {
      setNicknameState({
        message: '사용 가능한 닉네임입니다.',
        isValid: true,
      })
    } else {
      setNicknameState({
        message: '잠시 후 다시 시도해주세요.',
        isValid: false,
      })
    }
  }

  const handleComplete = async () => {
    if (nickname.trim() === '') {
      alert('변경할 닉네임을 입력하세요')
      return
    }

    if (nicknameState.isValid) {
      if (userInfo) {
        const response = await postUserUpdate(
          token,
          nickname,
          userInfo?.birth,
          userInfo?.city,
        )
        if (response?.data) {
          await refetch()
          queryClient.invalidateQueries('user')

          navigate('/my-info')
        }
      }
    } else {
      alert('닉네임 변경이 불가능합니다')
    }
  }

  return (
    <>
      <L.Container>
        <L.HeaderContainer>
          <BackButton />
          <L.HeaderText>닉네임 변경</L.HeaderText>
        </L.HeaderContainer>
        <L.InputWrapper>
          <L.Input
            type='text'
            name='nickname'
            id='nickname'
            value={nickname}
            onChange={handleChange}
            maxLength={10}
            placeholder='새로운 닉네임 입력'
            required
          />
          <L.Button type='button' onClick={handleCheckNickname}>
            중복확인
          </L.Button>
          <L.ValidationMessage error={!nicknameState.isValid}>
            {nicknameState.message}
          </L.ValidationMessage>
        </L.InputWrapper>
        <L.BottomButton onClick={handleComplete}>완료</L.BottomButton>
      </L.Container>
    </>
  )
}

export default ChangeNickname
