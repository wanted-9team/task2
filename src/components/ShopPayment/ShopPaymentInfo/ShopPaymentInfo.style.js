import styled from 'styled-components'
export const PaymentInfoContainerWrapper = styled.div`
  width: 70%;
`

// Item Info
export const PaymentOrderItemHeader = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`

export const PaymentOrderItemInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid black;
`

export const PaymentOrderItemImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  margin-right: 25px;
  object-fit: cover;

  img {
    width: 100%;
    border-radius: 5px;
  }
`

export const PaymentOrderItemInfo = styled.div`
  padding-right: 48px;
  line-height: 21px;
`

export const PaymentOrderItemName = styled.div`
  font-size: 20px;
`

export const PaymentOrderOptions = styled.div`
  font-size: 16px;
  margin: 15px 0;
`

export const PaymentOrderQuantity = styled.div`
  font-size: 16px;
  margin: 15px 0;
`

export const PaymentOrderItemPrice = styled.div`
  font-size: 20px;
  font-weight: 600;
`

// Customer Info
export const CustomerInfoHeader = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`
export const CustomerInfo = styled.div`
  width: 80%;
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

// Shipping Information
export const ShippingInfo = styled.div``
