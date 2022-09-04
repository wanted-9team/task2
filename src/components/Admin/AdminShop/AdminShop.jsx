import React, { useEffect, useRef, useState } from 'react'
import * as S from './AdminShop.style'
import AdminShopItem from '../AdminShopItem/AdminShopItem'
import useProductApi from '../../../utils/useProductApi'

const AdminShop = () => {
  const [itemLists, setItemLists] = useState([])
  const [modifyItemId, setModifyItemId] = useState('')
  const getItemsApi = useProductApi()

  useEffect(() => {
    getItemsApi.getProducts(1).then(res => {
      setItemLists(res.data.list)
    })
  }, [])

  return (
    <>
      <S.AdminShopContainer>
        <S.AdminShopHeader>
          <S.AdminShopHeaderRow>
            <S.AdminVisible>노출 여부</S.AdminVisible>
            <S.AdminProductCode>상품코드</S.AdminProductCode>
            <S.AdminProductImg>이미지</S.AdminProductImg>
            <S.AdminProductName>상품명</S.AdminProductName>
            <S.AdminProductPrice>가격</S.AdminProductPrice>
            <S.AdminProductQuantity>수량</S.AdminProductQuantity>
            <S.AdminProductSale>할인율</S.AdminProductSale>
            <S.AdminProductStatus>상태</S.AdminProductStatus>
            <S.AdminButton />
          </S.AdminShopHeaderRow>
        </S.AdminShopHeader>
        <S.AdminShopBody>
          {itemLists &&
            itemLists.map(items => (
              <AdminShopItem
                key={items.id}
                itemInfo={items}
                setModifyItemId={setModifyItemId}
                isModify={items.id === modifyItemId}
              />
            ))}
        </S.AdminShopBody>
      </S.AdminShopContainer>
    </>
  )
}

export default AdminShop
