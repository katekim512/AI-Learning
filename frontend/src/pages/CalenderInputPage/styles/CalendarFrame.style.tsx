import styled from 'styled-components'

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Distribute space between items */
  padding: 2rem;
  //position: fixed; /* 추가된 부분 */
  top: 0; /* 추가된 부분 */
  left: 0; /* 추가된 부분 */
  right: 0; /* 추가된 부분 */
  background: white; /* 추가된 부분 */
  z-index: 1000; /* 추가된 부분 */
  border-bottom: 1.5px solid #f1f1f1;
`

export const HeaderTitle = styled.h1`
  font-weight: 600;
  font-size: 20px;
  flex-grow: 1;
  text-align: center; /* Censter text */
  margin-left: -1.5rem; /* Adjust to align with the center */
`

export const MonthTitle = styled.h1`
  font-weight: 600;
  font-size: 15px;
  flex-grow: 1;
  text-align: center; /* Censter text */
  margin-bottom: 25px;
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`

export const CalendarSelect = styled.select`
  border: none;
  font-weight: 800;
  font-size: 0.9rem;
`

export const CalendarWrapper = styled.div`
  flex-grow: 1;
  height: calc(100vh - 11rem); /* BackButton 높이만큼 빼기 */
  overflow-y: auto; /* 스크롤 가능하도록 설정 */
  padding-top: 6rem; /* 추가된 부분: 헤더 높이만큼 패딩 추가 */
  padding-bottom: 4rem; /* 추가된 부분: 버튼 높이만큼 패딩 추가 */
`

export const ScrollableCalendarSection = styled.div`
  align-items: center;
  padding: 1rem; /* 추가된 부분: 상하 여백 */
`

export const WeekSection = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 0.5rem;
  margin-bottom: 0.3rem;
  padding-bottom: 0.5rem;
`

export const HeaderText = styled.p`
  font-weight: 300;
  font-size: 0.8rem;
`

export const DaySection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center; /* Center align items vertically */
  height: 40px;
`

export const Day = styled.div`
  font-size: 0.8rem;
  display: flex;
  align-items: center; /* Center align text vertically */
  justify-content: center; /* Center align text horizontally */
  padding: 0.5rem;
  width: 100%;
  height: 100%;
`

export const BottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* Distribute space between items */
  padding: 1.5rem;
  //position: fixed; /* 추가된 부분 */
  bottom: 0; /* 추가된 부분 */
  left: 0; /* 추가된 부분 */
  right: 0; /* 추가된 부분 */
  background: white; /* 추가된 부분 */
  z-index: 1000; /* 추가된 부분 */
  border-top: 1.5px solid #f1f1f1;
`

export const FixedBottomButton = styled.div`
  display: flex; /* 추가된 부분 */
  justify-content: center; /* 추가된 부분 */
  align-items: center; /* 추가된 부분 */
  width: 100%;
  max-width: 400px;
  height: 46px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  color: white;
  font-weight: 600;
  background-color: #525fd4;
  cursor: pointer;
  position: relative;
`
