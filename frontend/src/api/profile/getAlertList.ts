import { AxiosResponse } from 'axios'

import { aiLearningAxios } from '../axiosInstance'

export interface AlertPlace {
  date: string
  weather: number
  contentid: number
  place: string
  firstimage: string
  contenttypeid: number
  areacode: number
  sigungucode: number
}

export const getAlertPlace = async (
  token: string,
): Promise<AxiosResponse<AlertPlace[]> | null> => {
  const response = await aiLearningAxios.get('profile/alert-list', {
    headers: { Authorization: `Bearer ${token}` },
  })
  return response
}
