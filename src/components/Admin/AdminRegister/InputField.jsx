import React from 'react'
import * as S from './AdminRegister.style'
const InputField = ({ label, id, type, attr, textArea }) => {
  return (
    <S.Label htmlFor={id} attr={attr}>
      <S.LabelText>{label}</S.LabelText>
      {textArea ? <S.TextArea type={type} id={id} /> : <S.TextInput id={id} type={type} />}
    </S.Label>
  )
}

export default InputField
