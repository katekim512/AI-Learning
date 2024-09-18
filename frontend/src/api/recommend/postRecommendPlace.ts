import { AxiosResponse } from 'axios'

import { aiLearningAxios } from '../axiosInstance'

interface RecommendPlace {
  contentid: number
  contenttypeid: number
  areacode: number
  sigungucode: number
  place: string
  firstimage: string
}

// POST 요청 함수
export const postRecommendPlace = async (
  token: string,
  areacode: number[],
  sigungucode: number | null,
): Promise<AxiosResponse<RecommendPlace[]> | null> => {
  try {
    const response = await aiLearningAxios.post(
      'recommend/recommend-place',
      { areacode, sigungucode },
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
