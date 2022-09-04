import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as S from './FruitStoreDetail.style'
import { getFormattedPrice, getSalePrice } from '../../utils/getPrice'
import axios from 'axios'
import { useNavigate } from 'react-router'

const FruitStoreDetail = () => {
  const [data, setData] = useState({})
  const [selectedOption, setSelectedOption] = useState('필수선택 (필수)')
  const [nowImage, setNowImage] = useState(0)
  const params = useParams()

  const getDatas = async () => {
    await axios.get('/data/data.json').then(res => {
      res.data.forEach(oneData => {
        if (Number(params.id) === Number(oneData.id)) {
          setData(oneData)
        }
      })
    })
  }

  const handleSelect = e => {
    e && setSelectedOption(e.target.value)
  }

  const imgMouseOver = e => {
    e && console.log(e.target.value)
  }

  useEffect(() => {
    getDatas()
    handleSelect()
    imgMouseOver()
  }, [])

  const navigate = useNavigate()
  const clickBuyBtn = () => {
    selectedOption !== '필수선택 (필수)' || !selectedOption
      ? navigate(`/shop_payment/?order_code=${params.id}`)
      : alert('필수 옵션을 선택해주세요.')
  }

  return (
    <S.MainWrapper>
      <S.TopWrapper>
        <S.Category>
          {' '}
          Home > <S.CategoryLink to="/fruit_store">FRUITTE STORE</S.CategoryLink>
        </S.Category>
        <S.DetailWrapper>
          <S.ImageWrapper>
            <S.ImageSection>
              <S.Image src={data.imageUrl ? data.imageUrl[nowImage] : console.log('')} />
            </S.ImageSection>
            <S.ImageList>
              {data.imageUrl?.map(img => (
                <S.ThumbnailWrapper>
                  <S.Thumbnail
                    name={data.imageUrl?.indexOf(img)}
                    src={img}
                    onMouseOver={e => e && setNowImage(e.target.name)}
                  />
                </S.ThumbnailWrapper>
              ))}
            </S.ImageList>
          </S.ImageWrapper>
          <S.TextWrapper>
            <S.TextTopWrapper>
              <S.Title>{data.name}</S.Title>
              <S.Status>
                {data.status?.map(option => (
                  <S.StatusOption>{option}</S.StatusOption>
                ))}
              </S.Status>
              <S.Price>
                {getFormattedPrice(data.price)}원
                <S.SalePrice>
                  {getFormattedPrice(getSalePrice(data.price, data.sale))}원
                </S.SalePrice>
              </S.Price>
            </S.TextTopWrapper>
            <S.TextMidWrapper>
              <S.Description>
                {data.description?.map(option => (
                  <S.DescriptionText>{option}</S.DescriptionText>
                ))}
              </S.Description>
              <S.shipping>
                <S.List>
                  원산지 <S.ListDescription>{data.origin}</S.ListDescription>
                </S.List>
                <S.List>
                  배송 방법 <S.ListDescription>{data.shipping?.option}</S.ListDescription>
                </S.List>
                <S.List>
                  배송비{' '}
                  <S.ListDescription>
                    {getFormattedPrice(data.shipping?.price)}원 ({data.shipping?.info})
                  </S.ListDescription>
                </S.List>
                <S.ShippingSelect>
                  <S.ShippingOption>배송비(선결제)</S.ShippingOption>
                  <S.ShippingOption>배송비(착불)</S.ShippingOption>
                </S.ShippingSelect>
              </S.shipping>
              <S.OptionChoice>
                <S.OptionChoiceText>필수선택*</S.OptionChoiceText>
                <S.Select onChange={handleSelect} value={selectedOption}>
                  <S.Option style={{ display: 'none' }}>필수선택 (필수)</S.Option>
                  {data.select?.map(option => (
                    <S.Option value={option.option} key={option.option}>
                      {option.option}
                    </S.Option>
                  ))}
                </S.Select>
              </S.OptionChoice>
              <S.TextBtmWrapper>
                <S.BtnWrapper>
                  <S.BtnBuy onClick={clickBuyBtn}>구매하기</S.BtnBuy>
                  <S.BtnCart>장바구니</S.BtnCart>
                  <S.BtnWant>0</S.BtnWant>
                </S.BtnWrapper>
              </S.TextBtmWrapper>
            </S.TextMidWrapper>
          </S.TextWrapper>
        </S.DetailWrapper>
      </S.TopWrapper>
      <S.DetailTabWrapper>
        <S.DetailTab to="#tab_detail">상세정보</S.DetailTab>
        <S.DetailTab to="#tab_review">구매평(0)</S.DetailTab>
        <S.DetailTab to="#tab_qna">Q & A(0)</S.DetailTab>
      </S.DetailTabWrapper>
    </S.MainWrapper>
  )
}

export default FruitStoreDetail
