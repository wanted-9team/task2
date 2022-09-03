import React from 'react'
import FruitStoreList from '../../components/FruitStore/FruitStoreList/FruitStoreList'
import * as S from './FruitStore.style'

const FruitStore = () => {
  return (
    <S.MainWrapper>
      <S.TextTable>
        <S.TextWrapper>
          <S.LogoImg src={process.env.PUBLIC_URL + '/assets/logo.png'} />
          <S.TextStrong>프루떼 [ 수확배송 ]</S.TextStrong>
        </S.TextWrapper>
        <S.TextWrapper>
          <S.Text>
            친환경 농가의 맛있고 바른 먹거리를 만났을때 게릴라로 열리는 프루떼의 반짝스토어
          </S.Text>
          <S.Text>가장 알맞게 익었을때 농장에서 바로! 수확해서 배송해드립니다.</S.Text>
        </S.TextWrapper>
      </S.TextTable>

      <FruitStoreList />

      <S.TextTable>
        <S.TextWrapper>
          <S.LogoImg src={process.env.PUBLIC_URL + '/assets/logo.png'} />
          <S.TextStrong>우리농가 파트너 [ 프룻파머 ]</S.TextStrong>
        </S.TextWrapper>
        <S.TextWrapper>
          <S.Text>
            프루떼는 다음 세대의 환경과 바른 먹거리를 생각하는 농가파트너 ‘프룻파머’와 함께합니다.
          </S.Text>
          <S.Text>넓고 푸른 환경에서 준비한 피크닉으로 여러분을 초대하기도 하고,</S.Text>
          <S.Text>
            반짝 스토어에서는 친환경 신념을 지키며 정성껏 기른 농가의 작물들을 엄선하여 소개하고
            있습니다.
          </S.Text>
          <S.Text>
            프루떼 피크닉과 반짝스토어를 통해 친환경 농장을 알고 맛보는 기쁨까지 얻으실 수 있습니다
          </S.Text>
        </S.TextWrapper>
      </S.TextTable>
    </S.MainWrapper>
  )
}

export default FruitStore
