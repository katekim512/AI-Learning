import PropTypes from 'prop-types'

import * as L from '../styles/Calendar.style'

interface DateDrawerProps {
  date: string
}

const DateDrawer: React.FC<DateDrawerProps> = ({ date }) => {
  return (
    <>
      <L.DrawerContainer>
        <L.DrawerHeader>
          <L.DrawerHeaderText>{date}</L.DrawerHeaderText>
        </L.DrawerHeader>
      </L.DrawerContainer>
    </>
  )
}

DateDrawer.propTypes = {
  date: PropTypes.string.isRequired,
}

export default DateDrawer
