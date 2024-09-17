import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import BottomMenuBar from './components/BottomMenuBar/BottomMenuBar'
import GlobalStyle from './style/GlobalStyle'
import { MobileContainer } from './style/MobileStyle'
import setScreenHeight from './utils/mobileScreenSize/setScreenHeight'

const App = () => {
  const location = useLocation()

  useEffect(() => {
    const lockScreenOrientation = async () => {
      if (screen.orientation && screen.orientation.lock) {
        try {
          await screen.orientation.lock('portrait') // 'portrait'를 세로 모드로 고정
        } catch (error) {
          console.error('Orientation lock failed:', error)
        }
      }
    }

    lockScreenOrientation()

    return () => {
      // 필요할 경우 해제
      if (screen.orientation && screen.orientation.unlock) {
        screen.orientation.unlock()
      }
    }
  }, [])

  useEffect(() => {
    setScreenHeight()
    window.addEventListener('resize', setScreenHeight)
    return () => window.removeEventListener('resize', setScreenHeight)
  }, [])

  const showBottomMenuBar = [
    '/calendar',
    '/profile',
    '/recommend-place',
    '/ranking-place',
  ].includes(location.pathname)

  return (
    <>
      <GlobalStyle />
      <MobileContainer>
        <Outlet />
        {showBottomMenuBar && <BottomMenuBar />}
      </MobileContainer>
    </>
  )
}

export default App
