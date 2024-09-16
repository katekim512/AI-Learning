import styled from 'styled-components'

export const DrawerContainer = styled.div<{ isOpen: boolean }>`
  width: 100%;
  max-width: 400px;
  height: calc(100vh - 5rem);
  background-color: #eff1ff;
  position: fixed;
  bottom: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  transition: transform 0.4s ease-in-out;
  transform: translateY(${props => (props.isOpen ? '0' : '100%')});
  z-index: 1000;
  will-change: transform;
`
