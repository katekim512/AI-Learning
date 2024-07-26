import styled from 'styled-components'

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`

export const HeaderTitle = styled.h1`
  font-weight: 600;
`

export const CalendarSelect = styled.select`
  border: none;
  font-weight: 800;
  font-size: 0.9rem;
`

export const AIScheduleButton = styled.button`
  height: 1.7rem;
  padding: 0 1rem;
  border: none;
  border-radius: 1rem;
  background-color: #3a3a3a;
  color: white;
  font-size: 0.7rem;
  margin-left: auto;

  &:hover {
    background-color: black;
  }
`

export const CalendarSection = styled.div`
  align-items: center;
  height: calc(100vh - 8rem);
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

export const DaySection = styled.div<{ height: number }>`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  border-top: 1px solid #f1f1f1;
  height: ${({ height }) => height}px;
`

export const Day = styled.div`
  font-size: 0.8rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0.5rem;
  width: 100%;
  height: 100%;
`
