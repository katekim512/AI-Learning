import { AxiosResponse } from 'axios'

import { aiLearningAxios } from '../axiosInstance'

interface CallbackResponse {
  userExists: boolean
  token: string
}

export const kakaoCallback = async (
  accessToken: string,
): Promise<AxiosResponse<CallbackResponse> | null> => {
  const response = await aiLearningAxios.post('members/kakao-callback', {
    accessToken,
  })
  return response
}
