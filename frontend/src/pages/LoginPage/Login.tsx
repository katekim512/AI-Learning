import React, { useEffect } from 'react'

import CreateAccount from './components/CreateAccount'
import LoginForm from './components/LoginForm'
import * as L from './styles/Login.style'
import { getAllPlace } from '../../api/calendar/getAllPlace'
import Loading from '../../components/Loading/Loading'
import { useAllPlace } from '../../hooks/useAllPlace'

const Login = () => {
  const { isLoading, data } = useAllPlace()

  useEffect(() => {
    if (data) {
      console.log('Fetched places:', data)
    }
  }, [data])

  const handleGetAllPlace = async () => {
    const response = await getAllPlace()
    if (response) {
      console.log(response.data)
    }
  }

  return (
    <>
      {isLoading && <Loading />}
      <L.Container>
        <L.ImgContainer
          src='/img/logo_purple.png'
          alt='logo'
          onClick={handleGetAllPlace}
        />
        <LoginForm />
        <CreateAccount />
      </L.Container>
    </>
  )
}

export default Login
