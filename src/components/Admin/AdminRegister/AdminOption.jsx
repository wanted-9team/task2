import React from 'react'
import * as S from './AdminRegister.style'
import { AiOutlineClose } from 'react-icons/ai'
import InputField from './AdminInputField'
const AdminOption = ({ setProductData, createOptionDiv }) => {
  return (
    <S.OptionBoxDiv>
      <S.OptionHeader>
        <S.Label>필수</S.Label>
        <AiOutlineClose />
      </S.OptionHeader>
      <S.HalfBox>
        <InputField
          label="옵션명"
          id="optionName"
          type="text"
          attr="option"
          setProductData={setProductData}
        />
        <InputField
          label="옵션 가격"
          id="optionPrice"
          type="number"
          attr="option"
          setProductData={setProductData}
        />
      </S.HalfBox>
    </S.OptionBoxDiv>
  )
}

export default AdminOption
