import styled from 'styled-components'
import StyleVariables from '../../../styles/StyleVariables'
import * as S from '../AdminShop/AdminShop.style'

export const AdminShopItemContainer = styled.tr`
  ${StyleVariables.flex()}
  height: 155px;
  padding: 20px;
  border-bottom: 1px solid black;
`

export const VisibleBox = styled.input``

export const ProductImg = styled.img`
  width: 120px;
  height: 120px;
`

export const AdminVisible = styled(S.AdminVisible)``

export const AdminProductCode = styled(S.AdminProductCode)``

export const AdminProductImg = styled(S.AdminProductImg)``

export const AdminProductName = styled(S.AdminProductName)``

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
  width: 130px;
  height: 50px;
  background-color: aliceblue;
`
