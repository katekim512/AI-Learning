import { useState } from 'react'
import { useQueryClient } from 'react-query'

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
      <L.ProfileContainer>
        <L.ProfileImage
          alt='profile'
          src={previewSrc}
          onClick={handleFileUpload}
        />
      </L.ProfileContainer>
    </>
  )
}

export default MyInfoEdit
