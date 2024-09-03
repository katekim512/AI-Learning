import { AxiosResponse } from 'axios'

import { aiLearningAxios } from '../axiosInstance'

export interface PlaceAllPreviewInfo {
  contentid: number
  contenttypeid: number
  areacode: number
  sigungucode: number
  place: string
  firstimage: string
  city?: string
}

export const getAllPlace = async (
  token: string,
): Promise<AxiosResponse<PlaceAllPreviewInfo[]> | null> => {
  const response = await aiLearningAxios.get('calendar/all-place', {
    headers: { Authorization: `Bearer ${token}` },
  })
  return response.data
}
