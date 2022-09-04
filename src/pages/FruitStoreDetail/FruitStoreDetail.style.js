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
  height: auto;
  overflow: hidden;
  vertical-align: top;
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
`

export const OptionChoiceText = styled.p`
  font-weight: bold;
  font-size: 0.9rem;
  margin-bottom: 0.7em;
`

export const SelectBtn = styled.button``

export const Select = styled.select`
  height: 40px;
  border: 1px solid #ddd;
  width: 100%;
`

export const Option = styled.option``

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

