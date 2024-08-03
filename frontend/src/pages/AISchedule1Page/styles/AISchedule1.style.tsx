// src/AISchedule1Page/AISchedule1.style.tsx
import styled from 'styled-components'

export const Button = styled.button`
  background-color: #f0f0f0;
  border: none;
  padding: 9px 20px;
  margin: 5px;
  border-radius: 20px;
  cursor: pointer;

  &.selected {
    background-color: #525fd4;
    color: white;
  }
`
export const DateInputContainer = styled.div`
  display: flex;
  align-items: center; /* 수직 중앙 정렬 */
  justify-content: center; /* 수평 중앙 정렬 */
  padding: 7px;
`
export const DateInput = styled.input.attrs({ type: 'date' })`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 6px;
  font-size: 14px;
  background-color: #fafafa;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(38, 143, 255, 0.25);
    outline: none;
  }

  &::-webkit-calendar-picker-indicator {
    display: none; /* 기본 달력 아이콘 숨기기 */
  }
`

export const Separator = styled.span`
  font-size: 1.2rem;
  color: #333;
  margin-right: 10px;
  margin-left: 10px;
`

export const Section = styled.div`
  margin: 10px 0;
`

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 1.1rem;
  font-weight: 700;
`

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: calc(100vh - 5rem); /* BackButton 높이만큼 빼기 */
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 2rem;
  padding-top: 6rem; /* BackButton 높이만큼 추가 */
  overflow-y: auto;
`

export const Title = styled.div`
  line-height: 2rem;
  margin-bottom: 1rem;
`

export const Text = styled.p`
  font-size: 1.3rem;
  font-weight: 700;
`

export const Highlighted = styled.span`
  background-color: rgb(82, 95, 212, 0.3);
`

export const BottomButton = styled.button`
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 3rem);
  max-width: 352px;
  height: 46px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  color: white;
  font-weight: 600;
  background-color: #525fd4;
  cursor: pointer;
  box-sizing: border-box;
  &:hover {
    background-color: #434cb1;
  }
`
