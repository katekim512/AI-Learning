import { FaWandMagicSparkles } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

import * as L from './styles/Calendar.style'
import BottomMenuBar from '../../components/BottomMenuBar/BottomMenuBar'

const Calendar = () => {
  const navigate = useNavigate()

  const handleComplete = () => {
    navigate('/ai-schedule-step1')
  }

  return (
    <>
      <L.HeaderSection>
        Calendar Page
        <L.AIScheduleButton onClick={handleComplete}>
          <FaWandMagicSparkles />
          &nbsp;&nbsp;AI 교육여행
        </L.AIScheduleButton>
      </L.HeaderSection>
      <BottomMenuBar />
    </>
  )
}

export default Calendar
