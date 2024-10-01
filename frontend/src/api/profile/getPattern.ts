import { aiLearningAxios } from '../axiosInstance'

interface SuccessResponse {
  id: number
  email: string
  nickname: string
  character: string
  pattern: string
  description: string
}

export const getPattern = async (token: string): Promise<SuccessResponse> => {
  const response = await aiLearningAxios.get<SuccessResponse>(
    'profile/pattern',
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  )
  return response.data
}
