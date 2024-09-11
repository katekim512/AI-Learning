import { useQuery } from 'react-query'

import { VisitedPlace, getVisited } from '../api/profile/getVisited'
import authToken from '../stores/authToken'

const useVisitedList = () => {
  const token = authToken.getAccessToken()

  const { data, isLoading, isError, refetch } = useQuery<VisitedPlace[]>(
    ['visitedList', token],
    async () => {
      if (!token) return []
      const response = await getVisited(token)
      return response?.data || []
    },
    {
      enabled: !!token,
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
      onError: error => {
        console.error('Error fetching visited list:', error)
      },
    },
  )

  return { visitedList: data, isLoading, isError, refetch }
}

export default useVisitedList
