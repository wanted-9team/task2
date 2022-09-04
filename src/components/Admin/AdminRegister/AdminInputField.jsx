import React, { useCallback } from 'react'
import * as S from './AdminRegister.style'

const InputField = ({
  label,
  id,
  type,
  attr,
  setProductData,
  shippingFreeCheck,
  setShippingData,
  max,
  min,
}) => {
  const handleChange = useCallback(
    ({ target }) => {
      const { id, value } = target
      if (id === 'shippingOption') {
        setShippingData(prev => ({ ...prev, option: value }))
      } else if (id === 'shippingPrice') {
        setShippingData(prev => ({ ...prev, price: Number(value) }))
      } else if (id === 'shippingInfo') {
        setShippingData(prev => ({ ...prev, info: value }))
      } else {
        setProductData(prev => ({ ...prev, [id]: value }))
      }
    },
    [setProductData, setShippingData],
  )

  return (
    <S.Label htmlFor={id} attr={attr}>
      <S.LabelText>{label}</S.LabelText>
      <S.TextInput
        id={id}
        type={type}
        onChange={handleChange}
        disabled={shippingFreeCheck}
        max={max}
        min={min}
      />
    </S.Label>
  )
}

export default InputField
