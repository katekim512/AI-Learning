import { styled } from 'styled-components'

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: calc(100vh - 5rem); /* BackButton 높이만큼 빼기 */
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 2rem;
  padding-top: 5.5rem; /* BackButton 높이만큼 추가 */
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
  display: flex;
  line-height: 1rem;
`

export const Text = styled.p`
  font-size: 1.3rem;
  font-weight: 700;
`

export const SecondLineContainer = styled.div`
  justify-content: space-between;
  display: flex;
`

export const SecondLineButton = styled.button`
  height: 1.2rem;
  padding: 0 1rem;
  border: none;
  border-radius: 1rem;
  background-color: #3a3a3a;
  color: white;
  font-size: 0.5rem;
  margin-left: 0.2rem;
  cursor: pointer;
`

export const LikeContatiner = styled.div`
  display: flex;
  margin-left: 0.3rem;
`

export const SmText = styled.p`
  font-size: 0.7rem;
  font-weight: 600;
  padding-left: 0.1rem;
`

export const LocationText = styled.p`
  font-size: 0.8rem;
  line-height: 1.1rem;
  margin-left: 0.1rem;
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
