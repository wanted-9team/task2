import React, { useEffect, useState } from 'react'
import FruitStoreItem from '../FruitStoreItem/FruitStoreItem'
import * as S from './FruitStoreList.style'
import axios from 'axios'
import Pagination from '../../common/Pagination/Pagination'

const FruitStoreList = () => {
  const [data, setData] = useState([])
  const [activedPage, setActivedPage] = useState(1)
  const limit = 10
  const offset = (activedPage - 1) * limit

  const getDatas = async () => {
    await axios.get('data/data.json').then(res => {
      setData(res.data)
    })
  }

  useEffect(() => {
    getDatas()
  }, [])

  return (
    <>
      <S.Title>
        FRUITTE STORE <S.TitleStrong> {data.length}</S.TitleStrong>
      </S.Title>

      <S.GridWrapper>
        {data?.slice(offset, offset + limit).map((item, idx) => {
          return <FruitStoreItem key={idx} item={item} />
        })}
      </S.GridWrapper>

      <S.PaginationWrapper>
        <Pagination
          total={data.length}
          limit={limit}
          activedPage={activedPage}
          setActivedPage={setActivedPage}
        />
      </S.PaginationWrapper>
    </>
  )
}

export default FruitStoreList
