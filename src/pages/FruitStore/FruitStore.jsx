import React from 'react'
import Carousel from '../../components/common/Carousel/Carousel'
import FruitStoreList from '../../components/FruitStore/FruitStoreList/FruitStoreList'
import * as S from './FruitStore.style'

const FruitStore = () => {
  return (
    <S.MainWrapper>
      <S.FruitStoreListWrapper>
        <S.Wrapper />
        <Carousel />
        <FruitStoreList />
        <S.Wrapper />
      </S.FruitStoreListWrapper>
    </S.MainWrapper>
  )
}

export default FruitStore
