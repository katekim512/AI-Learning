import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
export const ScrollContainer = styled.div`
  height: calc(100vh - 4rem);
  overflow-y: auto;
`
export const ButtonContainer = styled.div`
  padding: 20px;
`

export const Section1 = styled.div`
  margin-top: 0px;
  margin-bottom: 20px;
`
export const Section2 = styled.div`
  margin-top: 20px;
`

export const Title = styled.h2`
  font-size: 22px;
  color: #333;
  margin: 0px 20px;
  margin-bottom: 20px;
`

export const SectionHeader = styled.h2`
  font-size: 16px;
  color: #525fd4;
  border-bottom: 2px solid #525fd4;
  padding: 10px 20px;
`

export const DestinationList = styled.ul`
  list-style: none;
  //padding: 0px 0px;
`

export const DestinationItem = styled.li<{ visited?: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #eaeaea;
  background-color: ${({ visited }) =>
    visited ? '#f0f0f0' : 'white'}; /* Gray background if visited */
  color: ${({ visited }) =>
    visited ? '#a9a9a9' : '#333'}; /* Lighter text color if visited */
`

export const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  object-fit: cover;
  margin-right: 20px;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Name = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 3px;
`

export const Location = styled.span`
  font-size: 12px;
  color: #666;
  margin-top: 3px;
`

export const NoVisitedMessage = styled.p`
  font-size: 14px;
  color: #666;
  text-align: center;
  padding: 40px;
`

export const CharacterImage = styled.img`
  width: 150px;
  height: 150px;
  margin: 20px auto;
  display: block;
`

export const PatternText = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: 20px 0;
`

export const Description = styled.p`
  text-align: center;
  color: #666;
  margin: 0 20px 40px;
  line-height: 1.5;
`

export const MoreButton = styled.button`
  background-color: #525fd4;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
  display: block;
  margin: 0 auto;
  &:hover {
    background-color: #4050b5;
  }
`
