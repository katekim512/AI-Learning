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

export const MenuIcon = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ isActive }) =>
    isActive ? '#525FD4' : '#333'}; // Active color vs Inactive color

  span {
    margin-top: 4px;
    font-size: 12px;
  }

  .active {
    color: #007bff; // Define the active icon color
  }
`

// interface MenuIconProps {
//   src: string // SVG URL
//   alt: string
// }
// export const MenuIcon = styled.img<MenuIconProps>`
//   width: 2rem;
//   height: 2rem;
// `
