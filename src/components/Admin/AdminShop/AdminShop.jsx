import React, { useEffect, useRef, useState } from 'react'
import * as S from './AdminShop.style'
import AdminShopItem from '../AdminShopItem/AdminShopItem'
import useProductApi from '../../../utils/useProductApi'
import { useNavigate } from 'react-router-dom'

const AdminShop = () => {
  const [itemLists, setItemLists] = useState([])
  const [modifyItemId, setModifyItemId] = useState('')
  const getItemsApi = useProductApi()
  const PAGELIMITS = useRef(10)
  const paginationNum = useRef(0)
  const currentPageNum = useRef(1)
  const navigate = useNavigate()

  useEffect(() => {
    getItemsApi.getProducts(currentPageNum.current).then(res => {
      paginationNum.current = Math.ceil(res.data.totalResults / PAGELIMITS.current)
      setItemLists(res.data.list)
    })
  }, [currentPageNum.current])

  const movePage = pageNum => {
    currentPageNum.current = pageNum
    navigate(`/admin_shop/${pageNum}`)
  }

  console.log(currentPageNum)

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
      <S.AdminPageButtonContainer>
        {new Array(paginationNum.current).fill('').map((numItem, index) => (
          <S.AdminListPageButton key={index} onClick={() => movePage(index + 1)}>
            {index + 1}
          </S.AdminListPageButton>
        ))}
      </S.AdminPageButtonContainer>
    </>
  )
}

export default AdminShop
