import { useState } from 'react'

import * as L from './styles/AISchedule2.style'
import BackButton from '../../components/BackButton/BackButton'

const AISchedule2 = () => {
  const [description, setDescription] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target
    setDescription(value)
  }

  return (
    <>
      <BackButton />
      <L.Container>
        <L.Title>
          <L.Text>거의 다 왔어요!</L.Text>
          <L.Text>
            <L.Highlighted>여행 플랜에 반영할 의견</L.Highlighted>을
          </L.Text>
          <L.Text>자유롭게 남겨주세요 :{')'}</L.Text>
        </L.Title>
        <L.InputBox
          name='ai-Input2'
          id='ai-Input2'
          value={description}
          onChange={handleChange}
          maxLength={300}
          placeholder='예시) 4, 5월엔 멀리 이동이 어려울 거 같아, 서울 내 장소로만 추천해주세요!'
        />
      </L.Container>
      <L.BottomButton>완료</L.BottomButton>
    </>
  )
}

export default AISchedule2
