import styled from 'styled-components'

export const StyledButton = styled.button`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
`

export const StyledIcon = styled.div`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  margin-top: 0.3rem;
  align-items: center;
  transform: rotate(180deg);
  transition: transform 0.3s ease;
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
