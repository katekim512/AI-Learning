import { AxiosResponse } from 'axios'

import { aiLearningAxios } from '../axiosInstance'

interface AlertDeleteBody {
  date: string
  contentid: number
}
interface SuccessResponse {
  message: string
}

export const alertDelete = async (
  token: string,
  alertDeleteBody: AlertDeleteBody,
): Promise<AxiosResponse<SuccessResponse>> => {
  const response = await aiLearningAxios.post(
    'profile/alert-delete',
    alertDeleteBody,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )
  return response
}
