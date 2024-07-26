import * as L from './styles/AISchedule3.style'
import BackButton from '../../components/BackButton/BackButton'

const AISchedule3 = () => {
  return (
    <>
      <BackButton />
      <L.Container>
        <L.Title>
          <L.Text>완성된 플랜이에요!</L.Text>
          <L.Text>전체 일정을 확인해보세요!</L.Text>
        </L.Title>
      </L.Container>
      <L.BottomButton>완료</L.BottomButton>
    </>
  )
}

export default AISchedule3
