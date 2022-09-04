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
      <S.CustomerInfoHeader>주문 회원 정보</S.CustomerInfoHeader>
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
      <S.ShippingInfoHeader>받는 사람 정보</S.ShippingInfoHeader>
      <S.ShippingInfo>
        <S.ShippingDeliveryBody>
          {/* Todo: 체크박스 통해서 값 가져오기 구현 */}
          <S.ShippingDeliveryGetInfo>
            <S.ShippingDeliveryInfoCheckLabel isChecked>
              <S.ShippingDeliveryInfoCheckInput type="checkbox" isChecked />
              <span>주문자 정보 가져오기</span>
            </S.ShippingDeliveryInfoCheckLabel>
          </S.ShippingDeliveryGetInfo>
          <S.ShippingDeliveryInfoList>
            <S.ShippingDeliveryInfoEachContainer>
              <S.ShippingDeliveryInfoLabel>이름</S.ShippingDeliveryInfoLabel>
              <S.ShippingDeliveryInfoInput type="text" name="name"></S.ShippingDeliveryInfoInput>
            </S.ShippingDeliveryInfoEachContainer>
            <S.ShippingDeliveryInfoEachContainer>
              <S.ShippingDeliveryInfoLabel>연락처</S.ShippingDeliveryInfoLabel>
              <S.ShippingDeliveryInfoInput type="text" name="phone"></S.ShippingDeliveryInfoInput>
            </S.ShippingDeliveryInfoEachContainer>
            <S.ShippingDeliveryInfoEachContainer>
              <S.ShippingDeliveryInfoLabel>주소</S.ShippingDeliveryInfoLabel>
              <S.ShippingDeliveryInfoInputBox>
                <S.ShippingDeliveryAddressSearchInput
                  type="text"
                  name="postcode"
                  placeholder="주소찾기를 클릭해주세요"
                  readonly
                ></S.ShippingDeliveryAddressSearchInput>
                <S.ShippingDeliveryAddressSearchBtn
                  type="button"
                  value="주소찾기"
                ></S.ShippingDeliveryAddressSearchBtn>
                <S.ShippingDeliveryRoadAddress
                  type="text"
                  readonly
                  name="address"
                  placeholder="주소 1"
                ></S.ShippingDeliveryRoadAddress>
                <S.ShippingDeliveryDetailAddress
                  type="text"
                  name="detailAddress"
                  placeholder="주소 2"
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
                {/* Todo: 직접 입력 구현 */}
              </S.ShippingDeliveryInfoSelect>
            </S.ShippingDeliveryInfoEachContainer>
          </S.ShippingDeliveryInfoList>
        </S.ShippingDeliveryBody>
      </S.ShippingInfo>
    </S.PaymentInfoContainerWrapper>
  )
}

export default ShopPaymentInfo
