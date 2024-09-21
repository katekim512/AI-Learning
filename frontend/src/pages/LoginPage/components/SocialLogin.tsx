import * as L from '../styles/Start.style'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const kakao = (window as any).Kakao

const SocialLogin = () => {
  const url = 'https://ai-learning-kappa.vercel.app/start/oauth'

  return (
    <>
      <L.KaKaoButton
        onClick={() =>
          kakao.Auth.authorize({
            redirectUri: `${url}`,
            scope: 'profile_image,account_email',
          })
        }
      >
        카카오로 간편로그인
      </L.KaKaoButton>
    </>
  )
}

export default SocialLogin
