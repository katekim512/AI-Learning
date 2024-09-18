import { AxiosResponse } from 'axios'

import { aiLearningAxios } from '../axiosInstance'

interface SuccessResponse {
  token: string
}

export const postNewAccessToken = async (
  accessToken: string,
  newAccessToken: string,
): Promise<AxiosResponse<SuccessResponse> | null> => {
  const response = await aiLearningAxios.post('members/kakao-new-access', {
    accessToken,
    newAccessToken,
  })
  return response.data
}
