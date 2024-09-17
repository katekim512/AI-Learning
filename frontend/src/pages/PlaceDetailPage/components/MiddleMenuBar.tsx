import { Icon } from '@iconify/react'
import React, { useEffect, useRef } from 'react'

import * as L from '../styles/PlaceDetail.style'

interface MiddleMenuBarProps {
  isLiked: boolean
  isVisited: boolean
  onLikeToggle: () => void
  onVisitedToggle: () => void
  menuButtonWidth: number
  setMenuButtonWidth: (width: number) => void
}

const MiddleMenuBar: React.FC<MiddleMenuBarProps> = ({
  isLiked,
  isVisited,
  onLikeToggle,
  onVisitedToggle,
  menuButtonWidth,
  setMenuButtonWidth,
}) => {
  const menubarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (menubarRef.current) {
      const menubarWidth = menubarRef.current.offsetWidth
      setMenuButtonWidth(menubarWidth / 4)
    }
  }, [menubarRef, setMenuButtonWidth])

  return (
    <L.MenubarContainer ref={menubarRef}>
      <L.MenuButton
        onClick={onLikeToggle}
        isLast={false}
        style={{ width: menuButtonWidth }}
      >
        {isLiked ? (
          <>
            <Icon icon='ph:heart-fill' width='24' height='24' />
            <div>저장됨</div>
          </>
        ) : (
          <>
            <Icon icon='ph:heart-light' width='24' height='24' />
            <div>저장하기</div>
          </>
        )}
      </L.MenuButton>
      <L.MenuButton isLast={false} style={{ width: menuButtonWidth }}>
        <>
          <Icon icon='hugeicons:pin-location-03' width='24' height='24' />
          <div>장소추가</div>
        </>
      </L.MenuButton>
      <L.MenuButton
        onClick={onVisitedToggle}
        isLast={false}
        style={{ width: menuButtonWidth }}
      >
        {isVisited ? (
          <>
            <Icon
              icon='teenyicons:calendar-tick-solid'
              width='20'
              height='24'
            />
            <div>방문완료</div>
          </>
        ) : (
          <>
            <Icon
              icon='teenyicons:calendar-tick-outline'
              width='20'
              height='24'
            />
            <div>방문추가</div>
          </>
        )}
      </L.MenuButton>
      <L.MenuButton isLast={true} style={{ width: menuButtonWidth }}>
        <Icon icon='material-symbols:share' width='24' height='24' />
        <div>공유하기</div>
      </L.MenuButton>
    </L.MenubarContainer>
  )
}

export default MiddleMenuBar
