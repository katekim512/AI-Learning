import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import BottomMenuBar from './components/BottomMenuBar/BottomMenuBar'
import GlobalStyle from './style/GlobalStyle'
import { MobileContainer } from './style/MobileStyle'
import setScreenHeight from './utils/mobileScreenSize/setScreenHeight'

// 모바일 기기 여부 확인
const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  )
}

const App = () => {
  const location = useLocation()

  useEffect(() => {
    const handleOrientationChange = () => {
      // 모바일 기기에서만 적용
      if (isMobileDevice()) {
        if (window.innerHeight > window.innerWidth) {
          document.body.style.transform = 'rotate(0deg)'
        } else {
          document.body.style.transform = 'rotate(-90deg)'
        }
      } else {
        // 웹 환경에서는 스타일을 초기화
        document.body.style.transform = 'none'
      }
    }

    window.addEventListener('resize', handleOrientationChange)
    handleOrientationChange()

    return () => {
      window.removeEventListener('resize', handleOrientationChange)
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
