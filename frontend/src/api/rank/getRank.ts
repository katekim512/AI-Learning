import { AxiosResponse } from 'axios'

import { aiLearningAxios } from '../axiosInstance' // 커스텀 Axios 인스턴스 import

export interface RankPlace {
  contentid: number
  contenttypeid: number
  place: string
  firstimage: string
}

export const getRank = async (
  token: string,
): Promise<AxiosResponse<RankPlace[]> | null> => {
  const response = await aiLearningAxios.get('rank/get', {
    headers: { Authorization: `Bearer ${token}` },
  })
  return response
}
