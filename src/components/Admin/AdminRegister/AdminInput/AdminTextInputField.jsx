import React, { useCallback } from 'react'
import * as S from '../AdminRegister.style'

const AdminTextInputField = ({
  label,
  id,
  type,
  attr,
  setProductData,
  max,
  min,
  requiredText,
  step,
  requiredInput,
}) => {
  const handleChangeProduct = useCallback(
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

      <S.TextInput
        id={id}
        type={type}
        onChange={handleChangeProduct}
        max={max}
        min={min}
        step={step}
        requiredInput={requiredInput}
      />
    </S.Label>
  )
}

export default AdminTextInputField
