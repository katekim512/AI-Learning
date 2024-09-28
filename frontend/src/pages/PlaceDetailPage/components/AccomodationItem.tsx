import React from 'react'

import * as L from '../styles/AccomodationItem.style'

interface PlaceBoxItemProps {
  item: {
    addr1: string
    title: string
    firstimage: string
  }
}

const AccomodationItem: React.FC<PlaceBoxItemProps> = ({ item }) => {
  const handleClick = () => {
    //
  }

  return (
    <>
      <L.PlaceBoxContainer onClick={handleClick}>
        <L.PlaceBoxText>
          <L.PlaceBoxTitle>{item.title}</L.PlaceBoxTitle>
          <L.PlaceBoxCity>{item.addr1}</L.PlaceBoxCity>
        </L.PlaceBoxText>
        <L.PlaceBoxPic alt='placePreview' src={item.firstimage} />
      </L.PlaceBoxContainer>
    </>
  )
}

export default AccomodationItem
