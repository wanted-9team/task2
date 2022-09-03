import React from 'react'
import * as S from './ShopPayment.style'
import ShopPaymentInfo from '../../components/ShopPayment/ShopPaymentInfo/ShopPaymentInfo'
import OrderSummary from '../../components/ShopPayment/OrderSummary/OrderSummary'

const ShopPayment = ({ item }) => {
  return (
    <S.PaymentContainerWrapper>
      <S.PaymentContainerHeader>주문서</S.PaymentContainerHeader>
      <S.PaymentContainerBody>
        <ShopPaymentInfo item={item} />
        <OrderSummary item={item} />
      </S.PaymentContainerBody>
    </S.PaymentContainerWrapper>
  )
}

export default ShopPayment
