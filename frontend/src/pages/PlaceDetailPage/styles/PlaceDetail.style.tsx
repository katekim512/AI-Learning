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

export const MapIconContainer = styled.div`
  position: fixed;
  width: 100%;
  max-width: 400px;
  padding-right: 1.3rem;
  height: 5rem;
  border: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const Title = styled.div`
  line-height: 1rem;
  margin-bottom: 0.5rem;
`

export const Text = styled.p`
  font-size: 1.3rem;
  font-weight: 700;
`

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`

export const PlaceImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`
