import { AxiosResponse } from 'axios'

import { aiLearningAxios } from '../axiosInstance'

// Request 바디의 인터페이스
interface RecommendRequest {
  date: string
}

// Response 바디의 인터페이스
interface RecommendPlace {
  contentid: number
  contenttypeid: number
  areacode: number
  sigungucode: number
  place: string
  firstimage: string
}

type RecommendResponse = RecommendPlace[]

// POST 요청 함수
export const postRecommendPlace = async (
  token: string,
  recommends: RecommendRequest,
): Promise<AxiosResponse<RecommendResponse> | null> => {
  try {
    const response = await aiLearningAxios.post<RecommendResponse>(
      'calendar/recommend-place',
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
