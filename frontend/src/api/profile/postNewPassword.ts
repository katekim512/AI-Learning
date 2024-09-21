import { AxiosResponse } from 'axios'

import { aiLearningAxios } from '../axiosInstance'

interface SuccessResponse {
  message: string
}

export const postNewPassword = async (
  token: string,
  password: string,
): Promise<AxiosResponse<SuccessResponse> | null> => {
  const response = await aiLearningAxios.post(
    'profile/new-passowrd',
    { password },
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  )
  return response
}
