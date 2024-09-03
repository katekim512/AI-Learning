import styled, { keyframes } from 'styled-components'

const blink = keyframes`
  0%, 80%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
`

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fff;
`

export const LoadingText = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: 600;
`

export const DotsWrapper = styled.div`
  display: flex;
  gap: 8px;
`

export const Dot = styled.div<{ delay: string }>`
  width: 8px;
  height: 8px;
  background-color: #525fd4;
  border-radius: 50%;
  animation: ${blink} 1.4s infinite both;
  animation-delay: ${props => props.delay};
`
