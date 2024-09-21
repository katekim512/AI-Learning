import { useState } from 'react'
import { useQueryClient } from 'react-query'

import BackButton from './components/BackButton/BackButton'
import ListItem from './components/ListItem'
import * as L from './styles/MyInfoEdit.style'
import { profileUpdate } from '../../api/profile/postProfileUpdate'
import { useUser } from '../../hooks/useUser'
import authToken from '../../stores/authToken'

const MyInfoEdit = () => {
  const { data: userInfo, refetch } = useUser()
  const queryClient = useQueryClient()
  const [, setSelectedFile] = useState<File | null>(null)
  const [previewSrc, setPreviewSrc] = useState<string>(
    userInfo ? userInfo.profile : '/img/profile-default.png',
  )

  const handleFileUpload = () => {
    const fileInput = document.createElement('input')
    fileInput.type = 'file'
    fileInput.accept = 'image/*'
    fileInput.onchange = async e => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (file) {
        setSelectedFile(file)
        await handleUploadPhoto(file)
      }
    }
    fileInput.click()
  }

  const handleUploadPhoto = async (file: File) => {
    const token = authToken.getAccessToken()
    if (token) {
      const formData = new FormData()
      formData.append('profile', file)

      const successResponse = await profileUpdate(token, formData)
      if (successResponse && successResponse.data) {
        setPreviewSrc(URL.createObjectURL(file))

        await refetch()
        queryClient.invalidateQueries('user')
      }
    }
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
            <L.ProfileImage
              alt='profile'
              src={previewSrc}
              onClick={handleFileUpload}
            />
          </L.ProfileContainer>
          <L.ProfileInfoSection>
            <L.ProfileNickname>{userInfo?.nickname}</L.ProfileNickname>
            <L.ProfileEmail>{userInfo?.email}</L.ProfileEmail>
          </L.ProfileInfoSection>
        </L.ProfileSection>
        <L.MiddleButtonContainer>
          <L.MiddleButtonBox>
            <L.MiddleButton>프로필 이미지 변경</L.MiddleButton>
            <L.MiddleButton>닉네임 변경</L.MiddleButton>
          </L.MiddleButtonBox>
        </L.MiddleButtonContainer>
        <ListItem />
      </L.Container>
    </>
  )
}

export default MyInfoEdit
