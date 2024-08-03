import styled from 'styled-components'

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  z-index: 1000;
  border-bottom: 1.5px solid #f1f1f1;
`

export const HeaderTitle = styled.h1`
  font-weight: 600;
  font-size: 20px;
  flex-grow: 1;
  text-align: center;
  margin-left: -1.5rem;
`

export const MonthTitle = styled.h1`
  font-weight: 600;
  font-size: 15px;
  flex-grow: 1;
  text-align: center;
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
  height: calc(100vh - 11rem);
  overflow-y: auto;
  padding-top: 6rem;
  padding-bottom: 4rem;
`

export const ScrollableCalendarSection = styled.div`
  align-items: center;
  padding: 1rem;
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

// export const DaySection = styled.div`
//   display: grid;
//   grid-template-columns: repeat(7, 1fr);
//   gap: 1rem;
//   justify-items: center;
//   margin-top: 0.5rem;
// `

// export const CalendarButton = styled.button<{
//   isSunday?: boolean
//   isSaturday?: boolean
//   isSelectedDay?: boolean
// }>`
//   font-size: 0.8rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 0.5rem;
//   width: 100%;
//   height: 40px;
//   border: none;
//   border-radius: 50%;
//   background-color: ${({ isSelectedDay }) =>
//     isSelectedDay ? '#525FD4' : 'transparent'};
//   color: ${({ isSelectedDay, isSunday, isSaturday }) =>
//     isSelectedDay
//       ? 'white'
//       : isSunday
//         ? '#D63535'
//         : isSaturday
//           ? '#525FD4'
//           : 'black'};
//   clip-path: ${({ isSelectedDay }) => (isSelectedDay ? 'circle(40%)' : 'none')};
//   cursor: pointer;
//   margin: 5px;
// `
export const DaySection = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  gap: 0; /* 그리드 간격 제거 */
  margin-top: 0.5rem;
`

export const CalendarButton = styled.button<{
  isSunday?: boolean
  isSaturday?: boolean
  isSelectedDay?: boolean
}>`
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%; /* 부모 그리드 셀의 크기에 맞춤 */
  height: 40px; /* 고정 높이 */
  border: none;
  border-radius: 50%;
  background-color: ${({ isSelectedDay }) =>
    isSelectedDay ? '#525FD4' : 'transparent'};
  color: ${({ isSelectedDay, isSunday, isSaturday }) =>
    isSelectedDay
      ? 'white'
      : isSunday
        ? '#D63535'
        : isSaturday
          ? '#525FD4'
          : 'black'};
  clip-path: ${({ isSelectedDay }) => (isSelectedDay ? 'circle(40%)' : 'none')};
  cursor: pointer;
  margin: 0; /* 버튼 간격 제거 */
  box-sizing: border-box; /* 박스 크기 계산 방식 설정 */
`

export const BottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  z-index: 1000;
  border-top: 1.5px solid #f1f1f1;
`

export const FixedBottomButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
