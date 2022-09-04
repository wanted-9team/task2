import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const MainWrapper = styled.main`
  align-items: center;
  max-width: 1280px;
  margin: 0 auto 50px auto;
`

export const TopWrapper = styled.div`
  padding-top: 120px;
`

export const Category = styled.div`
  color: #999;
  margin-bottom: 1em;
`

export const CategoryLink = styled(Link)`
  color: black;
`

export const DetailWrapper = styled.div``

export const ImageWrapper = styled.div`
  width: 50%;
  display: inline-block;
`

export const ImageSection = styled.div`
  height: auto;
  overflow: hidden;
  vertical-align: top;
`

export const ImageList = styled.div``

export const ThumbnailWrapper = styled.div`
  display: inline-block;
  width: 70px;
  height: 70px;
  overflow: hidden;
  margin-top: 1em;
`

export const Thumbnail = styled.img`
  width: 100%;
  height: auto;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
`

export const TextWrapper = styled.div`
  width: 50%;
  display: inline-block;
  vertical-align: top;
  padding-left: 100px;
`

export const TextTopWrapper = styled.div`
  border-bottom: 1px solid #ddd;
  padding-bottom: 20px;
  margin-bottom: 20px;
`

export const Title = styled.p`
  font-size: 1.5rem;
  margin-bottom: 0.7em;
  line-height: 2rem;
`

export const Status = styled.div`
  margin-bottom: 1em;
`

export const StatusOption = styled.span`
  margin-right: 5px;
  border: 1px solid #fe5356;
  background-color: #fe5356;
  color: white;
  padding: 2px 8px;
  font-size: 0.7rem;
`

export const Price = styled.p`
  color: #4c9c2e;
  font-size: 1.3rem;
`

export const SalePrice = styled.span`
  color: #aaa;
  margin-left: 5px;
  font-size: 0.9rem;
  text-decoration: line-through;
`

export const TextMidWrapper = styled.div``

export const Description = styled.div``

export const DescriptionText = styled.p`
  color: #666;
  line-height: 1.7rem;
`

export const shipping = styled.ul`
  margin-top: 1.3em;
`

export const List = styled.li`
  font-weight: 600;
  line-height: 1.3rem;
  font-size: 0.75rem;
  color: #333;
`

export const ListDescription = styled.span`
  font-weight: normal;
  margin-left: 10px;
`

export const ShippingSelect = styled.select`
  border: 1px solid #ddd;
  height: 40px;
  margin-top: 1em;
`

export const ShippingOption = styled.option``

export const OptionChoice = styled.div`
  margin-top: 2em;
  position: relative;
`

export const OptionChoiceText = styled.p`
  font-weight: bold;
  font-size: 0.9rem;
  margin-bottom: 0.7em;
`

export const SelectBtn = styled.button``

export const ItemOptionSelect = styled.button`
  height: 40px;
  border: 1px solid #ddd;
  width: 100%;
  text-align: left;
  padding: 0 10px;
`

export const ItemOptionLists = styled.div`
  border: 1px solid #ddd;
  position: absolute;
  width: 100%;
  background-color: white;
  top: 63px;
  left: 0;
  z-index: 999;
  cursor: pointer;

  & div:last-chlid {
    border-bottom: none;
  }
`

export const ItemOptionList = styled.div`
  padding: 15px;
  font-size: 0.9rem;
  border-bottom: 1px solid #ddd;
`

export const ItemOptionPrice = styled.p`
  font-weight: bold;
  margin-top: 0.5em;
`

export const SelectList = styled.div`
  margin-top: 2em;
`

export const SelectOption = styled.div`
  background-color: #f5f5f5;
  margin-bottom: 10px;
`

export const SelectOptionName = styled.p`
  border-bottom: 1px solid #e5e5e5;
  padding: 20px 15px;
  position: relative;

  & svg {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 20px;
    top: 20px;
    color: #777;
  }
`

export const SelectOptionBtm = styled.div`
  position: relative;
  padding: 20px 15px;
`

export const SelectQuantity = styled.div`
  border: 1px solid #ccc;
  display: inline-block;

  & input[type='number']::-webkit-outer-spin-button,
  & input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  & button {
    height: 30px;
    width: 30px;
    background-color: white;
  }
`

export const BtnMinus = styled.button`
  border-right: 1px solid #ccc;
`

export const SelectQuantityInput = styled.input`
  height: 30px;
  width: 50px;
  border: none;
  text-align: center;
`

export const BtnPlus = styled.button`
  border-left: 1px solid #ccc;
`

export const SelectOptionPrice = styled.span`
  position: absolute;
  right: 20px;
  bottom: 20px;
  font-size: 1rem;
  font-weight: bold;
`

export const TotalQuantity = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2em 0 1em 0;
  color: #777;
  align-items: center;
`

export const TotalPrice = styled.span`
  text-align: right;
  color: black;
  font-weight: bold;
  font-size: 1.3rem;
`

export const TextBtmWrapper = styled.div`
  margin-top: 2em;
`

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & button {
    width: 32%;
    line-height: 50px;
    border-radius: 25px;
    border: 1px solid #ccc;
    font-size: 0.9rem;
    font-weight: bold;
  }
`

export const BtnBuy = styled.button`
  background-color: #4c9c2e;
  color: white;
  border-color: #4c9c2e !important;
`

export const BtnCart = styled.button``

export const BtnWant = styled.button``

export const DetailTabWrapper = styled.div`
  border: 1px solid #ddd;
  margin-top: 3em;

  & a:last-child {
    border-right: 0;
  }
`

export const DetailTab = styled(Link)`
  width: 33.333%;
  display: inline-block;
  text-align: center;
  line-height: 40px;
  border-right: 1px solid #ddd;
`
