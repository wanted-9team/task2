import styled from 'styled-components'
export const OrderSummaryWrapper = styled.div`
  width: 30%;
  height: 360px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px lightgray;
  padding: 20px;
  margin-left: 20px;
  color: white;
  background-color: black;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const OrderSummaryTable = styled.table`
  width: 100%;
  margin: 30px 0px;
  padding: 10px 0px;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  border-collapse: collapse;
  position: relative;
`

export const OrderSummaryHeader = styled.header`
  font-size: 32px;
  font-weight: 700;
  align-self: flex-start;
`

export const OrderSummaryTbody = styled.tbody`
  width: 100%;
`

export const OrderSummaryTr = styled.tr`
  width: 100%;
`

export const OrderSummaryTd = styled.td`
  padding: 10px 0;
  width: 100%;
`

export const OrderSummaryPriceTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: flex-start;
  width: 100%;
`

export const OrderSummaryPriceTotalInfo = styled.div``

export const OrderSummaryPriceTotalPrice = styled.div``

export const OrderSummaryPurchaseBtn = styled.input`
  position: absolute;
  bottom: 10px;
  width: 90%;
  height: auto;
  padding: 10px;
  margin-top: 30px;
  background-color: grey;
  border: none;
  border-radius: 10px;
  color: white;
  font: 30px bold;
  font-weight: 700;
  transition: all 0.3s;
  &:hover {
    background-color: green;
    color: white;
  }
  cursor: pointer;
`
