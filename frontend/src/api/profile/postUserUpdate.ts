import { AxiosResponse } from 'axios'

import { aiLearningAxios } from '../axiosInstance'

interface SuccessResponse {
  message: string
}

export const postUserUpdate = async (
  token: string,
  nickname: string,
  birth: string,
  city: string,
): Promise<AxiosResponse<SuccessResponse> | null> => {
  const response = await aiLearningAxios.post(
    'profile/user-update',
    { nickname, birth, city },
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  )
  return response
}
