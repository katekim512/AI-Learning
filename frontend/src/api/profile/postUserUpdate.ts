import { AxiosResponse } from 'axios'

import { aiLearningAxios } from '../axiosInstance'

interface SuccessResponse {
  message: string
}

export const postUserUpdate = async (
  token: string,
  nickname: string,
  birth: number,
  areacode: number,
  sigungucode: number,
): Promise<AxiosResponse<SuccessResponse> | null> => {
  const response = await aiLearningAxios.post(
    'profile/user-update',
    { nickname, birth, areacode, sigungucode },
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  )
  return response
}
