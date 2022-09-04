import React from 'react'
import * as S from './AdminRegister.style'

const AdminCheckBox = ({ sts, setStatusData, statusData }) => {
  const handleStatusCheck = ({ target }) => {
    const { id } = target
    if (
      id === 'SALE' ||
      id === 'BEST' ||
      id === 'MD' ||
      id === 'SOLDOUT' ||
      id === 'NEW' ||
      id === '무료배송' ||
      id === '특가' ||
      id === '판매대기'
    ) {
      if (statusData.includes(id)) {
        setStatusData(prev => prev.filter(item => item !== id))
      } else {
        setStatusData(prev => [...prev, id])
      }
    }
  }
  return (
    <S.CheckLabel htmlFor={sts.type}>
      <S.LabelText>{sts.type}</S.LabelText>
      <S.CheckInput id={sts.type} type="checkbox" onChange={handleStatusCheck} />
    </S.CheckLabel>
  )
}

export default AdminCheckBox
