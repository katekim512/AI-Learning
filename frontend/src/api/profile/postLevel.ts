import { AxiosResponse } from 'axios'

import { aiLearningAxios } from '../axiosInstance'

// Request 바디의 인터페이스
interface LevelRequest {
  level: string
}

// Response 바디의 인터페이스
interface LevelResponse {
  contentid: number
  contenttypeid: number
  areacode: number
  sigungucode: number
  place: string
  firstimage: string
  isVisited: boolean
}

// POST 요청 함수
export const postLevel = async (
  token: string,
  recommends: LevelRequest,
): Promise<AxiosResponse<LevelResponse> | null> => {
  try {
    const response = await aiLearningAxios.post<LevelResponse>(
      'profile/level',
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
