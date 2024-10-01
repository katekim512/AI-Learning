import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import BottomMenuBar from './components/BottomMenuBar/BottomMenuBar'
import GlobalStyle from './style/GlobalStyle'
import { MobileContainer } from './style/MobileStyle'
//import setScreenHeight from './utils/mobileScreenSize/setScreenHeight'

const App: React.FC = () => {
  const location = useLocation()

  useEffect(() => {
    // viewport 메타 태그 추가
    const meta = document.createElement('meta')
    meta.name = 'viewport'
    meta.content = 'width=device-width, initial-scale=1, viewport-fit=cover'
    document.getElementsByTagName('head')[0].appendChild(meta)

    const setVh = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    setVh()
    window.addEventListener('resize', setVh)

    return () => window.removeEventListener('resize', setVh)
  }, [])

  const showBottomMenuBar = [
    '/calendar',
    '/profile',
    '/guide',
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
