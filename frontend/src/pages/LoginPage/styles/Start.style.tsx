import styled from 'styled-components'

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  background-color: #525fd4;
  gap: 1.6rem;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  min-height: -webkit-fill-available;
`

export const HeaderText = styled.p`
  position: fixed;
  top: 0;
  left: 0;
  padding: 1.5rem;
  color: white;
  font-weight: 600;
  font-size: 1.3rem;
  line-height: 2rem;
`

export const BottomText = styled.p`
  position: fixed;
  bottom: 8rem;
  right: 0;
  padding: 1.5rem;
  text-align: end;
  color: white;
  font-weight: 600;
  font-size: 1.3rem;
  line-height: 2rem;
`

export const HighlightPink = styled.span`
  color: #ffc8df;
  font-weight: 700;
`

export const ImgContainer = styled.img`
  object-fit: contain;
  position: fixed;
  left: 0;
  margin-bottom: 10rem;
`

export const Form = styled.form`
  position: fixed;
  bottom: 0;
  padding: 1.5rem;
  width: 100%;
  max-width: 440px;
`

export const Button = styled.button`
  width: 100%;
  max-width: 440px;
  height: 46px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  position: relative;
`

export const LoginButton = styled(Button)`
  background-color: white;
  color: #181600;
  font-weight: 600;
  font-size: 0.95rem;
  margin-top: 5rem;
  margin-bottom: 0.5rem;
`

export const KaKaoButton = styled(Button)`
  background-color: #fee500;
  color: transparent;
  background-image: url('/img/kakao_login_medium_wide.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

export const BottomButton = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`
