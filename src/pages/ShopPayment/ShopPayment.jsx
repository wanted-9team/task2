import React, { useState } from 'react'
import * as S from './ShopPayment.style'
import ShopPaymentInfo from '../../components/ShopPayment/ShopPaymentInfo/ShopPaymentInfo'
import OrderSummary from '../../components/ShopPayment/OrderSummary/OrderSummary'

const ShopPayment = ({ item }) => {
  const [orderInfo, setOrderInfo] = useState({
    email: '',
    userName: '',
    productName: '',
    deliveryMemo: '',
    price: '',
    phone: '',
    select: '',
    totalPrice: '',
    boughtNumber: 1,
    orderNumber: '',
    imageUrl: '',
    shipping: {
      option: '',
      price: 0,
      info: '',
    },
    origin: '',
    id: 0,
    sale: 0,
  })
  return (
    <S.PaymentContainerWrapper>
      <S.PaymentContainerHeader>주문서</S.PaymentContainerHeader>
      <S.PaymentContainerBody>
        <ShopPaymentInfo item={item} orderInfo={orderInfo} setOrderInfo={setOrderInfo} />
        <OrderSummary item={item} orderInfo={orderInfo} setOrderInfo={setOrderInfo} />
      </S.PaymentContainerBody>
    </S.PaymentContainerWrapper>
  )
}

export default ShopPayment
