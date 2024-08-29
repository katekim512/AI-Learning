import { styled } from 'styled-components'

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: calc(100vh - 5rem); /* BackButton 높이만큼 빼기 */
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 2rem;
  padding-top: 6rem; /* BackButton 높이만큼 추가 */
`

export const Title = styled.div`
  line-height: 2rem;
  margin-bottom: 2rem;
`

export const Text = styled.p`
  font-size: 1.3rem;
  font-weight: 700;
`
