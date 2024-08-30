import { aiLearningAxios } from '../axiosInstance'
import { PlaceAllPreviewInfo } from '../calendar/getAllPlace'

export const getLike = async (
  token: string,
): Promise<PlaceAllPreviewInfo[]> => {
  const response = await aiLearningAxios.get<PlaceAllPreviewInfo[]>(
    'profile/get-like',
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  )
  return response.data
}
