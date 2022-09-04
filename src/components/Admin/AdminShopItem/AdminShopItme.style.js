import styled from 'styled-components'
import StyleVariables from '../../../styles/StyleVariables'
import * as S from '../AdminShop/AdminShop.style'

export const AdminShopItemContainer = styled.tr`
  ${StyleVariables.flex()}
  height: 155px;
  padding: 20px;
  border-bottom: 1px solid black;
`

export const VisibleBox = styled.input`
  width: 20px;
  height: 20px;
`

export const ProductImg = styled.img`
  width: 120px;
  height: 120px;
`

export const AdminVisible = styled(S.AdminVisible)``

export const AdminProductCode = styled(S.AdminProductCode)``

export const AdminProductImg = styled(S.AdminProductImg)``

export const AdminProductName = styled(S.AdminProductName)`
  ${StyleVariables.flex('row', 'flex-start')}
`

export const AdminProductPrice = styled(S.AdminProductPrice)``

export const AdminProductQuantity = styled(S.AdminProductQuantity)``

export const AdminProductSale = styled(S.AdminProductSale)``

export const AdminProductStatus = styled(S.AdminProductStatus)`
  ${StyleVariables.flex('column', 'space-evenly')}
  height: 100%;
`

export const AdminButtonContainer = styled(S.AdminButton)`
  ${StyleVariables.flex('column', 'space-between')}
  height: 100%;
`

export const AdminButton = styled.button`
  ${StyleVariables.flex()}
  width: 100px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #4a9536;
  font-size: 16px;
  letter-spacing: 3px;
  color: #4a9536;
  transition: all 0.3s ease;
  &:hover {
    background-color: #4a9536;
    color: white;
  }
`
