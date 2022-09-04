import React, { useEffect, useRef, useState } from 'react'
import * as S from './AdminShop.style'
import AdminShopItem from '../AdminShopItem/AdminShopItem'
import useProductApi from '../../../utils/useProductApi'
import { useNavigate, useParams } from 'react-router-dom'

const AdminShop = () => {
  const [itemLists, setItemLists] = useState([])
  const [modifyItemId, setModifyItemId] = useState('')
  const { getProducts } = useProductApi()
  const navigate = useNavigate()
  const params = useParams()
  const PAGELIMITS = useRef(10)
  const paginationNum = useRef(0)

  useEffect(() => {
    getProducts(params.id).then(res => {
      paginationNum.current = Math.ceil(res.data.totalResults / PAGELIMITS.current)
      setItemLists(res.data.list)
    })
  }, [params.id])

  const movePage = pageNum => {
    navigate(`/admin_shop/${pageNum}`)
  }

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
          <S.AdminListPageButton
            active={Number(params.id) === index + 1}
            key={index}
            onClick={() => movePage(index + 1)}
          >
            {index + 1}
          </S.AdminListPageButton>
        ))}
      </S.AdminPageButtonContainer>
    </>
  )
}

export default AdminShop
