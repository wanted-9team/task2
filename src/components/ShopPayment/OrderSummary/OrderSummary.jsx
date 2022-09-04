import React from 'react'
import * as S from './OrderSummary.style'

function OrderSummary() {
  return (
    <S.OrderSummaryWrapper>
      <S.OrderSummaryHeader> 결제정보 </S.OrderSummaryHeader>
      <S.OrderSummaryTable>
        <S.OrderSummaryTbody>
          <S.OrderSummaryTr>
            <S.OrderSummaryTd align="left">상품수</S.OrderSummaryTd>
            <S.OrderSummaryTd align="right"></S.OrderSummaryTd>
          </S.OrderSummaryTr>
          <S.OrderSummaryTr>
            <S.OrderSummaryTd align="left">상품금액</S.OrderSummaryTd>
            <S.OrderSummaryTd align="right"></S.OrderSummaryTd>
          </S.OrderSummaryTr>
          <S.OrderSummaryTr>
            <S.OrderSummaryTd align="left">배송비</S.OrderSummaryTd>
            <S.OrderSummaryTd align="right"></S.OrderSummaryTd>
          </S.OrderSummaryTr>
        </S.OrderSummaryTbody>
      </S.OrderSummaryTable>
      <S.OrderSummaryPriceTotal>
        <S.OrderSummaryPriceTotalInfo align="left">총 결제금액: </S.OrderSummaryPriceTotalInfo>
        <S.OrderSummaryPriceTotalPrice align="right"></S.OrderSummaryPriceTotalPrice>
      </S.OrderSummaryPriceTotal>
      <S.OrderSummaryPurchaseBtn
        type="button"
        value="결제하기"
        id="purchase-btn"
        form="delivery-form"
      />
    </S.OrderSummaryWrapper>
  )
}

export default OrderSummary
