import React from 'react'
import * as S from './ShopPaymentInfo.style'

const ShopPaymentInfo = ({ item }) => {
  return (
    <S.PaymentInfoContainerWrapper>
      <S.PaymentOrderItemHeader>주문상품 정보</S.PaymentOrderItemHeader>
      <S.PaymentOrderItemInfoContainer>
        <S.PaymentOrderItemImageContainer>
          <img src="https://cdn.imweb.me/thumbnail/20200715/236fbfcdd9cf2.jpg" alt="" />
        </S.PaymentOrderItemImageContainer>
        <S.PaymentOrderItemInfo>
          <S.PaymentOrderItemName>제품명</S.PaymentOrderItemName>
          <S.PaymentOrderOptions>옵션</S.PaymentOrderOptions>
          <S.PaymentOrderQuantity>수량</S.PaymentOrderQuantity>
          <S.PaymentOrderItemPrice>가격</S.PaymentOrderItemPrice>
        </S.PaymentOrderItemInfo>
      </S.PaymentOrderItemInfoContainer>
      <S.CustomerInfoHeader>주문자 정보</S.CustomerInfoHeader>
      <S.CustomerInfo>
        <S.CustomerInfoFieldset>
          <S.CustomerInfoLabel htmlFor="name">이름</S.CustomerInfoLabel>
          <S.CustomerInfoInput type="text" name="name" />
        </S.CustomerInfoFieldset>
        <S.CustomerInfoFieldset>
          <S.CustomerInfoLabel htmlFor="phone">연락처</S.CustomerInfoLabel>
          <S.CustomerInfoInput type="text" name="phone" />
        </S.CustomerInfoFieldset>
        <S.CustomerInfoFieldset>
          <S.CustomerInfoLabel htmlFor="email">이메일</S.CustomerInfoLabel>
          <S.CustomerInfoInput type="text" name="email" />
        </S.CustomerInfoFieldset>
      </S.CustomerInfo>
      <S.ShippingInfo>주문자 배송정보</S.ShippingInfo>
    </S.PaymentInfoContainerWrapper>
  )
}

export default ShopPaymentInfo
