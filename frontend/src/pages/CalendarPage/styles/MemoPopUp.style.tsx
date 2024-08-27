import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 다크 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const PopUpContainer = styled.div`
  width: 80%;
  max-width: 340px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`

export const PopUpTitle = styled.p`
  font-weight: 700;
  font-size: 1rem;
  margin-left: 0.3rem;
  margin-bottom: 0.5rem;
`

export const InsideContainer = styled.div`
  width: 100%;
  padding: 1rem;
`

export const InputField = styled.textarea`
  width: 100%;
  height: 10rem;
  padding: 0.5rem;
  margin-bottom: 0.7rem;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  box-sizing: border-box;
  resize: none; /* 사용자가 크기 조절 못하게 */
  line-height: 1.5; /* 텍스트 줄 간격 조절 */
  font-family: inherit; /* 부모 폰트 설정 따라감 */
`

export const SaveButton = styled.button`
  background-color: #525fd4;
  width: 100%;
  color: white;
  padding: 0.7rem 1rem;
  border: none;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
`
