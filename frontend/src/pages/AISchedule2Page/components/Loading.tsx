import React from 'react'

import {
  LoadingContainer,
  LoadingText,
  DotsWrapper,
  Dot,
} from '../styles/Loading.style'

const Loading: React.FC = () => {
  return (
    <LoadingContainer>
      <LoadingText>잠시만 기다려주세요</LoadingText>
      <DotsWrapper>
        <Dot delay='0s' />
        <Dot delay='0.4s' />
        <Dot delay='0.8s' />
      </DotsWrapper>
    </LoadingContainer>
  )
}

export default Loading
