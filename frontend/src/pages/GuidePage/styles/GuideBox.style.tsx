import styled from 'styled-components'

export const PlaceBoxWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
`

export const PlaceBoxContainer = styled.div`
  width: 100%;
  height: 8rem;
  background-color: white;
  border-radius: 15px;
  padding: 1rem;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
`

export const OverviewText = styled.p`
  margin-top: 0.3rem;
  font-size: 0.9rem;
  line-height: 1.4;
  white-space: pre-wrap;
  text-align: center;
  padding: 2rem;
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
  font-size: 0.95rem;
  margin-left: 0.5rem;
  margin-bottom: 0.1rem;
`

export const PlaceBoxTags = styled.div`
  display: flex;
  margin-left: 0.5rem;
`

export const PlaceBoxTag = styled.div`
  font-weight: 700;
  width: 2.3rem;
  font-size: 0.7rem;
  text-align: center;
  color: white;
  border-radius: 1rem;
  margin-bottom: 0.1rem;
  margin-right: 0.3rem;
  background-color: #00d9a5;
`

export const PlaceBoxCareer = styled.p`
  font-weight: 700;
  color: #353a40;
  font-size: 0.8rem;
  margin-bottom: 0.1rem;
  margin-left: 0.5rem;
`

export const PlaceBoxIntro = styled.p`
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

export const ScrollableContainer = styled.div`
  overflow-y: auto;
  margin-bottom: 5rem;
`

export const ChatButton = styled.button`
  border: none;
  border-radius: 1rem;
  background-color: #525fd4;
  color: white;
  padding: 0.3rem 0.6rem;
  font-size: 0.7rem;
  white-space: nowrap;
  cursor: pointer;
`
