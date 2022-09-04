import React, { useState } from 'react'
import * as S from './ShopPaymentInfo.style'
import { getFormattedPrice } from '../../../utils/getPrice'
import Post from '../DaumPostCode/Post'
import { BsSearch } from 'react-icons/bs'

const ShopPaymentInfo = ({ item, orderInfo, setOrderInfo }) => {
  const [visible, setVisible] = useState(false)
  const setDeliveryInfo = (address, bname, buildingName, fullAddress, zoneCode) => {
    setOrderInfo({
      ...orderInfo,
      address: fullAddress,
    })
  }
  const onChangeHandler = e => {
    const { value, name } = e.target
    setOrderInfo({ ...orderInfo, [name]: value })
  }
  return (
    <S.PaymentInfoContainerWrapper>
      <S.PaymentOrderItemHeader>주문상품 정보</S.PaymentOrderItemHeader>
      <S.PaymentOrderItemInfoContainer>
        <S.PaymentOrderItemImageContainer>
          <img src={item?.imageUrl} alt={item?.name} />
        </S.PaymentOrderItemImageContainer>
        <S.PaymentOrderItemInfo>
          <S.PaymentOrderItemName>{item?.name}</S.PaymentOrderItemName>
          <S.PaymentOrderOptions>{item?.select.option}</S.PaymentOrderOptions>
          <S.PaymentOrderQuantity>수량</S.PaymentOrderQuantity>
          <S.PaymentOrderItemPrice>{item?.price}</S.PaymentOrderItemPrice>
        </S.PaymentOrderItemInfo>
      </S.PaymentOrderItemInfoContainer>
      <S.CustomerInfoHeader>주문 회원 정보</S.CustomerInfoHeader>
      <S.CustomerInfo>
        <S.CustomerInfoFieldset>
          <S.CustomerInfoLabel htmlFor="userName">이름</S.CustomerInfoLabel>
          <S.CustomerInfoInput type="text" name="userName" onChange={onChangeHandler} />
        </S.CustomerInfoFieldset>
        <S.CustomerInfoFieldset>
          <S.CustomerInfoLabel htmlFor="phone">연락처</S.CustomerInfoLabel>
          <S.CustomerInfoInput type="text" name="phone" onChange={onChangeHandler} />
        </S.CustomerInfoFieldset>
        <S.CustomerInfoFieldset>
          <S.CustomerInfoLabel htmlFor="email">이메일</S.CustomerInfoLabel>
          <S.CustomerInfoInput type="text" name="email" onChange={onChangeHandler} />
        </S.CustomerInfoFieldset>
        <S.ShippingDeliveryInfoEachContainer>
          <S.ShippingDeliveryInfoInputBox>
            <S.ShippingDeliveryHeaderBox>
              <S.ShippingDeliveryHeader>배송지 주소</S.ShippingDeliveryHeader>
              {visible ? <Post getData={setDeliveryInfo} /> : null}
              <S.ShippingDeliveryAddressSearchBtn onClick={() => setVisible(!visible)}>
                {visible ? (
                  '닫기'
                ) : (
                  <>
                    <BsSearch /> <span>주소</span>
                  </>
                )}
              </S.ShippingDeliveryAddressSearchBtn>
            </S.ShippingDeliveryHeaderBox>
            <S.ShippingDeliveryRoadAddress
              type="text"
              readonly
              name="address"
              placeholder="주소 1"
              value={`${orderInfo?.address}`}
            ></S.ShippingDeliveryRoadAddress>
            <S.ShippingDeliveryDetailAddress
              type="text"
              name="detailAddress"
              placeholder="나머지 주소를 입력해주세요"
              onChange={onChangeHandler}
            ></S.ShippingDeliveryDetailAddress>
          </S.ShippingDeliveryInfoInputBox>
        </S.ShippingDeliveryInfoEachContainer>
        <S.ShippingDeliveryInfoEachContainer>
          <S.ShippingDeliveryInfoLabel>배송 메모</S.ShippingDeliveryInfoLabel>
          <S.ShippingDeliveryInfoSelect>
            <S.ShippingDeliveryInfoOption value="">
              배송 시 요청사항을 선택해주세요.
            </S.ShippingDeliveryInfoOption>
            <S.ShippingDeliveryInfoOption value="직접 수령하겠습니다.">
              직접 수령하겠습니다.
            </S.ShippingDeliveryInfoOption>
            <S.ShippingDeliveryInfoOption value="배송 전 연락 바랍니다.">
              배송 전 연락 바랍니다.
            </S.ShippingDeliveryInfoOption>
            <S.ShippingDeliveryInfoOption value="부재 시 경비실에 맡겨주세요.">
              부재 시 경비실에 맡겨주세요.
            </S.ShippingDeliveryInfoOption>
            <S.ShippingDeliveryInfoOption value="부재 시 문앞에 놓아주세요.">
              부재 시 문앞에 놓아주세요.
            </S.ShippingDeliveryInfoOption>
          </S.ShippingDeliveryInfoSelect>
        </S.ShippingDeliveryInfoEachContainer>
      </S.CustomerInfo>
    </S.PaymentInfoContainerWrapper>
  )
}

export default ShopPaymentInfo
