import BackButton from './BackButton/BackButton'
import * as L from './styles/ChangePassword.style'

const ChangePassword = () => {
  return (
    <>
      <L.Container>
        <L.HeaderContainer>
          <BackButton />
          <L.HeaderText>비밀번호 변경</L.HeaderText>
        </L.HeaderContainer>
      </L.Container>
    </>
  )
}

export default ChangePassword
