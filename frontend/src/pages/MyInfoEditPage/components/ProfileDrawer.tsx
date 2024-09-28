import { useState } from 'react'
import { useQueryClient } from 'react-query'

import CloseButton from './CloseButton/CloseButton'
import { profileUpdate } from '../../../api/profile/postProfileUpdate'
import { useUser } from '../../../hooks/useUser'
import authToken from '../../../stores/authToken'
import * as L from '../styles/ProfileDrawer.style'

const ProfileDrawer = ({
  setDrawerOpen,
  onProfileUpdate,
}: {
  setDrawerOpen: (open: boolean) => void
  onProfileUpdate: (newProfileSrc: string) => void
}) => {
  const { data: userInfo, refetch } = useUser()
  const queryClient = useQueryClient()
  const [, setSelectedFile] = useState<File | null>(null)
  const [, setPreviewSrc] = useState<string>(
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
        const newProfileUrl = URL.createObjectURL(file) // 새로운 프로필 이미지 URL 생성
        setPreviewSrc(newProfileUrl)

        // refetch로 데이터 갱신 및 onProfileUpdate 호출
        await refetch()
        queryClient.invalidateQueries('user')

        // 부모 컴포넌트에 새로운 프로필 이미지 URL 전달
        onProfileUpdate(newProfileUrl)
      }
    }
  }

  const handleCloseDrawer = () => {
    setDrawerOpen(false)
  }

  return (
    <L.Overlay
      onClick={e => {
        if (e.target === e.currentTarget) setDrawerOpen(false)
      }}
    >
      <L.DrawerContainer onClick={e => e.stopPropagation()}>
        <L.DrawerHeader>
          <L.DrawerHeaderText>프로필 이미지 변경</L.DrawerHeaderText>
          <CloseButton onClick={handleCloseDrawer} />
        </L.DrawerHeader>
        <L.DrawerBottom onClick={handleFileUpload}>
          <L.DrawerBottomBox>사진 올리기</L.DrawerBottomBox>
        </L.DrawerBottom>
      </L.DrawerContainer>
    </L.Overlay>
  )
}

export default ProfileDrawer
