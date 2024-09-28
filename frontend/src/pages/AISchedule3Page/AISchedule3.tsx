import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Schedule from './components/Schedule'
import * as L from './styles/AISchedule3.style'
import { getSchedule, AISchedule } from '../../api/schedule/getSchedule'
import { postEdit } from '../../api/schedule/postEdit'
import authToken from '../../stores/authToken'
import { getCityName } from '../../style/CityMapper'
import BackButton from '../AISchedule1Page/components/BackButton/BackButton'

const AISchedule3 = () => {
  const token = authToken.getAccessToken()
  const navigate = useNavigate()
  const [scheduleInfo, setScheduleInfo] = useState<AISchedule[]>([])
  // const iconUrl =
  //   "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='%23000' d='M8 5.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M11.5 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4M8 9.5q.001-.263.085-.498L8 9H3a1.5 1.5 0 0 0-1.5 1.5v.075s0 2.925 4 2.925c1.21 0 2.055-.268 2.644-.642q.093-.196.238-.358a1.5 1.5 0 0 1-.382-1c0-.384.144-.735.382-1A1.5 1.5 0 0 1 8 9.5M9.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z'/%3E%3C/svg%3E"

  // const GradientIcon = () => (
  //   <svg
  //     width='24'
  //     height='24'
  //     viewBox='0 0 24 24'
  //     fill='none'
  //     xmlns='http://www.w3.org/2000/svg'
  //     style={{ marginRight: '5px' }}
  //   >
  //     <defs>
  //       <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='0%'>
  //         <stop offset='0%' stopColor='#00c6ff' />
  //         <stop offset='100%' stopColor='#0072ff' />
  //       </linearGradient>
  //     </defs>
  //     <path
  //       d='M12 3C6.5 3 2 6.58 2 11C2.05 13.15 3.06 15.17 4.75 16.5C4.75 17.1 4.33 18.67 2 21C4.37 20.89 6.64 20 8.47 18.5C9.61 18.83 10.81 19 12 19C17.5 19 22 15.42 22 11C22 6.58 17.5 3 12 3ZM12 17C7.58 17 4 14.31 4 11C4 7.69 7.58 5 12 5C16.42 5 20 7.69 20 11C20 14.31 16.42 17 12 17Z'
  //       fill='url(#gradient)'
  //     />
  //   </svg>
  // )

  const dummyScheduleData = [
    {
      date: '2024-10-24',
      areacode: 4,
      sigungucode: 4,
      place: '불국사',
    },
    {
      date: '2024-10-30',
      areacode: 4,
      sigungucode: 4,
      place: '석굴암',
    },
    {
      date: '2024-11-03',
      areacode: 4,
      sigungucode: 4,
      place: '불국사',
    },
    {
      date: '2024-11-07',
      areacode: 2,
      sigungucode: 1,
      place: '경복궁',
    },
    {
      date: '2024-11-10',
      areacode: 3,
      sigungucode: 3,
      place: '남산타워',
    },
    {
      date: '2024-11-15',
      areacode: 5,
      sigungucode: 5,
      place: '한라산',
    },
    {
      date: '2024-11-20',
      areacode: 6,
      sigungucode: 6,
      place: '광안리 해수욕장',
    },
    {
      date: '2024-11-25',
      areacode: 7,
      sigungucode: 7,
      place: '동대문 디자인 플라자',
    },
    {
      date: '2024-12-01',
      areacode: 8,
      sigungucode: 8,
      place: '제주도 성산일출봉',
    },
  ]

  // API에서 스케줄 정보를 가져와 상태를 초기화
  useEffect(() => {
    const fetchSchedule = async () => {
      const response = await getSchedule(token)
      if (response && response.data) {
        console.log('Raw API response:', response.data)
        const updatedSchedule = response.data.map(item => ({
          ...item,
          city: getCityName(item.areacode, item.sigungucode), // city 값을 설정
        }))
        setScheduleInfo(updatedSchedule)
        console.log('Updated schedule with city names:', updatedSchedule)
      } else {
        console.error('Failed to fetch schedule data.')
      }
    }

    fetchSchedule()
  }, [token])

  //더미 데이터를 사용하여 상태를 초기화
  const getDummyScheduleData = async () => {
    const updatedSchedule = dummyScheduleData.map(item => ({
      ...item,
      city: getCityName(item.areacode, item.sigungucode), // city 값을 설정
    }))
    setScheduleInfo(updatedSchedule)
  }

  useEffect(() => {
    getDummyScheduleData()
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

  const handleDelete = (index: number) => {
    const newSchedule = [...scheduleInfo]
    newSchedule.splice(index, 1)
    setScheduleInfo(newSchedule)
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

  const handleGuideRequest = () => {
    // 가이드 요청 로직
    console.log('가이드 요청')
  }

  return (
    <>
      <BackButton />
      <L.ContainerTotal>
        <L.Container1>
          <L.Title>
            <L.Text>완성된 플랜이에요!</L.Text>
            <L.Text>전체 일정을 확인해보세요!</L.Text>
            <L.AdditionText>
              수정을 원하는 일정을 움직여 변경할 수 있습니다
            </L.AdditionText>
          </L.Title>
        </L.Container1>
        <L.Divider />
        <L.Container>
          <Schedule
            scheduleInfo={scheduleInfo}
            moveSchedule={moveSchedule}
            handleDelete={handleDelete}
          />
          <L.GuideRequestButton onClick={() => handleGuideRequest()}>
            {/* <L.GradientIcon icon={peopleList16Filled} /> */}
            <Icon icon='fluent:people-chat-16-filled' width='24' height='24' />
            해당 일정으로 가이드를 구하고 싶나요?
          </L.GuideRequestButton>
        </L.Container>
      </L.ContainerTotal>
      <L.BottomButton onClick={handleComplete}>완료</L.BottomButton>
    </>
  )
}

export default AISchedule3
