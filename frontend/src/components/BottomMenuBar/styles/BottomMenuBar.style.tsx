// BottomMenuBar.style.tsx
import styled from 'styled-components'

export const MenuBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 400px;
  height: 4rem;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
`

export const MenuIcon = styled.img<{ icon: string }>`
  width: 2rem;
  height: 2rem;
`
