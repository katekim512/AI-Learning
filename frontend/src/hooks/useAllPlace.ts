import { useQuery } from 'react-query'

import { getAllPlace } from '../api/calendar/getAllPlace'
import authToken from '../stores/authToken'

export const useAllPlace = () => {
  const token = authToken.getAccessToken()

  return useQuery('allPlaces', () => getAllPlace(token), {
    staleTime: 1000 * 60 * 60, // 1시간 동안 데이터가 신선한 것으로 간주
    cacheTime: 1000 * 60 * 60, // 1시간 동안 캐시 유지
    refetchOnWindowFocus: false, // 사용자가 화면을 다시 포커스해도 데이터 재요청 안함
  })
}
