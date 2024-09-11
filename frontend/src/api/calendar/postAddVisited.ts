import { AxiosResponse } from 'axios'

import { aiLearningAxios } from '../axiosInstance'

interface SuccessResponse {
  message: string
}

export const postAddVisited = async (
  token: string,
  contentid: number,
): Promise<AxiosResponse<SuccessResponse> | null> => {
  const response = await aiLearningAxios.post(
    'calendar/add-visited',
    { contentid },
    { headers: { Authorization: `Bearer ${token}` } },
  )
  return response.data
}
