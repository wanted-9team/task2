import React, { useCallback } from 'react'
import * as S from './AdminRegister.style'

const AdminTextInputField = ({ label, id, type, attr, setProductData, max, min }) => {
  const handleChange = useCallback(
    ({ target }) => {
      const { id, value } = target
      setProductData(prev => ({ ...prev, [id]: value }))
    },
    [setProductData],
  )

  return (
    <S.Label htmlFor={id} attr={attr}>
      <S.LabelText>{label}</S.LabelText>
      <S.TextInput id={id} type={type} onChange={handleChange} max={max} min={min} />
    </S.Label>
  )
}

export default AdminTextInputField
