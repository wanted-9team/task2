import React from 'react'
import { getFormattedPrice, getSalePrice } from '../../../utils/getPrice'
import Status from '../../common/Status/Status'
import { IoChatbubbleOutline } from 'react-icons/io5'
import * as S from './FruitStoreItem.style'
import { useNavigate } from 'react-router'

const FruitStoreItem = ({ item }) => {
  const navigate = useNavigate()
  const onClickItem = id => () => {
    navigate(`/fruit_store/${id}`)
  }

  return (
    <>
      {item.visible && (
        <S.ItemWrapper>
          <S.ItemImgWrapper onClick={onClickItem(item.id)}>
            <S.ItemImg src={item.imageUrl[0]} />
          </S.ItemImgWrapper>

          <S.ItemDetailWrapper>
            <S.ItemPayWrapper>
              <S.ItemName onClick={onClickItem(item.id)}>{item.name}</S.ItemName>
              <S.ItemPriceWrapper>
                <S.ItemPriceText sale>
                  {getFormattedPrice(getSalePrice(item.price, item.sale))}원
                </S.ItemPriceText>
                <S.ItemPriceText>{getFormattedPrice(item.price)}원</S.ItemPriceText>
              </S.ItemPriceWrapper>
              <S.StatusGroup>
                {item.status.map(status => (
                  <S.StatusWrapper key={status}>
                    <Status status={status} />
                  </S.StatusWrapper>
                ))}
              </S.StatusGroup>
            </S.ItemPayWrapper>

            <S.ItemCommentWrapper>
              <S.CommentIcon>
                <IoChatbubbleOutline />
              </S.CommentIcon>
              <S.CommentText>0</S.CommentText>
            </S.ItemCommentWrapper>
          </S.ItemDetailWrapper>
        </S.ItemWrapper>
      )}
    </>
  )
}

export default FruitStoreItem
