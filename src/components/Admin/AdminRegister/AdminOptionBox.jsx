import React, { useCallback } from 'react'
import * as S from './AdminRegister.style'
import { AiOutlineClose } from 'react-icons/ai'

const AdminOptionBox = ({ idx, setOptionComponent, OptionComponent }) => {
  const handleOptionData = useCallback(
    ({ target }) => {
      const { id, value } = target
      const copyOptionComp = [...OptionComponent]
      if (id === 'option') {
        copyOptionComp[idx] = { ...copyOptionComp[idx], [id]: value }
      } else if (id === 'price') {
        copyOptionComp[idx] = { ...copyOptionComp[idx], [id]: value }
      }
      setOptionComponent(copyOptionComp)
    },
    [OptionComponent, setOptionComponent, idx],
  )

  const handleDeleteOption = useCallback(
    optionIdx => {
      setOptionComponent(prev => prev.filter((item, index) => index !== optionIdx))
    },
    [setOptionComponent],
  )

  return (
    <S.OptionBoxDiv>
      <S.OptionHeader>
        <S.CheckLabel htmlFor="required">
          <S.LabelText>필수</S.LabelText>
          <S.CheckInput id="required" type="checkbox" />
        </S.CheckLabel>
        <AiOutlineClose onClick={() => handleDeleteOption(idx)} />
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
