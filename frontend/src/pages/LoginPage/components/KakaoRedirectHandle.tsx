import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { kakaoCallback } from '../../../api/auth/postKakaoCallback'
import { postNewAccessToken } from '../../../api/auth/postNewAccessToken'
import useLikeList from '../../../hooks/useLikeList'
import { useUser } from '../../../hooks/useUser'
import authToken from '../../../stores/authToken'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const kakao = (window as any).Kakao

const KakaoRedirectHandle = () => {
  const navigate = useNavigate()
  const { refetch: refetchUser } = useUser() // refetch 함수를 사용하여 로그인 후 유저 정보를 갱신
  const { refetch: refetchLikeList } = useLikeList() // 좋아요 리스트 갱신

  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams
    const code = params.get('code')
    const grant_type = 'authorization_code'
    const client_id = process.env.REACT_APP_KAKAO_CLIENT_ID
    const url = 'http://localhost:3000'
    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${url}/login/oauth&code=${code}`,
        {
          headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
        },
      )
      .then(async res => {
        console.log(res)
        const accessToken = res.data.access_token
        const refreshToken = res.data.refresh_token
        kakao.Auth.setAccessToken(accessToken)

        getUserInfo(accessToken, refreshToken)
      })
      .catch(error => {
        console.error('카카오 토큰 요청 실패:', error)
      })
  }, [navigate])

  const getUserInfo = (accessToken: string, refreshToken: string) => {
    kakao.API.request({
      url: '/v2/user/me',
    })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then(async (response: any) => {
        console.log(response)
        const callbackResponse = await kakaoCallback(accessToken)
        if (callbackResponse?.data.userExists) {
          authToken.setAccessToken(accessToken)
          await refetchUser()
          await refetchLikeList()
          navigate('/calendar')
        } else {
          navigate('/register', { state: { accessToken } })
        }
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch(async (error: any) => {
        console.error('카카오 사용자 정보 요청 실패:', error)

        // 401 에러가 발생하면 액세스 토큰 재발급 요청
        if (error.response && error.response.status === 401) {
          const newAccessToken = await refreshAccessToken(refreshToken)
          if (newAccessToken) {
            await postNewAccessToken(newAccessToken) // 백엔드에 새로운 액세스 토큰 저장

            // 재발급 받은 액세스 토큰으로 사용자 정보 다시 요청
            kakao.Auth.setAccessToken(newAccessToken)
            getUserInfo(newAccessToken, refreshToken)
          } else {
            console.error('액세스 토큰 재발급 실패')
          }
        }
      })
  }

  // 액세스 토큰 재발급 함수
  const refreshAccessToken = async (refreshToken: string) => {
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

  return <></>
}

export default KakaoRedirectHandle
