import { AxiosResponse } from 'axios'

import { aiLearningAxios } from '../axiosInstance'

export interface RecentPlace {
  contentid: number
  contenttypeid: number
  areacode: number
  sigungucode: number
  place: string
  firstimage: string
}

export const getRecentPlace = async (
  token: string,
): Promise<AxiosResponse<RecentPlace[]> | null> => {
  const response = await aiLearningAxios.get('profile/recent-place', {
    headers: { Authorization: `Bearer ${token}` },
  })
  return response
}
