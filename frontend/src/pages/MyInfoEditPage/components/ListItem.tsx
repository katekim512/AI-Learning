import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'

import authKakaoToken from '../../../stores/authKakaoToken'
import authToken from '../../../stores/authToken'
import * as L from '../styles/MyInfoEdit.style'

const ListItem = () => {
  const navigate = useNavigate()

  const handleLogoutButton = () => {
    authToken.removeToken()
    authKakaoToken.removeTokens()
    navigate('/')
  }

  return (
    <>
      <L.ListItem>
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
      <L.ListItem>
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
      <L.ListItem>
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
    </>
  )
}

export default ListItem
