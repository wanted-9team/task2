import React, { useEffect, useState } from 'react'
import * as S from './AdminRegister.style'
import InputField from './AdminInputField'
import AdminOption from './AdminOption'

const statusData = [
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
  status: [],
  sale: 0,
  select: [{ option: '', price: 0 }],
  description: [],
  origin: '',
  shipping: { option: '', price: 0, info: '' },
  visible: true,
}
const AdminRegister = () => {
  const [productData, setProductData] = useState(initialDataType)
  const [createOptionDiv, setCreateOptionDiv] = useState([])
  useEffect(() => {
    console.log(productData)
  }, [productData])

  const handleAddOption = () => {
    let countArr = [...createOptionDiv]
    let counter = countArr.slice(-1)[0]
    counter += 1
    countArr.push(counter)
    setCreateOptionDiv(countArr)
  }
  return (
    <S.RegisterContaiDiv>
      <S.BoxDiv>
        <InputField setProductData={setProductData} label="상품명" id="name" type="text" />
        <InputField setProductData={setProductData} label="가격" id="price" type="number" />
        <S.HalfBox>
          <InputField
            setProductData={setProductData}
            label="수량"
            id="quantity"
            type="number"
            attr="half"
          />
          <InputField
            setProductData={setProductData}
            label="할인율"
            id="sale"
            type="number"
            attr="half"
          />
        </S.HalfBox>
        <InputField
          setProductData={setProductData}
          label="상세설명"
          id="description"
          type="text"
          textArea={true}
        />

        <S.Label>
          <S.LabelText> 상품 옵션</S.LabelText>
          <S.OptionButton onClick={handleAddOption}>옵션 추가</S.OptionButton>
        </S.Label>
        {createOptionDiv &&
          createOptionDiv.map((div, idx) => (
            <AdminOption
              key={idx}
              setProductData={setProductData}
              createOptionDiv={createOptionDiv}
            />
          ))}
      </S.BoxDiv>
      <S.BoxDiv>
        <S.Label>
          <S.LabelText>상품 이미지</S.LabelText>
          <S.OptionButton>파일 선택</S.OptionButton>
        </S.Label>
        <InputField setProductData={setProductData} label="원산지" id="origin" type="text" />
        <InputField
          setProductData={setProductData}
          label="배송 방법"
          id="shippingOption"
          type="text"
        />
        <S.ShippingBoxDiv>
          <InputField
            setProductData={setProductData}
            label="배송비"
            id="shippingPrice"
            type="number"
          />
          <InputField
            setProductData={setProductData}
            label="무료"
            id="shippingPriceCheck"
            type="checkbox"
            attr="shippingFree"
          />
        </S.ShippingBoxDiv>
        <InputField
          setProductData={setProductData}
          label="배송 안내"
          id="shippingInfo"
          type="text"
        />
        <S.LabelText>상태</S.LabelText>
        <S.StatusBox>
          {statusData.map(sts => (
            <InputField
              setProductData={setProductData}
              label={sts.type}
              id={sts.type}
              key={sts.id}
              type="checkbox"
              attr="checkbox"
            />
          ))}
        </S.StatusBox>
      </S.BoxDiv>
    </S.RegisterContaiDiv>
  )
}

export default AdminRegister
