import React from 'react'
import * as S from './AdminShopItme.style'
import Status from '../../common/Status/Status'
import { getFormattedPrice } from '../../../utils/getPrice'
import useProductApi from '../../../utils/useProductApi'

const AdminShopItem = ({
  itemInfo: { id, name, imageUrl, price, quantity, sale, status, visible },
  setModifyItemId,
  isModify,
}) => {
  const { deleteProducts } = useProductApi()

  const modifyHandler = itemId => {
    setModifyItemId(itemId)
  }

  const completeHandler = () => {
    // 변경된 데이터를 서버로 전송하는 함수
    setModifyItemId('')
  }

  const deleteHandler = itemId => {
    if (window.confirm('해당 아이템을 삭제하시겠습니까?')) {
      deleteProducts(itemId)
    }
  }

  return (
    <S.AdminShopItemContainer>
      <S.AdminVisible>
        {isModify ? <S.VisibleBox type="checkbox" defaultChecked={visible} /> : visible ? 'O' : 'X'}
      </S.AdminVisible>
      <S.AdminProductCode>{id}</S.AdminProductCode>
      <S.AdminProductImg>
        <S.ProductImg src={imageUrl[0]} alt="상품관련사진" />
      </S.AdminProductImg>
      <S.AdminProductName>{name}</S.AdminProductName>
      <S.AdminProductPrice>{`${getFormattedPrice(price)} 원`}</S.AdminProductPrice>
      <S.AdminProductQuantity>{`${quantity} 개`}</S.AdminProductQuantity>
      <S.AdminProductSale>{`${sale}%`}</S.AdminProductSale>
      <S.AdminProductStatus>
        {status.map((status, index) => (
          <Status key={index} status={status} />
        ))}
      </S.AdminProductStatus>
      {isModify ? (
        <S.AdminButtonContainer>
          <S.AdminButton onClick={() => completeHandler(id)}>수정완료</S.AdminButton>
          <S.AdminButton onClick={() => modifyHandler('')}>돌아가기</S.AdminButton>
        </S.AdminButtonContainer>
      ) : (
        <S.AdminButtonContainer>
          <S.AdminButton onClick={() => modifyHandler(id)}>수정하기</S.AdminButton>
          <S.AdminButton onClick={() => deleteHandler(id)}>삭제하기</S.AdminButton>
        </S.AdminButtonContainer>
      )}
    </S.AdminShopItemContainer>
  )
}

export default AdminShopItem
