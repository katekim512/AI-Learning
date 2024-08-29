import React from 'react'
import { useParams } from 'react-router-dom'

import * as L from './styles/PlaceDetail.style'
import BackButton from '../../components/BackButton/BackButton'

const PlaceDetail = () => {
  const { place } = useParams<{ place: string }>()

  return (
    <>
      <BackButton />
      <L.Container>
        <L.Title>
          <L.Text>{place}</L.Text>
        </L.Title>
      </L.Container>
    </>
  )
}

export default PlaceDetail
