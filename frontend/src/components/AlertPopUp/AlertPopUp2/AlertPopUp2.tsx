// import React from 'react'
// import styled from 'styled-components'

// const Overlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5); /* 다크 배경 */
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 999;
// `

// const ModalContainer = styled.div`
//   background-color: white;
//   border-radius: 10px; /* 둥근 모서리 */
//   width: 340px;
//   padding: 20px;
//   text-align: center;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `

// const Title = styled.h2`
//   margin: 0;
//   margin-bottom: 10px;
//   font-size: 18px;
//   font-weight: bold;
//   text-align: center;
// `

// const Message = styled.p`
//   margin: 0;
//   margin-bottom: 20px;
//   font-size: 14px;
//   text-align: center;
// `

// const Divider = styled.hr`
//   border: none;
//   border-top: 1px solid #525fd4; /* 라이트 블루 색상으로 수정 */
//   margin: 0;
//   margin-bottom: 20px;
// `

// const ButtonContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `

// const VerticalDivider = styled.div`
//   width: 1px;
//   background-color: #525fd4; /* 라이트 블루 색상으로 설정 */
//   border-top: 1px solid #525fd4
//   height: 100%; /* auto로 설정하여 컨텐츠에 맞게 높이 자동 조절 */
// `

// const Button = styled.button`
//   background-color: white; /* 버튼 배경을 흰색으로 설정 */
//   color: black; /* 버튼 텍스트를 검은색으로 설정 */
//   border: none;
//   border-radius: 0; /* 테두리 둥글기 제거 */
//   padding: 10px 20px;
//   cursor: pointer;
//   font-size: 14px;
//   flex: 1;

//   &:hover {
//     background-color: #f0f0f0; /* 호버 시 배경 색상 약간 어둡게 */
//   }

//   &:nth-child(2) {
//     color: #007bff; /* 네 버튼의 텍스트 색상을 파란색으로 설정 */
//   }
// `

// // Props 타입 정의
// interface AlertPopUp2Props {
//   message: string
//   onConfirm: () => void
//   onCancel: () => void
// }

// const AlertPopUp2: React.FC<AlertPopUp2Props> = ({
//   message,
//   onConfirm,
//   onCancel,
// }) => {
//   return (
//     <Overlay>
//       <ModalContainer>
//         <Title>알림</Title>
//         <Message>{message}</Message>
//         <Divider />
//         <ButtonContainer>
//           <Button onClick={onCancel}>아니요</Button>
//           <VerticalDivider />
//           <Button onClick={onConfirm}>네</Button>
//         </ButtonContainer>
//       </ModalContainer>
//     </Overlay>
//   )
// }

// export default AlertPopUp2
import React from 'react'
import styled from 'styled-components'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`

const ModalContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 278px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
`

const Title = styled.h2`
  margin: 0;
  padding-top: 20px;
  padding-bottom: 5px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`

const Message = styled.p`
  margin: 0;
  padding: 30px;
  line-height: 1.5;
  font-size: 14px;
  text-align: center;
`

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #525fd4;
  margin: 0;
`

const ButtonContainer = styled.div`
  width: 100%;
  height: 50px; /* 높이를 50px로 설정 */
`

const Button1 = styled.button`
  float: center;
  background-color: white;
  width: 45%;
  height: 100%; /* 부모 컨테이너의 높이에 맞춤 */
  border: 0;
  padding-right: 15px;
  font-size: 15px;
  cursor: pointer;
  border-right: 0.5px solid #525fd4;
`
const Button2 = styled.button`
  float: center;
  background-color: white;
  width: 45%;
  height: 100%; /* 부모 컨테이너의 높이에 맞춤 */
  border: 0;
  padding-left: 15px;
  font-size: 15px;
  cursor: pointer;
  border-left: 0.5px solid #525fd4;
`

// Props 타입 정의
interface AlertPopUp2Props {
  message: string
  onConfirm: () => void
  onCancel: () => void
}

const AlertPopUp2: React.FC<AlertPopUp2Props> = ({
  message,
  onConfirm,
  onCancel,
}) => {
  return (
    <>
      <div className='popup_dimmed'></div> {/* 팝업 백그라운드 */}
      <Overlay>
        <ModalContainer>
          <Title>알림</Title>
          <Message>{message}</Message>
          <Divider />
          <ButtonContainer>
            <Button1 className='no' onClick={onCancel}>
              아니요
            </Button1>
            <Button2 onClick={onConfirm}>네</Button2>
          </ButtonContainer>
        </ModalContainer>
      </Overlay>
    </>
  )
}

export default AlertPopUp2
