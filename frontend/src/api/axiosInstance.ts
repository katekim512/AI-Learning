import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { isAxios401Error } from '../utils/isAxios401Error'

const url = process.env.REACT_APP_API_URL

if (!url) {
  throw new Error('REACT_APP_API_URL 환경 변수가 설정되지 않았습니다.')
}

export const aiLearningAxios = axios.create({
  baseURL: url,
  withCredentials: true,
})

export const setupAxiosInterceptors = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate()

  aiLearningAxios.interceptors.response.use(
    response => response, // 성공적인 응답은 그대로 반환
    error => {
      if (isAxios401Error(error)) {
        // 401 에러 발생 시 '/'로 이동
        navigate('/')
      }
      return Promise.reject(error)
    },
  )
}
