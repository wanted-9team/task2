import React, { useEffect, useState } from 'react'
import FruitStoreItem from '../FruitStoreItem/FruitStoreItem'
import * as S from './FruitStoreList.style'
import Pagination from '../../common/Pagination/Pagination'
import useProductApi from '../../../utils/useProductApi'

const FruitStoreList = () => {
  const [data, setData] = useState([])
  const [total, setTotal] = useState(0)
  const [activedPage, setActivedPage] = useState(1)
  const limit = 10

  const { getProducts } = useProductApi()

  const getDatas = page => {
    getProducts(page).then(res => {
      setData(res.data.list)
      setTotal(res.data.totalResults)
    })
  }

  useEffect(() => {
    getDatas(1)
  }, [])

  return (
    <>
      <S.Title>
        FRUITTE STORE <S.TitleStrong> {total}</S.TitleStrong>
      </S.Title>

      <S.GridWrapper>
        {data?.map((item, idx) => {
          return <FruitStoreItem key={idx} item={item} />
        })}
      </S.GridWrapper>

      <S.PaginationWrapper>
        <Pagination
          total={total}
          limit={limit}
          activedPage={activedPage}
          setActivedPage={setActivedPage}
          getDatas={getDatas}
        />
      </S.PaginationWrapper>
    </>
  )
}

export default FruitStoreList
