import React, { useEffect, useState } from 'react'
import FruitStoreItem from '../FruitStoreItem/FruitStoreItem'
import * as S from './FruitStoreList.style'
import axios from 'axios'
import Pagination from '../../common/Pagination/Pagination'

const FruitStoreList = () => {
  const [data, setData] = useState([])

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
        {data?.map((item, idx) => {
          return <FruitStoreItem key={idx} item={item} />
        })}
      </S.GridWrapper>
    </>
  )
}

export default FruitStoreList
