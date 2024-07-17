import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

import GlobalStyle from './style/GlobalStyle'
import setScreenHeight from './utils/mobileScreenSize/setScreenHeight'

const CenteredContainer = styled.div`
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
      </CenteredContainer>
    </>
  )
}

export default App
