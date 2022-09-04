import React, { useState } from 'react'
import * as S from './AdminRegister.style'
import { AiOutlineClose } from 'react-icons/ai'
const AdminOptionBox = ({ idx, createOptionData, setCreateOptionData }) => {
  const handleOptionData = ({ target }) => {
    const { id, value } = target
    const optionData = { [id]: value }
    console.log(optionData)
    createOptionData[idx] = {}
    // setCreateOptionData(prev => [...prev, (prev[idx] = {})])
    console.log(idx, createOptionData[idx])
  }
  return (
    <S.OptionBoxDiv>
      <S.OptionHeader>
        <S.CheckLabel htmlFor="required">
          <S.LabelText>필수</S.LabelText>
          <S.CheckInput id="required" type="checkbox" />
        </S.CheckLabel>
        <AiOutlineClose />
      </S.OptionHeader>
      <S.HalfBox>
        <S.Label attr="half" htmlFor="option">
          <S.LabelText>옵션명</S.LabelText>
          <S.TextInput id="option" type="text" onChange={handleOptionData} />
        </S.Label>
        <S.Label attr="half" htmlFor="price">
          <S.LabelText>옵션 가격</S.LabelText>
          <S.TextInput id="price" type="number" min="1" onChange={handleOptionData} />
        </S.Label>
      </S.HalfBox>
    </S.OptionBoxDiv>
  )
}

export default AdminOptionBox
