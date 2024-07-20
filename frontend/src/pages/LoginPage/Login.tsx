import { useEffect } from 'react'

import LoginForm from './components/LoginForm'
import SocialLogin from './components/SocialLogin'
import * as L from './styles/Login.style'
import { useMenuStore } from '../../stores/useBottomMenuStore'

const Login = () => {
  const currentMenu = useMenuStore(state => state.currentMenu)

  useEffect(() => {
    console.log('현재 메뉴:', currentMenu)
  }, [])

  return (
    <L.Container>
      <L.ImgContainer src="/img/logo_purple.png" alt="logo" />
      <LoginForm />
      <SocialLogin />
      {/* <CreateAccount /> */}
    </L.Container>
  )
}

export default Login
