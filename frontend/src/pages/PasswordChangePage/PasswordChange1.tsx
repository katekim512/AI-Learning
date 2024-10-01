import PasswordChangeForm from './components/PasswordChangeForm'
import XButton from './components/XButton'
import * as L from './styles/PasswordChange.style'

const PasswordChange1 = () => {
  //const location = useLocation()
  //const { accessToken } = location.state || {} // accessToken 가져오기

  return (
    <L.Container>
      <XButton />
      <L.Title>비밀번호 재설정</L.Title>
      <PasswordChangeForm />
    </L.Container>
  )
}

export default PasswordChange1
