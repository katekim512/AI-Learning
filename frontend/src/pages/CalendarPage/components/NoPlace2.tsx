import React from 'react'

import {
  ImageWrapper,
  NoPlaceContainer,
  NoPlaceText,
  //NoPlacesSection,
} from '../styles/NoPlace.style'

const NoPlaceImage = '/img/NoPlace.png'

const NoPlace2: React.FC = () => {
  return (
    //<NoPlacesSection>
    <NoPlaceContainer>
      <ImageWrapper>
        <img src={NoPlaceImage} alt='No places available' />
      </ImageWrapper>
      <NoPlaceText>5km 내에 해당하는 장소가 없습니다</NoPlaceText>
    </NoPlaceContainer>
    //</NoPlacesSection>
  )
}

export default NoPlace2
