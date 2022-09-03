import React from 'react'
import * as S from './AdminRegister.style'
import { AiFillCloseCircle } from 'react-icons/ai'
const ImagePreview = ({ image, deleteFunc }) => {
  return (
    <S.ImagePreviewWrapper draggable>
      <img src={image} alt="preview" />
      <div className="icon_container" onClick={deleteFunc}>
        <AiFillCloseCircle />
      </div>
    </S.ImagePreviewWrapper>
  )
}

export default ImagePreview
