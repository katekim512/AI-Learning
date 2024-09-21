import { AxiosResponse } from 'axios'

import { aiLearningAxios } from '../axiosInstance'

interface SuccessResponse {
  isCorrect: boolean
}

export const postCheckPassword = async (
  token: string,
  password: string,
): Promise<AxiosResponse<SuccessResponse> | null> => {
  const response = await aiLearningAxios.post(
    'profile/check-passowrd',
    { password },
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  )
  return response
}
