import React, { useState, useEffect, useContext } from 'react'
import * as S from './ShopPayment.style'
import ShopPaymentInfo from '../../components/ShopPayment/ShopPaymentInfo/ShopPaymentInfo'
import { getOrderNumber } from '../../utils/getOrderNumber'
import { ShopInfoContextStore } from './../../store/ShopInfoContext'
import getShopItemInfoSelect from '../../utils/getShopItemInfoSelect'
const ShopPayment = () => {
  const { shopItemInfo } = useContext(ShopInfoContextStore)

  let shopItemInfoSelect = getShopItemInfoSelect(shopItemInfo)

  const shopItem = shopItemInfo[0]
  const newOrderNumber = getOrderNumber()
  const [orderInfo, setOrderInfo] = useState({
    email: '',
    userName: '',
    productName: '',
    deliveryMemo: '',
    price: '',
    phone: '',
    select: '',
    totalPrice: '',
    orderNumber: '',
    imageUrl: '',
    shipping: {
      option: '',
      price: 0,
      info: '',
    },
    id: 0,
    sale: 0,
    address: '',
    detailAddress: '',
    fullAddress: '',
  })
  useEffect(() => {
    const newOrderInfo = {
      ...orderInfo,
      productName: shopItem?.name,
      price: shopItem?.price,
      select: shopItemInfoSelect,
      imageUrl: shopItem?.imageUrl,
      shipping: shopItem?.shipping,
      id: shopItem?.id,
      sale: shopItem?.sale,
      orderNumber: newOrderNumber,
    }
    setOrderInfo(newOrderInfo)
  }, [])

  return (
    <S.PaymentContainerWrapper>
      <S.PaymentContainerHeader>주문서</S.PaymentContainerHeader>
      <S.PaymentContainerBody>
        <ShopPaymentInfo orderInfo={orderInfo} setOrderInfo={setOrderInfo} />
      </S.PaymentContainerBody>
    </S.PaymentContainerWrapper>
  )
}

export default ShopPayment
