import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import BackButton from './components/BackButton/BackButton'
import ListItem from './components/ListItem'
import ProfileDrawer from './components/ProfileDrawer'
import * as L from './styles/MyInfoEdit.style'
import { useUser } from '../../hooks/useUser'

const MyInfoEdit = () => {
  const navigate = useNavigate()
  const { data: userInfo } = useUser()
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false)
  const [previewSrc, setPreviewSrc] = useState<string>(
    userInfo ? userInfo.profile : '/img/profile-default.png',
  )

  const handleMoveNickname = () => {
    navigate('/change-nickname')
  }

  const handleChangeImage = () => {
    setDrawerOpen(true)
  }

  const handleProfileUpdate = (newProfileSrc: string) => {
    setPreviewSrc(newProfileSrc) // 프로필 이미지 상태 업데이트
    setDrawerOpen(false) // Drawer 닫기
  }

  return (
    <>
      <L.Container>
        <L.HeaderContainer>
          <BackButton />
          <L.HeaderText>프로필</L.HeaderText>
        </L.HeaderContainer>
        <L.ProfileSection>
          <L.ProfileContainer>
            <L.ProfileImage alt='profile' src={previewSrc} />
          </L.ProfileContainer>
          <L.ProfileInfoSection>
            <L.ProfileNickname>{userInfo?.nickname}</L.ProfileNickname>
            <L.ProfileEmail>{userInfo?.email}</L.ProfileEmail>
          </L.ProfileInfoSection>
        </L.ProfileSection>
        <L.MiddleButtonContainer>
          <L.MiddleButtonBox>
            <L.MiddleButton onClick={handleChangeImage}>
              프로필 이미지 변경
            </L.MiddleButton>
            <L.MiddleButton onClick={handleMoveNickname}>
              닉네임 변경
            </L.MiddleButton>
          </L.MiddleButtonBox>
        </L.MiddleButtonContainer>
        <ListItem />
      </L.Container>
      {drawerOpen && (
        <ProfileDrawer
          setDrawerOpen={setDrawerOpen}
          onProfileUpdate={handleProfileUpdate}
        />
      )}
    </>
  )
}

export default MyInfoEdit
