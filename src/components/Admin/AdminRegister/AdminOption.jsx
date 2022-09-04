import React from 'react'
import * as S from './AdminRegister.style'
import { AiOutlineClose } from 'react-icons/ai'
import InputField from './AdminInputField'
const AdminOption = ({ setOptionData }) => {
  return (
    <S.OptionBoxDiv>
      <S.OptionHeader>
        <S.Label attr={'checkbox'}>
          <S.TextInput type="checkbox" />
          <S.LabelText>필수</S.LabelText>
        </S.Label>
        <AiOutlineClose />
      </S.OptionHeader>
      <S.HalfBox>
        <InputField
          label="옵션명"
          id="optionName"
          type="text"
          attr="option"
          setOptionData={setOptionData}
        />
        <InputField
          label="옵션 가격"
          id="optionPrice"
          type="number"
          attr="option"
          setOptionData={setOptionData}
          min="1"
        />
      </S.HalfBox>
    </S.OptionBoxDiv>
  )
}

export default AdminOption
