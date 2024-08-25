import { AxiosResponse } from 'axios'

import { DateSchedule } from './postTimelineDay'
import { aiLearningAxios } from '../axiosInstance'

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
