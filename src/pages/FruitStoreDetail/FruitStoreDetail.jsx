import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import * as S from './FruitStoreDetail.style'
import { getFormattedPrice, getSalePrice } from '../../utils/getPrice'
import useProductApi from '../../utils/useProductApi'
import { useNavigate } from 'react-router'
import { ShopInfoContextStore } from '../../store/ShopInfoContext'
import { IoIosCloseCircleOutline } from 'react-icons/io'

const FruitStoreDetail = () => {
  const [data, setData] = useState({})
  const [nowImage, setNowImage] = useState(0)
  const params = useParams()
  const { shopItemInfo, setShopItemInfo } = useContext(ShopInfoContextStore)
  const [item, setItem] = useState([])
  const [toggle, setToggle] = useState('none')
  const [shipping, setShipping] = useState('배송비(선결제)')

  const { getProducts } = useProductApi()

  const getDatas = page => {
    getProducts(page).then(res => {
      res.data.list.forEach(oneData => {
        if (Number(params.id) === Number(oneData.id)) {
          setData(oneData)
        }
      })
    })
  }

  const SelectOptions = () => {
    return (
      <S.OptionChoice>
        <S.OptionChoiceText>필수선택*</S.OptionChoiceText>
        <S.ItemOptionSelect onClick={toggleOption}>필수 옵션(필수)</S.ItemOptionSelect>
        <S.ItemOptionLists style={{ display: toggle }}>
          {data.select?.map(option => (
            <S.ItemOptionList onClick={() => selectOption(option)} key={option.option}>
              {option.option}
              <S.ItemOptionPrice>{getFormattedPrice(option.price)}원</S.ItemOptionPrice>
            </S.ItemOptionList>
          ))}
        </S.ItemOptionLists>
      </S.OptionChoice>
    )
  }

  const toggleOption = () => {
    toggle === 'none' ? setToggle('block') : setToggle('none')
  }

  const selectOption = option => {
    toggleOption()
    if (item.every(eachItem => eachItem.select.option !== option.option)) {
      setItem(() => [
        ...item,
        {
          name: data.name,
          price: data.price,
          select: option,
          imageUrl: data.imageUrl[0],
          shipping: data.shipping.price,
          id: data.id,
          sale: data.sale,
          selectQuantity: 1,
        },
      ])
    } else {
      alert('이미 해당 옵션이 있습니다.')
    }
  }
  const itemCopy = item
  const minusQuantity = option => {
    itemCopy.forEach(eachItem => {
      if (eachItem.select.option === option && eachItem.selectQuantity > 1) {
        eachItem.selectQuantity -= 1
        setItem(item => [...itemCopy])
      }
    })
  }
  const plusQuantity = option => {
    itemCopy.forEach(eachItem => {
      if (eachItem.select.option === option) {
        eachItem.selectQuantity += 1
        setItem(item => [...itemCopy])
      }
    })
  }

  const SelectLists = () => {
    return (
      <S.SelectList>
        {item.length !== 0 ? (
          item.map(list => (
            <S.SelectOption key={item.id}>
              <S.SelectOptionName>
                {list.select.option}
                <IoIosCloseCircleOutline onClick={() => onRemove(list.select.option)} />
              </S.SelectOptionName>
              <S.SelectOptionBtm>
                <S.SelectQuantity>
                  <S.BtnMinus onClick={() => minusQuantity(list.select.option)}>-</S.BtnMinus>
                  <S.SelectQuantityInput defaultValue={list.selectQuantity} type="number" />
                  <S.BtnPlus onClick={() => plusQuantity(list.select.option)}>+</S.BtnPlus>
                </S.SelectQuantity>
                <S.SelectOptionPrice>
                  {getFormattedPrice(list.select.price * list.selectQuantity)}원
                </S.SelectOptionPrice>
              </S.SelectOptionBtm>
            </S.SelectOption>
          ))
        ) : (
          <S.SelectOption key={item.id}></S.SelectOption>
        )}
      </S.SelectList>
    )
  }

  const Total = () => {
    return item.length !== 0 ? (
      <S.TotalQuantity>
        총 상품금액(
        {(item.length > 1 && item.reduce((a, b) => a.selectQuantity + b.selectQuantity)) ||
          (item.length === 1 && item[0].selectQuantity)}
        개)
        <S.TotalPrice>
          {(item.length > 1 &&
            item.reduce((a, b) =>
              getFormattedPrice(
                a.select.price * a.selectQuantity + b.select.price * b.selectQuantity,
              ),
            )) ||
            (item.length === 1 && getFormattedPrice(item[0].select.price * item[0].selectQuantity))}
          원
        </S.TotalPrice>
      </S.TotalQuantity>
    ) : (
      <S.TotalQuantity></S.TotalQuantity>
    )
  }

  const onRemove = option => {
    setItem(item.filter(eachItem => eachItem.select.option !== option))
  }

  const shippingOnChange = e => {
    setShipping(e.currentTarget.value)
  }

  const changeShipping = () => {
    if (shipping === '배송비(착불)' && item.length !== 0) {
      console.log(item[0].shipping)
      // setItem(item => (item[0].shipping = 0))
    }
  }

  useEffect(() => {
    getDatas(1)
    changeShipping()
  }, [])

  console.log(shipping)
  console.log(item)

  const navigate = useNavigate()
  const clickBuyBtn = () => {
    item.length >= 1
      ? navigate(`/shop_payment`, { item: item })
      : alert('필수 옵션을 선택해주세요.')
  }

  return (
    <S.MainWrapper>
      <S.TopWrapper>
        <S.Category>
          Home &gt; <S.CategoryLink to="/fruit_store">FRUITTE STORE</S.CategoryLink>
        </S.Category>
        <S.DetailWrapper>
          <S.ImageWrapper>
            <S.ImageSection>
              <S.Image src={data.imageUrl && data.imageUrl[nowImage]} />
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
                {getFormattedPrice(getSalePrice(data.price, data.sale))}원
                <S.SalePrice>{getFormattedPrice(data.price)}원</S.SalePrice>
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
                  배송비
                  <S.ListDescription>
                    {getFormattedPrice(data.shipping?.price)}원 ({data.shipping?.info})
                  </S.ListDescription>
                </S.List>
                {
                  <S.ShippingSelect onChange={shippingOnChange} value={shipping}>
                    <S.ShippingOption>배송비(선결제)</S.ShippingOption>
                    <S.ShippingOption>배송비(착불)</S.ShippingOption>
                  </S.ShippingSelect>
                }
              </S.shipping>

              <SelectOptions />
              <SelectLists />
              <Total />
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
