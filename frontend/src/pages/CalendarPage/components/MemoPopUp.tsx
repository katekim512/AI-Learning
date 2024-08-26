import React, { useState } from 'react'

import * as L from '../styles/MemoPopUp.style'

interface MemoPopUpProps {
  initialMemo?: string
  onSave: (memo: string) => void
  onClose: () => void
}

const MemoPopUp: React.FC<MemoPopUpProps> = ({
  initialMemo = '',
  onSave,
  onClose,
}) => {
  const [memo, setMemo] = useState(initialMemo)

  const handleMemoChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length <= 100) {
      setMemo(event.target.value)
    }
  }

  const handleSaveClick = () => {
    onSave(memo)
  }

  const handleOverlayClick = () => {
    onClose()
  }

  const handlePopUpClick = (event: React.MouseEvent) => {
    event.stopPropagation()
  }

  return (
    <L.Overlay onClick={handleOverlayClick}>
      <L.PopUpContainer onClick={handlePopUpClick}>
        <L.InsideContainer>
          <L.PopUpTitle>메모 작성하기</L.PopUpTitle>
          <L.InputField
            value={memo}
            onChange={handleMemoChange}
            placeholder='메모를 입력하세요 (최대 100자)'
          />
          <L.SaveButton onClick={handleSaveClick}>완료</L.SaveButton>
        </L.InsideContainer>
      </L.PopUpContainer>
    </L.Overlay>
  )
}

export default MemoPopUp
