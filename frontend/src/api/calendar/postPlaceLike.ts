import { AxiosResponse } from 'axios'

import { aiLearningAxios } from '../axiosInstance'

interface SuccessResponse {
  like: number
}

export const postPlaceLike = async (
  token: string,
  contentid: number,
): Promise<AxiosResponse<SuccessResponse> | null> => {
  const response = await aiLearningAxios.post(
    'calendar/place-like',
    { contentid },
    { headers: { Authorization: `Bearer ${token}` } },
  )
  return response
}
