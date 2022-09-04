import React, { useEffect, useState, useCallback } from 'react'
import * as S from './AdminRegister.style'
import InputField from './AdminInputField'
import AdminOptionBox from './AdminOptionBox'
import ImageUploadBox from './ImageUploadBox'
import AdminCheckBox from './AdminCheckBox'
const STATUSDATA = [
  { id: 1, type: 'SALE' },
  { id: 2, type: 'BEST' },
  { id: 3, type: 'MD' },
  { id: 4, type: 'SOLDOUT' },
  { id: 5, type: 'NEW' },
  { id: 6, type: '무료배송' },
  { id: 7, type: '특가' },
  { id: 8, type: '판매대기' },
]
const initialDataType = {
  name: '',
  imageUrl: [],
  quantity: 0,
  price: 0,
  sale: 0,
  description: [],
  origin: '',
  shipping: {},
  visible: true,
}

const AdminRegister = () => {
  const [productData, setProductData] = useState(initialDataType)
  const [createOptionData, setCreateOptionData] = useState([])
  const [statusData, setStatusData] = useState([])
  const [shippingFreeCheck, setShippingFreeCheck] = useState(false)
  const [uploadedImages, setUploadedImages] = useState([])
  const [shippingData, setShippingData] = useState({ option: '', price: 0, info: '' })
  // const [optionData, setOptionData] = useState({ option: '', price: '' })

  useEffect(() => {
    console.log(shippingData)
  }, [shippingData])

  useEffect(() => {
    console.log(statusData)
  }, [statusData])
  useEffect(() => {
    console.log(shippingFreeCheck)
  }, [shippingFreeCheck])
  useEffect(() => {
    console.log(createOptionData)
  }, [createOptionData])

  const handleAddOptionClick = useCallback(() => {
    setCreateOptionData(prev => [...prev, { option: '', price: '' }])
  }, [])

  const handleDescChange = useCallback(({ target }) => {
    const { value } = target
    const description = value.split('\n')
    setProductData(prev => ({ ...prev, description }))
  }, [])
  const handleShippingCheck = useCallback(() => {
    setShippingFreeCheck(prev => !prev)
  }, [])
  const handleSubmitData = useCallback(async () => {
    const body = {
      ...productData,
      imageUrl: [...uploadedImages],
      status: [...statusData],
      shipping: shippingData,
    }
  }, [productData, uploadedImages, statusData, shippingData])
  return (
    <S.RegisterContaiDiv>
      <S.BoxDiv>
        <InputField setProductData={setProductData} label="상품명" id="name" type="text" />
        <InputField setProductData={setProductData} label="가격" id="price" type="number" min="1" />
        <S.HalfBox>
          <InputField
            setProductData={setProductData}
            label="수량"
            id="quantity"
            type="number"
            attr="half"
            min="1"
          />
          <InputField
            setProductData={setProductData}
            label="할인율"
            id="sale"
            type="number"
            attr="half"
            max="100"
          />
        </S.HalfBox>
        <S.Label htmlFor="description">
          <S.LabelText>상세설명</S.LabelText>
          <S.TextArea id="description" type="text" onChange={handleDescChange}></S.TextArea>
        </S.Label>

        <S.Label>
          <S.LabelText> 상품 옵션</S.LabelText>
          <S.OptionButton onClick={handleAddOptionClick}>옵션 추가</S.OptionButton>
        </S.Label>
        {createOptionData &&
          createOptionData.map((div, idx) => (
            <AdminOptionBox
              key={idx}
              idx={idx}
              createOptionData={createOptionData}
              setCreateOptionData={setCreateOptionData}
            />
          ))}
      </S.BoxDiv>
      <S.BoxDiv>
        <ImageUploadBox uploadedImages={uploadedImages} setUploadedImages={setUploadedImages} />
        <InputField setProductData={setProductData} label="원산지" id="origin" type="text" />
        <InputField
          setShippingData={setShippingData}
          label="배송 방법"
          id="shippingOption"
          type="text"
        />
        <S.ShippingBoxDiv>
          <InputField
            setShippingData={setShippingData}
            label="배송비"
            id="shippingPrice"
            type="number"
            shippingFreeCheck={shippingFreeCheck}
          />
          <S.Label attr="shippingFree">
            <S.LabelText>무료</S.LabelText>
            <S.CheckInput
              onChange={handleShippingCheck}
              label="무료"
              id="shippingPriceCheck"
              type="checkbox"
              attr="shippingFree"
            />
          </S.Label>
        </S.ShippingBoxDiv>
        <InputField
          setShippingData={setShippingData}
          label="배송 안내"
          id="shippingInfo"
          type="text"
        />
        <S.LabelText>상태</S.LabelText>
        <S.StatusBox>
          {STATUSDATA.map(sts => (
            <AdminCheckBox
              sts={sts}
              key={sts.id}
              setStatusData={setStatusData}
              statusData={statusData}
            />
          ))}
        </S.StatusBox>
      </S.BoxDiv>
      <button onClick={handleSubmitData}>등록</button>
    </S.RegisterContaiDiv>
  )
}

export default AdminRegister
