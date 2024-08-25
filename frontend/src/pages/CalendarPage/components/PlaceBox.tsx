import PropTypes from 'prop-types'
import React from 'react'

import { DateSchedule } from '../../../api/calendar/postTimelineDay'
import * as L from '../styles/PlaceBox.style'

interface PlaceBoxProps {
  date: string
  daySchedule: DateSchedule | undefined
}

const PlaceBox: React.FC<PlaceBoxProps> = ({ daySchedule }) => {
  return (
    <>
      <L.PlaceBoxWrapper>
        {daySchedule?.info.map((item, index) => (
          <L.PlaceBoxContainer key={index}>
            <L.PlaceBoxText>
              <L.PlaceBoxTitle>{item.place}</L.PlaceBoxTitle>
              <L.PlaceBoxCity>{item.city}</L.PlaceBoxCity>
            </L.PlaceBoxText>
            <L.PlaceBoxPic alt='placePreview' src={item.pic} />
          </L.PlaceBoxContainer>
        ))}
      </L.PlaceBoxWrapper>
    </>
  )
}

PlaceBox.propTypes = {
  date: PropTypes.string.isRequired,
  daySchedule: PropTypes.shape({
    memo: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    distance: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    info: PropTypes.arrayOf(
      PropTypes.shape({
        city: PropTypes.string.isRequired,
        place: PropTypes.string.isRequired,
        order: PropTypes.number.isRequired,
        pic: PropTypes.string.isRequired,
        lon: PropTypes.number.isRequired,
        lat: PropTypes.number.isRequired,
      }).isRequired,
    ).isRequired,
  }),
}

export default PlaceBox
