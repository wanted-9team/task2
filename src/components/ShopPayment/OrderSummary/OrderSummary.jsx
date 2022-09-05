import React from 'react'
import * as S from './OrderSummary.style'
import axios from 'axios'
import { getFormattedPrice } from '../../../utils/getPrice'
import { useNavigate } from 'react-router-dom'

function OrderSummary({ orderInfo, TotalPrices, TotalNumbers }) {
  const navigate = useNavigate()
  const onClickHandler = async e => {
    await axios.post('/orderlist', JSON.stringify(orderInfo))
    navigate('/shop_list')
  }

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
            <S.OrderSummaryTd align="right">
              {`${getFormattedPrice(orderInfo?.shipping.price)}`}
            </S.OrderSummaryTd>
          </S.OrderSummaryTr>
        </S.OrderSummaryTbody>
      </S.OrderSummaryTable>
      <S.OrderSummaryPriceTotal>
        <S.OrderSummaryPriceTotalInfo align="left">총 결제금액</S.OrderSummaryPriceTotalInfo>
        <S.OrderSummaryPriceTotalPrice align="right">{`${getFormattedPrice(
          +orderInfo.shipping.price,
        )}원`}</S.OrderSummaryPriceTotalPrice>
      </S.OrderSummaryPriceTotal>
      <S.OrderSummaryPurchaseBtn onClick={onClickHandler}>결제하기</S.OrderSummaryPurchaseBtn>
    </S.OrderSummaryWrapper>
  )
}

export default OrderSummary
