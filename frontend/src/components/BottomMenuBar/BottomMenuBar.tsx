import calendarIcon from '@iconify/icons-heroicons/calendar-solid'
import profileIcon from '@iconify/icons-heroicons/user-20-solid'
import rankingIcon from '@iconify/icons-icon-park-solid/five-star-badge'
import recommendationIcon from '@iconify/icons-majesticons/map-marker-area'
import { Icon } from '@iconify/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

import { MenuBar, MenuIcon } from './styles/BottomMenuBar.style'

const icons = [
  {
    icon: calendarIcon,
    path: '/calendar',
    alt: '캘린더',
    label: '캘린더',
  },
  {
    icon: recommendationIcon,
    path: '/recommend-place',
    alt: '장소추천',
    label: '장소추천',
  },
  {
    icon: rankingIcon,
    path: '/ranking-place',
    alt: '순위',
    label: '순위',
  },
  {
    icon: profileIcon,
    path: '/profile',
    alt: '프로필',
    label: '프로필',
  },
]

const BottomNav: React.FC = () => {
  return (
    <MenuBar>
      {icons.map((icon, index) => (
        <NavLink
          key={index}
          to={icon.path}
          className={({ isActive }) => (isActive ? 'active' : '')}
          end
        >
          {({ isActive }) => (
            <MenuIcon isActive={isActive}>
              <Icon
                icon={icon.icon}
                style={{ fontSize: '24px', color: 'currentColor' }}
              />
              <span>{icon.label}</span>
            </MenuIcon>
          )}
        </NavLink>
      ))}
    </MenuBar>
  )
}
export default BottomNav
