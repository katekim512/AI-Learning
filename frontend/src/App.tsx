import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import BottomMenuBar from './components/BottomMenuBar/BottomMenuBar'
import Loading from './components/Loading/Loading'
import { useAllPlace } from './hooks/useAllPlace'
import GlobalStyle from './style/GlobalStyle'
import { MobileContainer } from './style/MobileStyle'
import setScreenHeight from './utils/mobileScreenSize/setScreenHeight'

const App = () => {
  const location = useLocation()
  const { isLoading, error } = useAllPlace()

  useEffect(() => {
    setScreenHeight()
    window.addEventListener('resize', setScreenHeight)
    return () => window.removeEventListener('resize', setScreenHeight)
  }, [])

  if (isLoading) return <Loading />
  if (error) return <div>Error fetching places</div>

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
