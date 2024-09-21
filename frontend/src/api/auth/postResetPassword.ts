import { AxiosResponse } from 'axios'

import { aiLearningAxios } from '../axiosInstance'

interface SuccessResponse {
  message: string
}

export const postResetPassword = async (
  email: string,
  password: string,
): Promise<AxiosResponse<SuccessResponse> | null> => {
  const response = await aiLearningAxios.post('members/reset-password', {
    email,
    password,
  })
  return response
}
