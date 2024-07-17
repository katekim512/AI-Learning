import styled from 'styled-components'

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  justify-content: center;
  align-items: stretch;
  padding: 2rem;
`

export const ImgContainer = styled.img`
  height: 7rem;
  object-fit: contain;
  margin-top: 5rem;
  margin-bottom: 3rem;
`

export const Form = styled.form`
  width: 100%;
  max-width: 400px;
`

export const Input = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 0.7rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  box-sizing: border-box;
`

export const Button = styled.button`
  width: 100%;
  max-width: 400px;
  height: 46px;
  border-radius: 8px;
  border: none;
  font-size: 18px;
  position: relative;
`

export const LoginButton = styled(Button)`
  background-color: #525fd4;
  color: white;
  margin-top: 4rem;
  &:hover {
    background-color: #434cb1;
  }
`

export const KaKaoButton = styled(Button)`
  background-color: #fee500;
  color: black;
  &:hover {
    background-color: #ffeb3b;
  }
`
