// import styled from 'styled-components'

// export const Container = styled.button`
//   position: fixed;
//   width: 100%;
//   height: 3rem;
//   background: white;
//   border: none;
//   justify-content: flex-start;
//   align-items: center; /* 필요에 따라 추가 */
// `

// export const StyledButton = styled.button`
//   position: flex;
//   width: 4rem;
//   height: 3rem;
//   background: transparent;
//   border: none;
// `

// export const StyledIcon = styled.div`
//   font-size: 2rem;
//   margin-left: 1rem;
//   margin-top: 2rem;
//   transform: rotate(-90deg);
// `

import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 4rem;
  background: white;
  border: none;
  display: flex;
  justify-content: flex-start;
  align-items: center; /* 필요에 따라 추가 */
`

export const StyledButton = styled.button`
  width: 4rem;
  height: 3rem;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledIcon = styled.div`
  font-size: 2rem;
  margin-left: 1rem;
  margin-top: 1rem;
  transform: rotate(-90deg);
`
