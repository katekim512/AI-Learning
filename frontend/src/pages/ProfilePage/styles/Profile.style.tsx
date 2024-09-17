import styled from 'styled-components'

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`

export const ProfileHeaderSection = styled.div`
  justify-content: space-between;
  display: flex;
`

export const HeaderIcon = styled.div`
  display: flex;
  margin-top: 1.7rem;
  margin-right: 1.7rem;
  cursor: pointer;
`

export const ProfileSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`

export const Title = styled.div`
  margin-top: 1.7rem;
  margin-left: 1.7rem;
  text-align: left;
  font-size: 1.2rem;
  font-weight: 700;
`

export const ProfileContainer = styled.div`
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1.8rem;
  width: 6rem;
  height: 6rem;
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
  font-weight: 700;
  font-size: 1.5rem;
`

export const ProfileEditInfo = styled.p`
  font-weight: 400;
  font-size: 1rem;
  color: #565656;
  cursor: pointer;
`

export const BottomButton = styled.button`
  width: 100%;
  max-width: 400px;
  height: 46px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  color: white;
  font-weight: 600;
  background-color: #525fd4;
  cursor: pointer;
  position: relative;
  &:hover {
    background-color: #434cb1;
  }
`
