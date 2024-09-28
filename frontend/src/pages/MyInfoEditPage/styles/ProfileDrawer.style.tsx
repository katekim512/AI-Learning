import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 다크 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`

export const DrawerContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: 7rem;
  background-color: white;
  position: fixed;
  bottom: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  transition: height 0.3s ease;
`

export const DrawerHeader = styled.div`
  margin: 0.5rem 0.5rem 0 0.5rem;
  display: flex;
  padding: 1rem 1rem 0 1rem;
  justify-content: space-between;
`

export const DrawerHeaderText = styled.p`
  font-weight: 600;
`

export const DrawerBottom = styled.div`
  width: 100%;
  max-width: 400px;
  justify-content: start;
`

export const DrawerBottomBox = styled.div`
  display: flex;
  padding: 1.5rem 1.5rem 1rem 1.5rem;
  color: #5b5b5b;
  font-size: 0.9rem;
`
