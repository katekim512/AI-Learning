import { styled } from 'styled-components'

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
`

export const HeaderContainer = styled.div`
  background-color: #efefef;
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
`

export const HeaderText = styled.p`
  font-weight: 700;
  font-size: 1.2rem;
  text-align: center;
`

export const ProfileSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.8rem;
`

export const ProfileContainer = styled.div`
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1rem;
  width: 6rem;
  height: 6rem;
  padding: 0.7rem;
`

export const ProfileImage = styled.img`
  height: 100%;
  width: 100%;
  object-cover: cover;
  border-radius: 50%;
`

export const ProfileInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.8rem;
  align-items: flex-start;
`

export const ProfileNickname = styled.p`
  font-weight: 600;
  font-size: 1.5rem;
`

export const ProfileEmail = styled.p`
  font-weight: 400;
  font-size: 1rem;
  color: #565656;
`

export const MiddleButtonContainer = styled.div`
  width: 100%;
  max-width: 400px;
  bottom: 5rem;
  justify-content: space-between;
`

export const MiddleButtonBox = styled.div`
  display: flex;
  background-color: white;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`

export const MiddleButton = styled.button`
  width: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  padding: 0.5rem;
  color: black;
  font-size: 0.9rem;
  font-weight: 400;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
  background-color: white;
`

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem;
  border-bottom: 1px solid #ececec;
`

export const ListTextBox = styled.div`
  line-height: 1.2rem;
`

export const ListName = styled.p`
  font-weight: 600;
  font-size: 0.9rem;
  color: #3a3a3a;
`

export const ListSubName = styled.p`
  font-weight: 400;
  font-size: 0.8rem;
  color: #626262;
`
