import React, { useState } from 'react'

import GuideBoxItem from './GuideBoxItem'
import { guideData } from '../datas/GuideList'
import * as L from '../styles/GuideBox.style'

const GuideBox = () => {
  const [data] = useState(guideData)

  const guideListArray = Object.values(data)

  if (!guideListArray.length) return <L.OverviewText>Loading...</L.OverviewText>

  return (
    <L.ScrollableContainer>
      {guideListArray.map((item, index) => (
        <GuideBoxItem key={index} item={item} />
      ))}
    </L.ScrollableContainer>
  )
}

export default GuideBox
