import { useNavigate } from 'react-router-dom'

import * as L from '../styles/Login.style'

const CreateAccount = () => {
  const navigate = useNavigate()

  const handleRegister = () => {
    navigate('/register')
  }

  return (
    <L.CreateAccountSection>
      <L.BottomButton>비밀번호 재설정 {'>'}</L.BottomButton>
      <L.DivideLine>|</L.DivideLine>
      <L.BottomButton onClick={handleRegister}>
        이메일로 회원가입 {'>'}
      </L.BottomButton>
    </L.CreateAccountSection>
  )
}

export default CreateAccount
