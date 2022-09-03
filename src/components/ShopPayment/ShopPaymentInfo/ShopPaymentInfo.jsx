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
          <S.PaymentOrderOptionsAndPrices>옵션 또는 수량</S.PaymentOrderOptionsAndPrices>
          <S.PaymentOrderItemPrice>가격</S.PaymentOrderItemPrice>
        </S.PaymentOrderItemInfo>
      </S.PaymentOrderItemInfoContainer>
      <S.CustomerInfo>
        <span>주문자 정보</span>
        <ol>
          <li>
            <p>이름</p>
            <input type="text" />
          </li>
          <li>
            <p>연락처</p>
            <input type="text" />
          </li>
          <li>
            <p>이메일</p>
            <input type="text" />
          </li>
        </ol>
      </S.CustomerInfo>
      <S.ShippingInfo>주문자 배송정보</S.ShippingInfo>
    </S.PaymentInfoContainerWrapper>
  )
}

export default ShopPaymentInfo
