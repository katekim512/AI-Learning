import { AxiosResponse } from 'axios'

import { aiLearningAxios } from '../axiosInstance'

export interface DateSchedule {
  memo: string
  date: string
  distance: number[]
  info: PlacePreviewInfo[]
}

export interface PlacePreviewInfo {
  city: string
  place: string
  order: number
  pic: string
  lon: number
  lat: number
}

interface SuccessResponse {
  message: string
}

export const postTimelineFix = async (
  token: string,
  scheduleInfo: DateSchedule,
): Promise<AxiosResponse<SuccessResponse> | null> => {
  const response = await aiLearningAxios.post(
    'calendar/timeline-fix',
    scheduleInfo,
    { headers: { Authorization: `Bearer ${token}` } },
  )
  return response.data
}
