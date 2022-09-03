import React from 'react'
import * as S from './AdminRegister.style'

const statusData = [
  { id: 1, type: 'SALE' },
  { id: 2, type: 'BEST' },
  { id: 3, type: 'MD' },
  { id: 4, type: 'SOLDOUT' },
  { id: 5, type: 'NEW' },
  { id: 6, type: '무료배송' },
  { id: 7, type: '특가' },
  { id: 8, type: '판매대기' },
]
const InputField = ({ label, id, type, attr, textArea }) => {
  return (
    <S.Label htmlFor={id} attr={attr}>
      <S.LabelText>{label}</S.LabelText>
      {textArea ? <S.TextArea type={type} id={id} /> : <S.TextInput id={id} type={type} />}
    </S.Label>
  )
}
const AdminRegister = () => {
  return (
    <S.RegisterContaiDiv>
      <S.BoxDiv>
        <InputField label="상품명" id="productName" type="text" />
        <InputField label="가격" id="productPrice" type="number" />
        <S.HalfBox>
          <InputField label="수량" id="productQuantity" type="number" attr="half" />
          <InputField label="할인율" id="productSale" type="number" attr="marginLeft" />
        </S.HalfBox>
        <InputField label="상세설명" id="description" type="text" textArea={true} />

        <S.Label htmlFor="">상품 옵션</S.Label>
        <S.OptionButton>옵션 추가</S.OptionButton>
        <S.OptionBoxDiv>
          <S.OptionHeader>
            <S.Label>필수</S.Label>
            <button>Close</button>
          </S.OptionHeader>
          <S.HalfBox>
            <InputField label="옵션명" id="optionName" type="text" attr="half" />
            <InputField label="옵션 가격" id="optionPrice" type="number" attr="half" />
          </S.HalfBox>
        </S.OptionBoxDiv>
      </S.BoxDiv>
      <S.BoxDiv>
        <S.Label htmlFor="">상품 이미지</S.Label>
        <S.OptionButton>파일 선택</S.OptionButton>
        <InputField label="원산지" id="origin" type="text" />
        <InputField label="배송 방법" id="shippingOption" type="text" />
        <InputField label="배송비" id="shippingPrice" type="number" />

        <S.StatusBox>
          {statusData.map(sts => (
            <S.Label>
              <S.CheckInput type="checkbox" />
              {sts.type}
            </S.Label>
          ))}
        </S.StatusBox>
      </S.BoxDiv>
    </S.RegisterContaiDiv>
  )
}

export default AdminRegister
