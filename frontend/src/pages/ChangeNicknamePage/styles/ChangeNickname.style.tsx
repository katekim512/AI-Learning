import { styled } from 'styled-components'

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
`

export const HeaderContainer = styled.div`
  background-color: #efefef;
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
`

export const HeaderText = styled.p`
  font-weight: 700;
  font-size: 1.2rem;
  text-align: center;
`
