import { AxiosResponse } from 'axios'

import { aiLearningAxios } from '../axiosInstance'

interface SuccessResponse {
  isCorrect: boolean
}

export const postCheckInfo = async (
  nickname: string,
  email: string,
): Promise<AxiosResponse<SuccessResponse> | null> => {
  const response = await aiLearningAxios.post('members/check-info', {
    nickname,
    email,
  })
  return response
}
