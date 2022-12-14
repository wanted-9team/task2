import styled, { css } from 'styled-components'

import StyleVariables from '../../../styles/StyleVariables'

export const AdminShopContainer = styled.table`
  width: 1200px;
  margin: 0 auto 50px;
  border: 1px solid black;
  border-bottom: none;
`

export const AdminShopHeader = styled.thead`
  ${StyleVariables.headerFont}
`

export const AdminShopHeaderRow = styled.tr`
  ${StyleVariables.flex()}
  height: 60px;
  padding: 20px;
  border-bottom: 1px solid black;
`

export const AdminShopBody = styled.tbody``

const AdminCommonStyle = styled.td`
  ${StyleVariables.flex()}
`

const AdminVisibleColumn = styled(AdminCommonStyle)`
  flex: 0.6;
`

const AdminProductCodeColumn = styled(AdminCommonStyle)`
  flex: 1;
`

const AdminProductImgColumn = styled(AdminCommonStyle)`
  flex: 1;
`

const AdminProductNameColumn = styled(AdminCommonStyle)`
  flex: 2;
  padding: 20px;
  word-break: keep-all;
`

const AdminProductPriceColumn = styled(AdminCommonStyle)`
  flex: 1;
`

const AdminProductQuantityColumn = styled(AdminCommonStyle)`
  flex: 0.8;
`

const AdminProductSaleColumn = styled(AdminCommonStyle)`
  flex: 0.8;
`

const AdminProductStatusColumn = styled(AdminCommonStyle)`
  flex: 0.8;
`

const AdminButtonColumn = styled(AdminCommonStyle)`
  flex: 1;
`

export const AdminVisible = styled(AdminVisibleColumn)``

export const AdminProductCode = styled(AdminProductCodeColumn)``

export const AdminProductImg = styled(AdminProductImgColumn)``

export const AdminProductName = styled(AdminProductNameColumn)``

export const AdminProductPrice = styled(AdminProductPriceColumn)``

export const AdminProductQuantity = styled(AdminProductQuantityColumn)``

export const AdminProductSale = styled(AdminProductSaleColumn)``

export const AdminProductStatus = styled(AdminProductStatusColumn)``

export const AdminButton = styled(AdminButtonColumn)``

export const AdminPageButtonContainer = styled.div`
  ${StyleVariables.flex()}
  margin-bottom: 50px;
`

export const AdminListPageButton = styled.button`
  font-size: 20px;
  margin: 5px;
  padding: 5px;
  border: 1px solid #4a9536;
  border-radius: 5px;
  color: #4a9536;
  ${({ active }) => {
    if (active) {
      return css`
        color: white;
        background-color: #4a9536;
      `
    }
  }}
`
