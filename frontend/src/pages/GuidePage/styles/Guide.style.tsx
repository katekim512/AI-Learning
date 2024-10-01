import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: black;
  line-height: 1.6rem;
  padding-top: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 1rem;
  text-align: left;
  font-size: 18px;
`

export const Nickname = styled.span`
  color: #525fd4;
`

export const TabMenu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const Tab = styled.div<{ active: boolean }>`
  width: 50%;
  text-align: center;
  padding: 10px 0;
  cursor: pointer;
  border-bottom: ${props => (props.active ? '2px solid #525fd4' : 'none')};
  color: ${props => (props.active ? '#525fd4' : '#000')};
`
