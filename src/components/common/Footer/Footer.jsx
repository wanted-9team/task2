import React from 'react'
import * as S from './Footer.style'
import { AiFillInstagram } from 'react-icons/ai'
import { RiKakaoTalkFill } from 'react-icons/ri'
import { SiNaver } from 'react-icons/si'

const Footer = () => {
  return (
    <S.Footer>
      <S.FooterItemsWrap>
        <S.FooterItem>
          <S.IntroWrap>
            <S.FooterTitle>About Fruitte</S.FooterTitle>
            <S.IntroDesc>
              <S.BoldFont>프루떼는</S.BoldFont> 안전한 먹거리의 신념을 지키는 좋은 농장을 발굴하고
              소개하는 팜큐레이터입니다. <br />
              건강한 자연을 가까이에서 만날 수 있는 팜큐레이션 서비스를 통하여 농장을 알고 누리고
              맛보는 기쁨을 전합니다. 프루떼를 경험하는 사람들의 일상에 풍요로움을 더하는 것이
              우리가 지향하는 가치입니다.
            </S.IntroDesc>
          </S.IntroWrap>
          <S.SnsLinksWrap>
            <S.SnsLink href="https://www.instagram.com/fruitte_picnic/" target="_blank">
              <AiFillInstagram size="36" />
            </S.SnsLink>
            <S.SnsLink href="https://pf.kakao.com/_jBWkK" target="_blank">
              <RiKakaoTalkFill size="36" />
            </S.SnsLink>
            <S.SnsLink href="https://blog.naver.com/fruitte" target="_blank">
              <SiNaver size="30" />
            </S.SnsLink>
          </S.SnsLinksWrap>
        </S.FooterItem>
        <S.FooterItem>
          <S.InfoWrap>
            <S.FooterTitle>Infomation</S.FooterTitle>
            <S.InfoList>
              <S.InfoItemWrap>
                <S.BoldFont>[문의하기]</S.BoldFont>
                <S.InfoItemDesc>
                  카카오톡 채널 ‘프루떼' (주중 9시 ~ 19시 채팅 상담 가능)
                </S.InfoItemDesc>
              </S.InfoItemWrap>
              <S.InfoItemWrap>
                <S.BoldFont>[무통장 입금 계좌 안내]</S.BoldFont>
                <S.InfoItemDesc>국민은행 527837-01-004676 주식회사 로컬앤라이프</S.InfoItemDesc>
              </S.InfoItemWrap>
              <S.InfoItemWrap>
                <S.AdressWrap>
                  <S.InfoItemDesc>상호자명 : Local & Life Inc.</S.InfoItemDesc>
                  <S.InfoItemDesc>대표 : 홍인기</S.InfoItemDesc>
                  <S.InfoItemDesc>
                    전화번호 :
                    <S.InfoItemPhone href="tel:010-8828-0472">010-8828-0472</S.InfoItemPhone>
                  </S.InfoItemDesc>
                  <S.InfoItemDesc>사업자번호 : 625-81-01879</S.InfoItemDesc>
                  <S.InfoItemDesc>통신판매허가번호 : 2020-서울동대문-1110</S.InfoItemDesc>
                  <S.InfoItemDesc>
                    주소 : 서울시 동대문구 회기로 85 한국과학기술원 9호관 9402호
                  </S.InfoItemDesc>
                  <S.TermsWrap>
                    <S.InfoItemDesc>이용약관</S.InfoItemDesc>
                    <S.InfoItemDesc>개인정보처리방침</S.InfoItemDesc>
                  </S.TermsWrap>
                  <S.InfoItemDesc>
                    Copyright ⓒ 2022 프루떼-오늘도프룻해! All rights reserved.
                  </S.InfoItemDesc>
                </S.AdressWrap>
              </S.InfoItemWrap>
            </S.InfoList>
          </S.InfoWrap>
        </S.FooterItem>
      </S.FooterItemsWrap>
    </S.Footer>
  )
}

export default Footer
