import styled, { css } from 'styled-components'

export const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const ItemImgWrapper = styled.div`
  width: 100%;
  position: relative;
  cursor: pointer;
  transition: 0.3s ease;
  :hover {
    opacity: 0.4;
  }
  ::after {
    display: block;
    content: '';
    padding-bottom: 100%;
  }
`
export const ItemImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
`

export const ItemDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`
export const ItemPayWrapper = styled.div``
export const ItemName = styled.h2`
  margin-bottom: 5px;
  cursor: pointer;
`
export const ItemPriceWrapper = styled.div`
  display: flex;
`
export const ItemPriceText = styled.p`
  padding-right: 5px;
  ${props =>
    props.sale ||
    css`
      color: #b4b4b4;
      text-decoration: line-through;
    `}
`
export const StatusGroup = styled.div`
  display: flex;
  margin: 8px 0;
`
export const StatusWrapper = styled.div`
  display: flex;
  margin-right: 5px;
`

export const ItemCommentWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
`
export const CommentIcon = styled.div`
  margin-right: 5px;
  color: #b4b4b4;
`
export const CommentText = styled.span`
  color: #b4b4b4;
`
