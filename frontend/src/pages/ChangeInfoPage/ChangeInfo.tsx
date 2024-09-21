import BackButton from './BackButton/BackButton'
import * as L from './styles/ChangeInfo.style'

const ChangeInfo = () => {
  return (
    <>
      <L.Container>
        <L.HeaderContainer>
          <BackButton />
          <L.HeaderText>회원정보 변경</L.HeaderText>
        </L.HeaderContainer>
      </L.Container>
    </>
  )
}

export default ChangeInfo
