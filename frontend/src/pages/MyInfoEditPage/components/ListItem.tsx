import { Icon } from '@iconify/react'

import * as L from '../styles/MyInfoEdit.style'

const ListItem = () => {
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
      <L.ListItem>
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
