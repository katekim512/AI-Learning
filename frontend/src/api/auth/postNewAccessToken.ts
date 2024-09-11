import { AxiosResponse } from 'axios'

import { aiLearningAxios } from '../axiosInstance'

interface SuccessResponse {
  accessToken: string
}

export const postNewAccessToken = async (
  accessToken: string,
): Promise<AxiosResponse<SuccessResponse> | null> => {
  const response = await aiLearningAxios.post('members/kakao-new-access', {
    accessToken,
  })
  return response.data
}
