import BackButton from './BackButton/BackButton'
import * as L from './styles/ChangeNickname.style'

const ChangeNickname = () => {
  return (
    <>
      <L.Container>
        <L.HeaderContainer>
          <BackButton />
          <L.HeaderText>닉네임 변경</L.HeaderText>
        </L.HeaderContainer>
      </L.Container>
    </>
  )
}

export default ChangeNickname
