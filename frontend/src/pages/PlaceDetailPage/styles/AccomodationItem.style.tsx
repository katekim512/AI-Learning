import styled from 'styled-components'

export const PlaceBoxWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-left: 3rem;
  margin-bottom: 5rem;
`

export const PlaceBoxContainer = styled.div`
  width: 100%;
  height: 4.7rem;
  background-color: white;
  border-radius: 15px;
  padding: 1rem;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
  transition: transform 0.3s ease;
`

export const PlaceBoxText = styled.div`
  line-height: 1.2rem;
  justify-content: center;
  align-items: center;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`

export const PlaceBoxTitle = styled.p`
  font-weight: 700;
  font-size: 0.9rem;
  margin-left: 0.5rem;
`

export const PlaceBoxCity = styled.p`
  font-weight: 400;
  color: #626262;
  font-size: 0.75rem;
  margin-left: 0.5rem;
`

export const PlaceBoxPic = styled.img`
  height: 3.5rem;
  width: 3.5rem;
  position: relative;
  object-fit: cover;
  border-radius: 10px;
`
