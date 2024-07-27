import { useEffect, useState } from 'react'

import { getMyInfo, User } from '../../../api/auth/getMyInfo'
import { profileUpdate } from '../../../api/profile/postProfileUpdate'
import * as L from '../styles/Profile.style'

const ProfileSection = () => {
  const token = localStorage.getItem('token')
  const [userInfo, setUserInfo] = useState<User>()
  const [, setSelectedFile] = useState<File | null>(null)
  const [previewSrc, setPreviewSrc] = useState<string>(
    userInfo ? userInfo.profile : '/img/profile-default.png',
  )

  const getMyInfoData = async () => {
    if (token) {
      const successResponse = await getMyInfo(token)

      if (successResponse && successResponse.data) {
        setUserInfo(successResponse.data)
      }
    }
  }

  useEffect(() => {
    getMyInfoData()
  }, [])

  const handleFileUpload = () => {
    const fileInput = document.createElement('input')
    fileInput.type = 'file'
    fileInput.accept = 'image/*'
    fileInput.onchange = async e => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (file) {
        setSelectedFile(file)
        setPreviewSrc(URL.createObjectURL(file))

        await handleUploadPhoto(file)
      }
    }
    fileInput.click()
  }

  const handleUploadPhoto = async (file: File) => {
    if (token) {
      const formData = new FormData()
      formData.append('profile', file)

      const successResponse = await profileUpdate(token, formData)
      if (successResponse && successResponse.data) {
        setPreviewSrc(URL.createObjectURL(file))
      }
    }
  }

  return (
    <L.ProfileSection>
      <L.ProfileContainer>
        <L.ProfileImage
          alt='profile'
          src={previewSrc}
          onClick={handleFileUpload}
        />
      </L.ProfileContainer>
      <L.ProfileNickname>{userInfo?.nickname}</L.ProfileNickname>
    </L.ProfileSection>
  )
}

export default ProfileSection
