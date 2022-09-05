import styled, { css } from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  width: 100%;
  margin: 100px auto;
  @media screen and (max-width: 768px) {
    max-width: 700px;
  }
`

export const MessageTitle = styled.h2`
  width: 409px;
  height: 51px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 51px;

  margin: 50px;
`

export const OrderDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  width: 100%;
  margin: 20px;
`
export const OrderDetailTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
export const TitleLeft = styled.h3`
  width: 246px;
  height: 39px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
`

export const TitleRight = styled.p`
  width: 205px;
  height: 17px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
`

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`

export const Product = styled.div`
  border: solid 1px;
  display: flex;

  flex-direction: row;
  justify-content: space-evenly;

  padding: 20px;
  box-sizing: border-box;

  width: 800px;
  height: 218px;

  background: #ffffff;
  border: 1px solid #a1a1a1;
  border-radius: 8px;
`

export const OrderProductImg = styled.img`
  flex-grow: 2;
  margin: 15px;

  width: 155px;
  height: 155.89px;

  background: #cccccc;
  border-radius: 8px;
`

export const OrderProductBodyContainer = styled.div`
  flex-grow: 5;
  margin: 15px;
  line-height: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const OrderProductName = styled.h3`
  width: 394px;
  height: 22px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
`
export const OrderProductDescription = styled.div`
  display: flex;
  flex-direction: column;
`
export const OrderOption = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px;
  align-items: center;
`

export const OptionBox = styled.div`
  margin-right: 3px;

  text-align: center;
  align-items: center;

  width: 49px;
  height: 26px;
  border: 1px solid #a1a1a1;
  border-radius: 4px;
`
export const OptionDetail = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #666666;
`

export const OrderProductPrice = styled.h4`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
`

export const OrderDetailButton = styled.button`
  width: 199px;
  height: 49px;

  background: #f5f5f5;
  border-radius: 4px;

  margin: 10px;
`

export const PaymentInfo = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 798px;
  height: 157px;

  border: 1px solid #a1a1a1;
  border-radius: 8px;

  padding: 10px;
  margin: 20px;
`
export const DetailLine = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 20px;
`

export const Type = styled.span`
  width: 90px;
  flex-grow: 1;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
`

export const Value = styled.h4`
  flex-grow: 9;
  width: 78px;
  height: 22px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;

  ${props => {
    switch (props.$option) {
      case 'totalPrice':
        return css`
          color: #00780c;
        `
      default:
        return css`
          color: #333333;
        `
    }
  }}
`
export const BacktoShoppingButton = styled.button`
  width: 199px;
  height: 49px;

  background: #333333;
  border-radius: 4px;
  color: #ffffff;
`
