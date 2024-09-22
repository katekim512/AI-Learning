import styled from 'styled-components'

export const PlaceItem = styled.li<{ visited?: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #eaeaea;
  background-color: ${({ visited }) => (visited ? '#f0f0f0' : 'white')};
  color: #333;
`

export const PlaceImage = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 5px;
  margin-right: 15px;
`

export const PlaceInfo = styled.div`
  flex-grow: 1;
`

export const PlaceName = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`

export const PlaceDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin: 5px 0 0 0;
`
export const PlaceCardContainer = styled.div<{ isVisited: boolean }>`
  width: 52px;
  height: 52px;
  margin-right: 15px;
  aspect-ratio: 1;
  background-color: ${props =>
    props.isVisited ? 'rgba(128, 128, 128, 0.5)' : '#eeeeee'};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  text-align: center;
  transition: transform 0.2s;
  position: relative;

  &:hover {
    transform: scale(1.05);
  }

  /* Only show the checkmark overlay if visited */
  ${props =>
    props.isVisited &&
    `
    &::after {
      content: '\\2713'; /* Unicode for checkmark */
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 3rem;
      color: white;
      z-index: 1;
    }
  `}
`

export const CheckMark = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  background-color: rgba(76, 175, 80, 0.3); /* Green translucent background */
  color: white;
  z-index: 1; /* Ensure it's on top */
`
