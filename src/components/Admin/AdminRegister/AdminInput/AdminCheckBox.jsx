import React, { useCallback } from 'react'
import * as S from '../AdminRegister.style'

const AdminCheckBox = ({ sts, setStatusData, statusData }) => {
  const handleStatusCheck = useCallback(
    ({ target }) => {
      const { id } = target
      if (statusData.includes(id)) {
        setStatusData(prev => prev.filter(item => item !== id))
      } else {
        setStatusData(prev => [...prev, id])
      }
    },
    [setStatusData, statusData],
  )
  return (
    <S.CheckLabel htmlFor={sts.type}>
      <S.LabelText>{sts.type}</S.LabelText>
      <S.CheckInput id={sts.type} type="checkbox" onChange={handleStatusCheck} />
    </S.CheckLabel>
  )
}

export default AdminCheckBox
