import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import GlobalStyle from './style/GlobalStyle'
import { MobileContainer } from './style/MobileStyle'
import setScreenHeight from './utils/mobileScreenSize/setScreenHeight'

const App = () => {
  useEffect(() => {
    setScreenHeight()
    window.addEventListener('resize', setScreenHeight)
    return () => window.removeEventListener('resize', setScreenHeight)
  }, [])

  return (
    <>
      <GlobalStyle />
      <MobileContainer>
        <Outlet />
      </MobileContainer>
    </>
  )
}

export default App
