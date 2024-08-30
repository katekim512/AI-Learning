import { useQuery } from 'react-query'

import { PlaceAllPreviewInfo } from '../api/calendar/getAllPlace'
import { getLike } from '../api/profile/getLike'
import authToken from '../stores/authToken'

const useLikeList = () => {
  const token = authToken.getAccessToken()

  const { data, isLoading, isError, refetch } = useQuery<PlaceAllPreviewInfo[]>(
    ['likeList', token],
    async () => {
      if (!token) return []
      const response = await getLike(token)
      return response || []
    },
    {
      enabled: !!token,
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
      onError: error => {
        console.error('Error fetching like list:', error)
      },
    },
  )

  return { likeList: data, isLoading, isError, refetch }
}

export default useLikeList
