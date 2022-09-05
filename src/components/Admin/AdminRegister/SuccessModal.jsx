import React from 'react'
import * as S from './AdminRegister.style'
const SuccessModal = ({ openModal }) => {
  return <S.SuccessModalDiv openModal={openModal}>상품이 등록되었습니다.</S.SuccessModalDiv>
}

export default SuccessModal
