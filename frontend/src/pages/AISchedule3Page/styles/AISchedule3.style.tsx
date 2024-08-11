import styled from 'styled-components'

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: calc(100vh - 5rem); /* BackButton 높이만큼 빼기 */
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 2rem;
  padding-top: 6rem; /* BackButton 높이만큼 추가 */
`

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
`

export const ScheduleContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  position: relative;
  margin-bottom: 0.7rem;
`

export const DateBox = styled.p`
  background-color: #bfddff;
  width: 7rem;
  border-radius: 15px;
  padding: 0.6rem;
  color: #545454;
  font-size: 0.8rem;
  font-weight: 600;
  text-align: center;
  margin-right: 0.5rem;
`

// export const PlaceBox = styled.button`
//   background-color: #f4f4f4;
//   position: relative;
//   width: 100%;
//   border-radius: 15px;
//   border: none;
//   padding: 0.6rem;
//   color: #545454;
//   font-size: 0.8rem;
//   font-weight: 600;
//   cursor: pointer;
// `

// export const CityBox = styled.p`
//   position: absolute;
//   left: 1rem;
//   top: 0.3rem;
//   background-color: #525fd4;
//   border-radius: 8px;
//   padding: 0.3rem;
//   color: white;
//   font-size: 0.7rem;
//   font-weight: 600;
// `

export const PlaceBox = styled.button`
  background-color: #f4f4f4;
  position: relative;
  display: flex; /* Flexbox 사용 */
  align-items: center; /* 세로 정렬 */
  justify-content: flex-start;
  width: 100%;
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
