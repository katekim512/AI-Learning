import { AxiosResponse } from 'axios'

import { aiLearningAxios } from '../axiosInstance'

interface SuccessResponse {
  message: string
}

export const postSend = async (
  token: string,
  guideId: number,
  chat: string,
): Promise<AxiosResponse<SuccessResponse> | null> => {
  const response = await aiLearningAxios.post(
    'guide/send',
    { guideId, chat },
    { headers: { Authorization: `Bearer ${token}` } },
  )
  return response
}
