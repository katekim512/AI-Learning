import { Icon } from '@iconify/react'
import styled from 'styled-components'

export const GradientIcon = styled(Icon)`
  background: linear-gradient(45deg, #f3ec78, #af4261);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 24px;
  height: 24px;
  margin-right: 5px;
`

interface ScheduleContainerProps {
  isSwiped: boolean
}

export const ContainerTotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* 수평 중앙 정렬 */
  justify-content: center;
  //position: fixed;
  width: 100%;
`

export const Container1 = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 400px;
  height: 10rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 2rem;
  padding-top: 5rem;
  margin-bottom: 1rem;
  background-color: #fff;
  margin: 1rem auto;
  margin-top: -1rem;
`

export const Divider = styled.div`
  width: 90%;
  max-width: 400px;
  height: 1px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: #d9d9d9;
  z-index: 1;
  margin: 0 auto;
`

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 400px;
  height: calc(
    100vh - 14rem
  ); /* 화면 높이에서 Container1과 버튼의 높이를 제외한 값 */
  display: flex;
  flex-direction: column;
  //gap: 1.6rem;
  padding: 2rem;
  padding-top: 1rem;
  overflow-y: auto;
  background-color: #fff;
  margin: -1px auto;
`

// export const Container = styled.div`
//   box-sizing: border-box;
//   width: 100%;
//   height: calc(100vh - 3rem);
//   display: flex;
//   flex-direction: column;
//   gap: 1.6rem;
//   padding: 2rem;
//   padding-top: 4rem;
//   overflow-y: auto;
// `

export const Title = styled.div`
  line-height: 1.8rem;
  margin-bottom: 1rem;
`

export const Text = styled.p`
  font-size: 1.3rem;
  font-weight: 700;
`

export const AdditionText = styled.p`
  font-size: 0.8rem;
  font-weight: 400;
  margin-top: 0.5rem;
  line-height: 1.3rem;
  margin-bottom: 1rem;
`

export const ScheduleContainer = styled.div<ScheduleContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  margin-bottom: 0.7rem;
  position: relative; /* 삭제 버튼을 절대 위치로 설정하기 위해 필요 */
  transform: ${({ isSwiped }) =>
    isSwiped ? 'translateX(-50px)' : 'translateX(0)'};
  transition: transform 0.3s ease;
  width: 100%; /* 가로 길이 유지 */
`
export const DateBox = styled.p`
  background-color: #bfddff;
  width: 7rem;
  height: 2rem; // 높이를 명시적으로 지정
  border-radius: 15px;
  color: #545454;
  font-size: 0.8rem;
  font-weight: 600;
  margin-right: 0.5rem;

  // Flexbox를 사용하여 내용을 중앙 정렬
  display: flex;
  justify-content: center;
  align-items: center;

  // 텍스트가 여러 줄일 경우를 대비한 설정
  text-align: center;
`

export const PlaceBox = styled.button`
  background-color: #f4f4f4;
  position: relative;
  display: flex; /* Flexbox 사용 */
  align-items: center; /* 세로 정렬 */
  justify-content: flex-start;
  width: 100%;
  height: 2rem;
  border-radius: 15px;
  border: none;
  padding: 0.6rem;
  color: #545454;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
`

export const CityBox = styled.p`
  background-color: #525fd4;
  border-radius: 8px;
  padding: 0.3rem;
  color: white;
  font-size: 0.7rem;
  font-weight: 600;
  margin-right: 0rem; /* 오른쪽 여백 추가 */
`

export const PlaceName = styled.span`
  //flex-grow: 1; /* 남은 공간을 차지 */
  margin-left: 20px;
  color: #545454;
  justify-content: flex-start;
  font-size: 0.8rem;
  font-weight: 600;
  //width: 100px;
`

export const IconContainer = styled.span`
  color: #545454;
  justify-content: flex-start;
  font-size: 0.8rem;
  font-weight: 600;
  margin-left: auto;
`
export const BottomButton = styled.button`
  position: absolute;
  align-items: center;
  margin-top: 0px;
  padding-top: 0px;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 3rem);
  max-width: 352px;
  height: 46px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  color: white;
  font-weight: 600;
  background-color: #525fd4;
  cursor: pointer;
  box-sizing: border-box;
  &:hover {
    background-color: #434cb1;
  }
`

export const DeleteButton = styled.button`
  position: absolute;
  right: 10px;
  top: 40%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%; /* ScheduleContainer와 같은 높이로 설정 */
`

export const MinusCircleIcon = styled.div`
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23d20000' d='M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m5 11H7v-2h10z'/%3E%3C/svg%3E");
  margin-right: 8px; /* Space between icon and text */
`
// export const GradientIcon = styled.span`
//   background: linear-gradient(to right, #00c6ff, #0072ff);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   display: inline-block;
// `

export const GuideRequestButton = styled.button`
  padding: 0 0 0 5px; /* top, right, bottom, left */
  margin-top: 0px;
  background: transparent; // 배경을 투명하게 설정
  border: none;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  position: relative; // z-index 컨텍스트를 생성합니다
  z-index: 0;

  // 텍스트에만 그라데이션 적용
  background-image: linear-gradient(to right, #00c6ff, #0072ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: #0072ff; /* 텍스트 색상을 투명하게 설정하여 그라데이션이 보이도록 함 */

  &:hover {
    text-decoration: none;
  }
`
