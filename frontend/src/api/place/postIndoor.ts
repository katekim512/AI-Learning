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

export const postIndoor = async (
  token: string,
  date: string,
  contentid: number,
): Promise<AxiosResponse<RecommendPlace[]> | null> => {
  const response = await aiLearningAxios.post(
    'place/indoor',
    { date, contentid },
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  )
  return response
}
