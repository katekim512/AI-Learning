import { styled } from 'styled-components'

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 2rem;
  padding-top: 5.5rem;
  overflow-y: auto;
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
  z-index: 10;
  cursor: pointer;
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
`

export const PlaceImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

export const OverviewContainer = styled.div`
  padding: 1rem 0;
`

export const OverviewTitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
`

export const OverviewText = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
`

export const HomepageLink = styled.div`
  font-size: 0.9rem;
  line-height: 1.4;
  color: #1a73e8;
  word-break: break-word; /* 긴 URL을 잘 보이게 처리 */
  a {
    text-decoration: none;
    color: inherit;
  }
`
