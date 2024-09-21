import { Icon } from '@iconify/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { deleteRemove } from '../../../api/auth/deleteRemove'
import AlertPopUp2 from '../../../components/AlertPopUp/AlertPopUp2/AlertPopUp2'
import authKakaoToken from '../../../stores/authKakaoToken'
import authToken from '../../../stores/authToken'
import * as L from '../styles/MyInfoEdit.style'

const ListItem = () => {
  const token = authToken.getAccessToken()
  const navigate = useNavigate()
  const [isAlertVisible, setIsAlertVisible] = useState(false)

  const handleMoveChangeInfo = () => {
    navigate('/change-info')
  }

  const handleMoveChangePassword = () => {
    navigate('/check-password')
  }

  const handleLogoutButton = () => {
    authToken.removeToken()
    authKakaoToken.removeTokens()
    navigate('/')
  }

  const handleDeleteUserClick = () => {
    setIsAlertVisible(true)
  }

  const handleDeleteUser = async () => {
    if (token) {
      try {
        await deleteRemove(token)
        authToken.removeToken()
        authKakaoToken.removeTokens()
        navigate('/')
      } catch (error) {
        console.error('회원 탈퇴 중 오류 발생:', error)
      }
    }
  }

  const handleCancel = () => {
    setIsAlertVisible(false)
  }

  return (
    <>
      <L.ListItem onClick={handleMoveChangeInfo}>
        <L.ListTextBox>
          <L.ListName>회원정보 변경</L.ListName>
          <L.ListSubName>자녀 출생년도, 사는 곳</L.ListSubName>
        </L.ListTextBox>
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
      </L.ListItem>

      <L.ListItem onClick={handleMoveChangePassword}>
        <L.ListTextBox>
          <L.ListName>비밀번호 변경</L.ListName>
        </L.ListTextBox>
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
      </L.ListItem>

      <L.ListItem onClick={handleLogoutButton}>
        <L.ListTextBox>
          <L.ListName>로그아웃</L.ListName>
        </L.ListTextBox>
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
      </L.ListItem>

      <L.ListItem onClick={handleDeleteUserClick}>
        <L.ListTextBox>
          <L.ListName>회원탈퇴</L.ListName>
        </L.ListTextBox>
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
      </L.ListItem>

      {isAlertVisible && (
        <AlertPopUp2
          message='정말 탈퇴하시겠습니까?'
          onConfirm={handleDeleteUser}
          onCancel={handleCancel}
        />
      )}
    </>
  )
}

export default ListItem
