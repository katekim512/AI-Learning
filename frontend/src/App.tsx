import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

import BottomNav from './components/BottomMenuBar/BottomMenuBar'
import GlobalStyle from './style/GlobalStyle'
import setScreenHeight from './utils/mobileScreenSize/setScreenHeight'

const CenteredContainer = styled.div`
  max-width: 400px; // 개발용 화면 디자인 확인
  width: 100vw;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: 100vh;
`

const App = () => {
  useEffect(() => {
    setScreenHeight()
    window.addEventListener('resize', setScreenHeight)
    return () => window.removeEventListener('resize', setScreenHeight)
  }, [])

  return (
    <>
      <GlobalStyle />
      <CenteredContainer>
        <Outlet />
        <BottomNav />
      </CenteredContainer>
    </>
  )
}

export default App
