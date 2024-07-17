import { MenuBar, MenuIcon } from './styles/BottomMenuBar.style'

const icons = [
  '/img/icon-calendar.png',
  '/img/icon-recommend-place.png',
  '/img/icon-rank.png',
  '/img/icon-profile.png',
]

const BottomMenuBar = () => {
  return (
    <MenuBar>
      {icons.map((icon, index) => (
        <MenuIcon key={index} icon={icon} src={icon} />
      ))}
    </MenuBar>
  )
}

export default BottomMenuBar
