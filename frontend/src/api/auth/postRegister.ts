import { AxiosResponse } from 'axios'

import { aiLearningAxios } from '../axiosInstance'

interface SuccessResponse {
  message: string
}

export const register = async (
  email: string,
  nickname: string,
  password: string,
  birth: number,
  areacode: number,
  sigungucode: number,
  accessToken?: string,
): Promise<AxiosResponse<SuccessResponse> | null> => {
  const response = await aiLearningAxios.post('members/signup', {
    email,
    nickname,
    password,
    birth,
    areacode,
    sigungucode,
    accessToken,
  })
  return response.data
}
