import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 6rem);
  margin-bottom: 6rem;
`

export const Container = styled.div`
  padding: 20px 10px;
  padding-bottom: 0px;
  font-family: 'Arial', sans-serif;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
`

export const SearchInput = styled.input`
  padding: 8px 12px;
  font-size: 14px;
  border: none;
  outline: none;
  border-radius: 4px;
  margin-left: 0.5rem;
  margin-top: 0.15rem;
  width: calc(100% - 1.8rem);
  background-color: transparent;
  color: #333;
`

export const PlacesSection = styled.section`
  margin-top: 5px;
  padding: 0px 10px;
  max-height: calc(
    100vh - 5rem
  ); /* Adjusts the height to leave space for other elements */
  overflow-y: auto; /* Enables vertical scrolling */
`

export const SectionTitle = styled.div`
  font-size: 16px;
  margin-bottom: 15px;
  margin-left: 5px;
  align-items: center;
`

export const BoldText = styled.span`
  font-weight: bold;
  font-size: 16px;
`

export const PlacesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const PlaceItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 0;
`

export const PlaceNumber = styled.span`
  font-size: 12px;
  font-weight: bold;
  margin-left: 5px;
  margin-right: 15px;
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

export const AddButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  padding: 5px 13px;
  font-size: 13px;
  cursor: pointer;
  border-radius: 22px;

  &:hover {
    background-color: #e0e0e0;
  }
`
export const gpsIcon = styled.button`
  display: inline-block;
  width: 1em;
  height: 1em;
  margin-left: 6px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'%3E%3Cpath fill='black' d='M240 120h-24.37A88.13 88.13 0 0 0 136 40.37V16a8 8 0 0 0-16 0v24.37A88.13 88.13 0 0 0 40.37 120H16a8 8 0 0 0 0 16h24.37A88.13 88.13 0 0 0 120 215.63V240a8 8 0 0 0 16 0v-24.37A88.13 88.13 0 0 0 215.63 136H240a8 8 0 0 0 0-16m-112 80a72 72 0 1 1 72-72a72.08 72.08 0 0 1-72 72'/%3E%3C/svg%3E");
  border: none; /* Removes the border */
  background-color: transparent;
`
