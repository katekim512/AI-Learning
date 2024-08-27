import { AxiosResponse } from 'axios'

import { aiLearningAxios } from '../axiosInstance'

export interface PlaceAllPreviewInfo {
  city: string
  place: string
  pic: string
  lon: number
  lat: number
}

export const getAllPlace = async (
  token: string,
): Promise<AxiosResponse<PlaceAllPreviewInfo[]> | null> => {
  const response = await aiLearningAxios.get('calendar/all-place', {
    headers: { Authorization: `Bearer ${token}` },
  })
  return response.data
}
