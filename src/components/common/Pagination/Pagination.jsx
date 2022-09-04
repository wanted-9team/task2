import React, { useRef } from 'react'
import { useState } from 'react'
import * as S from './Pagination.style'

const Pagination = ({ total, getDatas }) => {
  const [startPage, setStartPage] = useState(1)
  const [activedPage, setActivedPage] = useState(1)

  const blockNum = useRef(5).current
  const itemPerPage = useRef(10).current
  const pageLength = Math.ceil(total / itemPerPage)

  const onClickPage = ({ target }) => {
    setActivedPage(Number(target.id))
    getDatas(Number(target.id))
  }

  const onClickPrev = () => {
    if (startPage === 1) return
    setStartPage(prev => prev - blockNum)
    getDatas(startPage - blockNum)
    setActivedPage(startPage - blockNum)
  }

  const onClickNext = () => {
    if (startPage + itemPerPage > pageLength) return
    setStartPage(prev => prev + blockNum)
    getDatas(startPage + blockNum)
    setActivedPage(startPage + blockNum)
  }

  return (
    <S.PaginationWrapper>
      <S.PageButton disabled={startPage === 1} onClick={onClickPrev}>
        &lt;
      </S.PageButton>
      {new Array(blockNum).fill(1).map((_, idx) => {
        return (
          idx + startPage <= pageLength && (
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
      <S.PageButton disabled={startPage + itemPerPage > pageLength} onClick={onClickNext}>
        &gt;
      </S.PageButton>
    </S.PaginationWrapper>
  )
}

export default Pagination
