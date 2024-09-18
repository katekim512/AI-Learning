import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import BottomMenuBar from './components/BottomMenuBar/BottomMenuBar'
import Loading from './components/Loading/Loading'
import { useAllPlace } from './hooks/useAllPlace'
import authToken from './stores/authToken'
import GlobalStyle from './style/GlobalStyle'
import { MobileContainer } from './style/MobileStyle'
import setScreenHeight from './utils/mobileScreenSize/setScreenHeight'

const App = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const token = authToken.getAccessToken()

  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  }, [token, navigate])

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isLoading } = token ? useAllPlace() : { isLoading: false }

  useEffect(() => {
    setScreenHeight()
    window.addEventListener('resize', setScreenHeight)
    return () => window.removeEventListener('resize', setScreenHeight)
  }, [])

  if (isLoading) return <Loading />

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
