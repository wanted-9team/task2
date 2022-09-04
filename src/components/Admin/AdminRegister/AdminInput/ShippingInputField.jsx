import React, { useCallback } from 'react'
import * as S from '../AdminRegister.style'
const ShippingInputField = ({
  label,
  id,
  type,
  attr,
  shippingFreeCheck,
  setShippingData,
  shippingInputRef,
  requiredText,
}) => {
  const handleChangeShipping = useCallback(
    ({ target }) => {
      const { id, value } = target
      if (id === 'shippingOption') {
        setShippingData(prev => ({ ...prev, option: value }))
      } else if (id === 'shippingPrice') {
        setShippingData(prev => ({ ...prev, price: value }))
      } else if (id === 'shippingInfo') {
        setShippingData(prev => ({ ...prev, info: value }))
      }
    },
    [setShippingData],
  )
  return (
    <S.Label htmlFor={id} attr={attr}>
      <S.LabelText>
        {label} <S.LabelRequiredText>{requiredText}</S.LabelRequiredText>
      </S.LabelText>
      <S.TextInput
        id={id}
        type={type}
        onChange={handleChangeShipping}
        disabled={shippingFreeCheck}
        min="0"
        step="100"
        ref={shippingInputRef}
      />
    </S.Label>
  )
}

export default ShippingInputField
