import axios from 'axios'

import { postNewAccessToken } from './auth/postNewAccessToken'
import { postRefreshAccessToken } from './auth/postRefreshAccessToken'
import authToken from '../stores/authToken'
import { isAxios401Error } from '../utils/isAxios401Error'

const url = process.env.REACT_APP_API_URL

if (!url) {
  throw new Error('REACT_APP_API_URL 환경 변수가 설정되지 않았습니다.')
}

export const aiLearningAxios = axios.create({
  baseURL: url,
  withCredentials: true,
})

// 요청 인터셉터 설정: 필요한 요청 설정만 추가
aiLearningAxios.interceptors.request.use(
  config => {
    // 요청을 그대로 통과시키거나 필요한 설정만 추가
    return config
  },
  error => Promise.reject(error),
)

// 응답 인터셉터 설정: 401 에러 시 자동 토큰 재발급
aiLearningAxios.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config

    // isAxios401Error 함수를 사용하여 401 에러를 감지
    if (isAxios401Error(error) && !originalRequest._retry) {
      originalRequest._retry = true
      try {
        const refreshToken = authToken.getRefreshToken()
        if (refreshToken) {
          const newAccessToken = await postRefreshAccessToken(refreshToken)
          if (newAccessToken) {
            // 새로운 액세스 토큰 저장
            authToken.setAccessToken(newAccessToken)
            await postNewAccessToken(newAccessToken) // 백엔드에 새로운 토큰 저장

            // 원래 요청에 새로운 토큰을 설정하고 재시도
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
            return aiLearningAxios(originalRequest)
          }
        }
      } catch (tokenError) {
        console.error('토큰 재발급 실패:', tokenError)
        // 재발급 실패 시 로그아웃 또는 다른 처리
      }
    }

    return Promise.reject(error)
  },
)
