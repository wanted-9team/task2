import React, { useRef } from 'react'
import { useState } from 'react'
import * as S from './Pagination.style'

const Pagination = ({ total, getDatas }) => {
  const [startPage, setStartPage] = useState(1)
  const [activedPage, setActivedPage] = useState(1)

  const BLOCK_NUM = useRef(5).current
  const ITEM_PER_PAGE = useRef(10).current
  const PAGE_LENGTH = Math.ceil(total / ITEM_PER_PAGE)

  const onClickPage = ({ target }) => {
    setActivedPage(Number(target.id))
    getDatas(Number(target.id))
  }

  const onClickPrev = () => {
    if (startPage === 1) return
    setStartPage(prev => prev - BLOCK_NUM)
    getDatas(startPage - BLOCK_NUM)
    setActivedPage(startPage - BLOCK_NUM)
  }

  const onClickNext = () => {
    if (startPage + ITEM_PER_PAGE > PAGE_LENGTH) return
    setStartPage(prev => prev + BLOCK_NUM)
    getDatas(startPage + BLOCK_NUM)
    setActivedPage(startPage + BLOCK_NUM)
  }

  return (
    <S.PaginationWrapper>
      <S.PageButton disabled={startPage === 1} onClick={onClickPrev}>
        &lt;
      </S.PageButton>
      {new Array(BLOCK_NUM).fill(1).map((_, idx) => {
        return (
          idx + startPage <= PAGE_LENGTH && (
            <S.PageButton
              id={String(idx + startPage)}
              onClick={onClickPage}
              key={idx + startPage}
              isActive={idx + startPage === activedPage}
            >
              {idx + startPage}
            </S.PageButton>
          )
        )
      })}
      <S.PageButton disabled={startPage + ITEM_PER_PAGE > PAGE_LENGTH} onClick={onClickNext}>
        &gt;
      </S.PageButton>
    </S.PaginationWrapper>
  )
}

export default Pagination
