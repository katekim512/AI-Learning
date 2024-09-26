import { AxiosResponse } from 'axios'

import { aiLearningAxios } from '../axiosInstance'

interface LevelResponse {
  contentid: number
  contenttypeid: number
  areacode: number
  sigungucode: number
  place: string
  firstimage: string
  isVisited: boolean
}

export const postLevel = async (
  token: string,
  level: string,
): Promise<AxiosResponse<LevelResponse[]> | null> => {
  const response = await aiLearningAxios.post(
    'profile/level',
    { level },
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  )
  return response
}
