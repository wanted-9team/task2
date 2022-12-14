import styled from 'styled-components'
export const PaymentInfoContainerWrapper = styled.div`
  width: 70%;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 5px 5px 10px lightgray;
`

export const PaymentOrderItemHeader = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`

export const PaymentOrderItemInfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid black;
`

export const PaymentOrderItemImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  margin-right: 25px;
  object-fit: cover;

  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`

export const PaymentOrderItemInfo = styled.div`
  padding-right: 48px;
  line-height: 21px;
`

export const PaymentOrderItemName = styled.div``

export const PaymentOrderOptions = styled.div`
  font-size: 16px;
  margin: 15px 0;
`

export const PaymentOrderQuantity = styled.div`
  font-size: 20px;
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const PaymentOrderItemPrice = styled.div`
  text-decoration: line-through;
`

export const PaymentOrderItemSalePrice = styled.div``

export const PaymentOrderPriceInfo = styled.div``

export const CustomerInfoHeader = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`
export const CustomerInfo = styled.div`
  width: 90%;
`

export const CustomerInfoFieldset = styled.fieldset`
  position: relative;
  border: none;
`

export const CustomerInfoLabel = styled.label``

export const CustomerInfoInput = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  margin-bottom: 15px;
`

export const ShippingDeliveryInfoEachContainer = styled.div``

export const ShippingDeliveryInfoLabel = styled.label``

export const ShippingDeliveryInfoInput = styled.input`
  width: 100%;
  padding: 5px 0;
  height: 40px;
  margin-bottom: 5px;
`

export const ShippingDeliveryHeaderBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

export const ShippingDeliveryHeader = styled.div`
  font-size: 20px;
  font-weight: 700;
`

export const ShippingDeliveryInfoInputBox = styled.div``

export const ShippingDeliveryAddressSearchInput = styled.input`
  width: 75%;
  padding: 5px 0;
  height: 40px;
`

export const ShippingDeliveryAddressSearchBtn = styled.button`
  width: 20%;
  height: 40px;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: green;
  color: white;
  margin-left: 5px;
`

export const ShippingDeliveryRoadAddress = styled.input`
  width: 100%;
  margin: 10px 0;
  padding: 5px 0;
  height: 40px;
`

export const ShippingDeliveryDetailAddress = styled.input`
  width: 100%;
  padding: 5px 0;
  margin-bottom: 10px;
  height: 40px;
`

export const ShippingDeliveryInfoSelect = styled.select`
  width: 100%;
  padding: 5px 0;
  height: 40px;
  margin-bottom: 5px;
  cursor: pointer;
`

export const ShippingDeliveryInfoOption = styled.option``
