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

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  padding: 1.5rem;
`

export const Label = styled.p`
  margin-bottom: 0.7rem;
  margin-left: 0.25rem;
  font-size: 0.875rem;
`

export const Select = styled.select`
  width: 40%;
  max-width: 440px;
  padding: 0.7rem;
  background-color: #f9fafb;
  border: 1px solid #d1d5db;
  color: #1a202c;
  border-radius: 0.375rem;
  margin-right: 0.5rem;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  box-sizing: border-box;

  &:focus {
    outline: 1px solid #2563eb;
    border-color: #525fd4;
  }
`

export const BottomButton = styled.button`
  position: absolute;
  align-items: center;
  margin-top: 0px;
  padding-top: 0px;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 3rem);
  max-width: 440px;
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
