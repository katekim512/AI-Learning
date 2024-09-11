import axios from 'axios'

// 액세스 토큰 재발급 함수
export const postRefreshAccessToken = async (refreshToken: string) => {
  try {
    const response = await axios.post(
      `https://kauth.kakao.com/oauth/token`,
      null,
      {
        params: {
          grant_type: 'refresh_token',
          client_id: process.env.REACT_APP_KAKAO_CLIENT_ID,
          refresh_token: refreshToken,
        },
        headers: {
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      },
    )
    console.log('새로운 액세스 토큰:', response.data.access_token)
    return response.data.access_token
  } catch (error) {
    console.error('토큰 재발급 요청 실패:', error)
    return null
  }
}
