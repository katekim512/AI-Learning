import React, { useEffect } from 'react'

import StartLoginForm from './components/StartLoginForm'
import * as L from './styles/Start.style'

const Start = () => {
  let vh = 0

  useEffect(() => {
    vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    const setVh = () => {
      document.documentElement.style.setProperty(
        '--vh',
        `${window.innerHeight * 0.01}px`,
      )
    }

    window.addEventListener('resize', setVh)
    setVh()

    return () => window.removeEventListener('resize', setVh)
  }, [])

  return (
    <>
      <L.Container>
        <L.HeaderText>
          세상에 단 하나뿐인<br></br>맞춤 교육여행 플랜을 제공합니다
        </L.HeaderText>
        <L.ImgContainer src='/img/logo_s.png' alt='logo' />
        <L.BottomText>
          내 <L.HighlightPink>아이</L.HighlightPink>에게 필요한{' '}
          <L.HighlightPink>Learning</L.HighlightPink>
          <br></br>
          <L.HighlightPink>아이러닝</L.HighlightPink> 지금 바로 시작하세요!
        </L.BottomText>
        <StartLoginForm />
      </L.Container>
    </>
  )
}

export default Start
