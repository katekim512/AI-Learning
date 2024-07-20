import { useNavigate } from 'react-router-dom'

import BottomMenuBar from '../../components/BottomMenuBar/BottomMenuBar'

const Rank = () => {
  const navigate = useNavigate()

  const handleComplete = () => {
    navigate('/test')
  }

  return (
    <>
      Rank Page
      <button onClick={handleComplete}>완료</button>
      <BottomMenuBar />
    </>
  )
}

export default Rank
