import styled from 'styled-components'

export const PlaceItem = styled.li<{ visited?: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #eaeaea;
  background-color: ${({ visited }) =>
    visited ? '#f0f0f0' : 'white'}; /* Gray background if visited */
  color: #333; /* Keep text color the same regardless of visited status */
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
