import { AxiosResponse } from 'axios'

import { aiLearningAxios } from '../axiosInstance'

export interface User {
  id: number
  email: string
  nicknmae: string
  profile: string
  birth: number
  city: string
  levels: Level
}

interface Level {
  prehistoric: number
  threeKingdoms: number
  goryeo: number
  chosun: number
  modern: number
}

export const getMyInfo = async (
  token: string,
): Promise<AxiosResponse<User> | null> => {
  const response = await aiLearningAxios.get('members/member', {
    headers: { Authorization: `Bearer ${token}` },
  })
  return response
}
