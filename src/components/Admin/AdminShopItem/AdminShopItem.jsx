import React from 'react'
import * as S from './AdminShopItme.style'
import Status from '../../common/Status/Status'

const STATUS = ['sale', 'best']

const AdminShopItem = () => (
  <S.AdminShopItemContainer>
    <S.AdminVisible>
      <S.VisibleBox type="checkbox" />
    </S.AdminVisible>
    <S.AdminProductCode>상품코드</S.AdminProductCode>
    <S.AdminProductImg>
      <S.ProductImg
        src="https://cdn.imweb.me/thumbnail/20200715/236fbfcdd9cf2.jpg"
        alt="상품관련사진"
      />
    </S.AdminProductImg>
    <S.AdminProductName>상품명</S.AdminProductName>
    <S.AdminProductPrice>가격</S.AdminProductPrice>
    <S.AdminProductQuantity>수량</S.AdminProductQuantity>
    <S.AdminProductSale>할인율</S.AdminProductSale>
    <S.AdminProductStatus>
      {STATUS.map((status, index) => (
        <Status key={index} status={status} />
      ))}
    </S.AdminProductStatus>
    <S.AdminButtonContainer>
      <S.AdminButton>수정하기</S.AdminButton>
      <S.AdminButton>삭제하기</S.AdminButton>
    </S.AdminButtonContainer>
  </S.AdminShopItemContainer>
)

export default AdminShopItem
