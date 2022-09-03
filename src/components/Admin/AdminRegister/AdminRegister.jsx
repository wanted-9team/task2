import React from 'react'
import * as S from './AdminRegister.style'
import InputField from './InputField'
import { AiOutlineClose } from 'react-icons/ai'
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

const AdminRegister = () => {
  return (
    <S.RegisterContaiDiv>
      <S.BoxDiv>
        <InputField label="상품명" id="productName" type="text" />
        <InputField label="가격" id="productPrice" type="number" />
        <S.HalfBox>
          <InputField label="수량" id="productQuantity" type="number" attr="half" />
          <InputField label="할인율" id="productSale" type="number" attr="half" />
        </S.HalfBox>
        <InputField label="상세설명" id="description" type="text" textArea={true} />

        <S.Label>
          <S.LabelText> 상품 옵션</S.LabelText>
          <S.OptionButton>옵션 추가</S.OptionButton>
        </S.Label>

        <S.OptionBoxDiv>
          <S.OptionHeader>
            <S.Label>필수</S.Label>
            <AiOutlineClose />
          </S.OptionHeader>
          <S.HalfBox>
            <InputField label="옵션명" id="optionName" type="text" attr="option" />
            <InputField label="옵션 가격" id="optionPrice" type="number" attr="option" />
          </S.HalfBox>
        </S.OptionBoxDiv>
      </S.BoxDiv>
      <S.BoxDiv>
        <S.Label>
          <S.LabelText>상품 이미지</S.LabelText>
          <S.OptionButton>파일 선택</S.OptionButton>
        </S.Label>
        <InputField label="원산지" id="origin" type="text" />
        <InputField label="배송 방법" id="shippingOption" type="text" />
        <S.ShippingBoxDiv>
          <InputField label="배송비" id="shippingPrice" type="number" />
          <InputField label="무료" id="shippingPriceCheck" type="checkbox" attr="shippingFree" />
        </S.ShippingBoxDiv>
        <InputField label="배송 안내" id="shippingInfo" type="text" />
        <S.LabelText>상태</S.LabelText>
        <S.StatusBox>
          {statusData.map(sts => (
            <InputField
              label={sts.type}
              id={sts.type}
              key={sts.id}
              type="checkbox"
              attr="checkbox"
            />
          ))}
        </S.StatusBox>
      </S.BoxDiv>
    </S.RegisterContaiDiv>
  )
}

export default AdminRegister
