import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: white;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #e0e0e0;
  height: 60px;
`

export const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin: 0 auto;
`

export const BoldText = styled.span`
  font-weight: bold;
`
export const AlertList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

export const AlertItem = styled.li`
  display: flex;
  align-items: center;
  padding: 25px 30px;
  border-bottom: 1px solid #e0e0e0;
`
export const WeatherIcon = styled.div`
  font-size: 24px;
  margin-right: 20px;
`

export const AlertContent = styled.div`
  flex-grow: 1;
  flex-direction: column;
  justify-content: center; // 세로 중앙 정렬
`

export const AlertText = styled.p`
  margin: 0;
  font-size: 14px;
  margin: 5px 0px;
`

export const ArrowIcon = styled.div`
  font-size: 20px;
`
