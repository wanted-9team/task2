import React, { useCallback } from 'react'
import * as S from './AdminRegister.style'

const InputField = ({
  label,
  id,
  type,
  attr,
  setProductData,
  setOptionData,
  setStatusData,
  statusData,
  shippingFreeCheck,
  max,
  min,
}) => {
  const handleChange = useCallback(
    ({ target }) => {
      const { id, value } = target

      if (id === 'optionName') {
        setOptionData(prev => ({ ...prev, option: value }))
      } else if (id === 'optionPrice') {
        setOptionData(prev => ({ ...prev, price: value }))
      } else if (
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
      } else {
        setProductData(prev => ({ ...prev, [id]: value }))
      }
    },
    [setProductData, setStatusData, statusData, setOptionData],
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
