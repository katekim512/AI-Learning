import { AxiosResponse } from 'axios'

import { aiLearningAxios } from '../axiosInstance'

export interface AISchedule {
  date: string
  areacode: number
  sigungucode: number
  place: string
  city?: string // city를 선택적 속성으로 추가
}

export const getSchedule = async (
  token: string,
): Promise<AxiosResponse<AISchedule[]> | null> => {
  const response = await aiLearningAxios.get('schedule/get', {
    headers: { Authorization: `Bearer ${token}` },
  })
  return response
}
