import { AxiosResponse } from 'axios'

import { aiLearningAxios } from '../axiosInstance'

interface SuccessResponse {
  message: string
}

export const postAddPlace = async (
  token: string,
  contentid: number,
  date: string,
): Promise<AxiosResponse<SuccessResponse> | null> => {
  const response = await aiLearningAxios.post(
    'place/add-place',
    { contentid, date },
    { headers: { Authorization: `Bearer ${token}` } },
  )
  return response.data
}
