import { AxiosResponse } from 'axios'

import { aiLearningAxios } from '../axiosInstance'

export interface VisitedPlace {
  contentid: number
  contenttypeid: number
  areacode: number
  sigungucode: number
  place: string
  firstimage: string
}

export const getVisited = async (
  token: string,
): Promise<AxiosResponse<VisitedPlace[]> | null> => {
  const response = await aiLearningAxios.get('profile/visited', {
    headers: { Authorization: `Bearer ${token}` },
  })
  return response
}
