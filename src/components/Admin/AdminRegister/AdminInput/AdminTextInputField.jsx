import React, { useCallback } from 'react'
import * as S from '../AdminRegister.style'

const AdminTextInputField = ({ label, id, type, attr, setProductData, max, min, requiredText }) => {
  const handleChange = useCallback(
    ({ target }) => {
      const { id, value } = target
      setProductData(prev => ({ ...prev, [id]: value }))
    },
    [setProductData],
  )

  return (
    <S.Label htmlFor={id} attr={attr}>
      <S.LabelText>
        {label} <S.LabelRequiredText>{requiredText}</S.LabelRequiredText>
      </S.LabelText>

      <S.TextInput id={id} type={type} onChange={handleChange} max={max} min={min} />
    </S.Label>
  )
}

export default AdminTextInputField
