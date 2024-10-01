import { AxiosResponse } from 'axios'

import { aiLearningAxios } from '../axiosInstance'

interface SuccessResponse {
  chat: string[]
}

export const postMessage = async (
  token: string,
  guideId: number,
): Promise<AxiosResponse<SuccessResponse> | null> => {
  const response = await aiLearningAxios.post(
    'guide/message',
    { guideId },
    { headers: { Authorization: `Bearer ${token}` } },
  )
  return response
}
