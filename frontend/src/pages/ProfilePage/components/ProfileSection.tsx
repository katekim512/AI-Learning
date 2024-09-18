import { Icon } from '@iconify/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useUser } from '../../../hooks/useUser'
import authKakaoToken from '../../../stores/authKakaoToken'
import authToken from '../../../stores/authToken'
import * as L from '../styles/Profile.style'

const ProfileSection = () => {
  const navigate = useNavigate()
  const { data: userInfo } = useUser()
  const [previewSrc] = useState<string>(
    userInfo ? userInfo.profile : '/img/profile-default.png',
  )

  const handleLogoutButton = () => {
    authToken.removeToken()
    authKakaoToken.removeTokens()
    navigate('/')
  }

  const handleMyInfoEdit = () => {
    navigate('/my-info')
  }

  return (
    <>
      <L.ProfileHeaderSection>
        <L.Title>프로필</L.Title>
        <L.HeaderIcon>
          <Icon icon='ph:bell' width='24' height='24' />
          <Icon
            icon='line-md:logout'
            width='24'
            height='24'
            style={{ marginLeft: '6px' }}
            onClick={handleLogoutButton}
          />
        </L.HeaderIcon>
      </L.ProfileHeaderSection>
      <L.ProfileSection>
        <L.ProfileContainer onClick={handleMyInfoEdit}>
          <L.ProfileImage alt='profile' src={previewSrc} />
        </L.ProfileContainer>
        <L.ProfileInfoSection>
          <L.ProfileNickname>{userInfo?.nickname}</L.ProfileNickname>
          <L.ProfileEditInfo onClick={handleMyInfoEdit}>
            내 정보 수정
            <Icon
              icon='oui:arrow-up'
              width='15'
              height='15'
              style={{
                transform: 'rotate(90deg)',
                position: 'relative',
                top: '2.5px',
              }}
            />
          </L.ProfileEditInfo>
        </L.ProfileInfoSection>
      </L.ProfileSection>
    </>
  )
}

export default ProfileSection
