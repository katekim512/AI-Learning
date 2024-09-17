import { AxiosResponse } from 'axios'

import { aiLearningAxios } from '../axiosInstance'

// Request 바디의 인터페이스
interface AddRequest {
  contentid: number
  date: string
}

type AddResponse = {
  message: string
}

// POST 요청 함수
export const postAddPlace = async (
  token: string,
  recommends: AddRequest,
): Promise<AxiosResponse<AddResponse> | null> => {
  try {
    const response = await aiLearningAxios.post<AddResponse>(
      'place/add-place',
      recommends,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    )
    return response
  } catch (error) {
    console.error('Error uploading edits:', error)
    return null
  }
}
