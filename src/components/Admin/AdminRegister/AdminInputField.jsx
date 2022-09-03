import React from 'react'
import * as S from './AdminRegister.style'

const InputField = ({ label, id, type, attr, textArea, setProductData }) => {
  const handleChange = e => {
    const { id, value } = e.target
    setProductData(prev => ({ ...prev, [id]: value }))
  }

  return (
    <S.Label htmlFor={id} attr={attr}>
      <S.LabelText>{label}</S.LabelText>
      {textArea ? (
        <S.TextArea id={id} type={type} onChange={handleChange} />
      ) : (
        <S.TextInput id={id} type={type} onChange={handleChange} />
      )}
    </S.Label>
  )
}

export default InputField
