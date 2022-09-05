import { BiCheckCircle } from 'react-icons/bi'
import * as S from './ShopList.style'
import { useNavigate } from 'react-router-dom'
import { getFormattedPrice } from '../../utils/getPrice'

const ShopList = () => {
  const navigate = useNavigate()
  const goShoppingPage = () => {
    navigate('/fruit_store')
  }

  return (
    <>
      <S.MainContainer>
        <BiCheckCircle size="120px" />
        <S.MessageTitle>주문이 완료되었습니다.</S.MessageTitle>
        <S.OrderDetailContainer>
          <S.OrderDetailTitle>
            <S.TitleLeft>주문 상세(총 5건)</S.TitleLeft>
            <S.TitleRight>주문번호: 2012314324324234</S.TitleRight>
          </S.OrderDetailTitle>
          <S.ProductContainer>
            <S.Product>
              <S.OrderProductImg src="https://cdn.imweb.me/thumbnail/20200715/236fbfcdd9cf2.jpg" />
              <S.OrderProductBodyContainer>
                <S.OrderProductName>거창 오가네체리자두 3kg 한 상자</S.OrderProductName>
                <S.OrderProductDescription>
                  <S.OrderOption>
                    <S.OptionBox>필수</S.OptionBox>
                    <S.OptionDetail>1kg 1개</S.OptionDetail>
                  </S.OrderOption>
                  <S.OrderOption>
                    <S.OptionBox>선택</S.OptionBox>
                    <S.OptionDetail>쇼핑백 - 1개</S.OptionDetail>
                  </S.OrderOption>
                </S.OrderProductDescription>
                <S.OrderProductPrice>{getFormattedPrice(36000)}원</S.OrderProductPrice>
              </S.OrderProductBodyContainer>
            </S.Product>
            <S.OrderDetailButton>더보기</S.OrderDetailButton>
          </S.ProductContainer>
        </S.OrderDetailContainer>
        <S.OrderDetailContainer>
          <S.OrderDetailTitle>
            <S.TitleLeft>결제 정보</S.TitleLeft>
          </S.OrderDetailTitle>
          <S.PaymentInfo>
            <S.DetailLine>
              <S.Type>총 결제금액</S.Type>
              <S.Value $option="totalPrice">{getFormattedPrice(18700)}원</S.Value>
            </S.DetailLine>
            <S.DetailLine>
              <S.Type>총 상품가격</S.Type>
              <S.Value>{getFormattedPrice(15200)}원</S.Value>
            </S.DetailLine>
            <S.DetailLine>
              <S.Type>배송비</S.Type>
              <S.Value>{getFormattedPrice(3500)}원</S.Value>
            </S.DetailLine>
          </S.PaymentInfo>
        </S.OrderDetailContainer>
        <S.OrderDetailContainer>
          <S.OrderDetailTitle>
            <S.TitleLeft>받는 사람 정보</S.TitleLeft>
          </S.OrderDetailTitle>
          <S.PaymentInfo>
            <S.DetailLine>
              <S.Type>받는 사람</S.Type>
              <S.Value>김나무</S.Value>
            </S.DetailLine>
            <S.DetailLine>
              <S.Type>연락처</S.Type>
              <S.Value>010-1234-5678</S.Value>
            </S.DetailLine>
            <S.DetailLine>
              <S.Type>배송지</S.Type>
              <S.Value>서울특별시 강남구 언주로 12길 204호</S.Value>
            </S.DetailLine>
          </S.PaymentInfo>
        </S.OrderDetailContainer>
        <S.BacktoShoppingButton onClick={goShoppingPage}>쇼핑 계속하기</S.BacktoShoppingButton>
      </S.MainContainer>
    </>
  )
}
export default ShopList
