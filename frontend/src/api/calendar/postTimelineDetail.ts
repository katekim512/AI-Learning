import { AxiosResponse } from 'axios'

import { aiLearningAxios } from '../axiosInstance'

export interface PlaceDetailInfo {
  contenttypeid: number
  place: string
  city: string
  addr1: string
  addr2: string
  like: number
  firstimage: string
  firstimage2: string
  mapx: number
  mapy: number
}

export const postTimelineDetail = async (
  token: string,
  contentid: number,
): Promise<AxiosResponse<PlaceDetailInfo> | null> => {
  const response = await aiLearningAxios.post(
    'calendar/timeline-detail',
    { contentid },
    { headers: { Authorization: `Bearer ${token}` } },
  )
  return response
}
