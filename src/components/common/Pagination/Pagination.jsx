import React from 'react'
import { useState } from 'react'
import * as S from './Pagination.style'

const Pagination = ({ total, limit, activedPage, setActivedPage }) => {
  const [startPage, setStartPage] = useState(1)
  const lastPage = Math.ceil(total / limit)

  const onClickPage = ({ target }) => {
    setActivedPage(Number(target.id))
  }
  const onClickPrev = () => {
    if (startPage === 1) return
    setStartPage(prev => prev - limit)
    setActivedPage(startPage - limit)
  }
  const onClickNext = () => {
    if (startPage + limit > lastPage) return
    setStartPage(prev => prev + limit)
    setActivedPage(startPage + limit)
  }

  return (
    <S.PaginationWrapper>
      <S.PageButton disabled={startPage === 1} onClick={onClickPrev}>
        &lt;
      </S.PageButton>
      {new Array(5).fill(1).map((_, idx) => {
        return (
          idx + startPage <= lastPage && (
            <S.PageButton
              id={String(idx + startPage)}
              onClick={onClickPage}
              key={idx}
              isActive={idx + startPage === activedPage}
            >
              {idx + startPage}
            </S.PageButton>
          )
        )
      })}
      <S.PageButton disabled={startPage + limit > lastPage} onClick={onClickNext}>
        &gt;
      </S.PageButton>
    </S.PaginationWrapper>
  )
}

export default Pagination
