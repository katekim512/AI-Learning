import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Schedule from './components/Schedule'
import * as L from './styles/AISchedule3.style'
import { getSchedule, AISchedule } from '../../api/schedule/getSchedule'
import { postEdit } from '../../api/schedule/postEdit'
import BackButton from '../../components/BackButton/BackButton'
import authToken from '../../stores/authToken'

const AISchedule3 = () => {
  const token = authToken.getAccessToken()
  const navigate = useNavigate()
  const [scheduleInfo, setScheduleInfo] = useState<AISchedule[]>([
    {
      date: '2024-10-24',
      city: '경주',
      place: '불국사',
    },
    {
      date: '2024-10-24',
      city: '경주',
      place: '첨성대',
    },
    {
      date: '2024-10-30',
      city: '부산',
      place: '해운대',
    },
    {
      date: '2024-11-03',
      city: '서울',
      place: '국립중앙박물관',
    },
  ])
  // const [scheduleInfo, setScheduleInfo] = useState<AISchedule[]>([])

  // // API에서 스케줄 정보를 가져와 상태를 초기화
  // useEffect(() => {
  //   const fetchSchedule = async () => {
  //     const response = await getSchedule(token)
  //     if (response && response.data) {
  //       setScheduleInfo(response.data)
  //     } else {
  //       console.error('Failed to fetch schedule data.')
  //     }
  //   }

  //   fetchSchedule()
  // }, [token]) // token이 변경될 때마다 useEffect가 다시 실행됨

  const getSecheduleData = async () => {
    if (token) {
      const successResponse = await getSchedule(token)

      if (successResponse && successResponse.data) {
        setScheduleInfo(successResponse.data)
      }
    }
  }

  useEffect(() => {
    getSecheduleData()
  }, [])

  // 드래그 앤 드롭을 통해 장소만 교환하는 함수
  const moveSchedule = (dragIndex: number, hoverIndex: number) => {
    const updatedSchedule = [...scheduleInfo]

    // 드래그된 항목과 드롭된 위치의 항목의 장소를 교환
    const temp = updatedSchedule[dragIndex].place
    updatedSchedule[dragIndex].place = updatedSchedule[hoverIndex].place
    updatedSchedule[hoverIndex].place = temp

    // 도시(city)도 함께 교환
    const tempCity = updatedSchedule[dragIndex].city
    updatedSchedule[dragIndex].city = updatedSchedule[hoverIndex].city
    updatedSchedule[hoverIndex].city = tempCity

    setScheduleInfo(updatedSchedule)
    console.log('바뀐 일정들', updatedSchedule)
  }

  const handleComplete = () => {
    // 변경된 일정 정보를 백엔드로 전송
    console.log('Updated schedule:', scheduleInfo)

    //백엔드 전달
    const token = authToken.getAccessToken() // 토큰 가져오기

    postEdit(token, scheduleInfo)
      .then(response => {
        if (response && response.data.message === 'Upload success') {
          console.log('Upload successful:', response.data.message)
          navigate('/calendar') // 업로드 성공 시 페이지 이동
        } else {
          console.error('Failed to upload edits.')
        }
      })
      .catch(error => {
        console.error('Error during upload:', error)
      })

    navigate('/calendar')
  }

  return (
    <>
      <BackButton />
      <L.Container>
        <L.Title>
          <L.Text>완성된 플랜이에요!</L.Text>
          <L.Text>전체 일정을 확인해보세요!</L.Text>
          <L.AdditionText>
            수정을 원하는 일정을 움직여 변경할 수 있습니다
          </L.AdditionText>
        </L.Title>
        <Schedule scheduleInfo={scheduleInfo} moveSchedule={moveSchedule} />
      </L.Container>
      <L.BottomButton onClick={handleComplete}>완료</L.BottomButton>
    </>
  )
}

export default AISchedule3
