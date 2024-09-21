import { AxiosResponse } from 'axios'

import { aiLearningAxios } from '../axiosInstance'

interface SuccessResponse {
  message: string
}

export const deleteRemove = async (
  token: string,
): Promise<AxiosResponse<SuccessResponse> | null> => {
  const response = await aiLearningAxios.delete('members/remove', {
    headers: { Authorization: `Bearer ${token}` },
  })
  return response
}
