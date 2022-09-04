import React, { useEffect, useCallback, useRef, useContext } from 'react'
import * as S from './AdminRegister.style'
import AdminTextInputField from './AdminInput/AdminTextInputField'
import AdminOptionBox from './AdminOption/AdminOptionBox'
import ImageUploadBox from './AdminImageUpload/ImageUploadBox'
import AdminCheckBox from './AdminInput/AdminCheckBox'
import ShippingInputField from './AdminInput/ShippingInputField'
import { AdminRegisterContext } from './AdminRegisterProvider'
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

const AdminRegister = () => {
  const shippingInputRef = useRef(null)
  const {
    setProductData,
    setOptionComponent,
    setStatusData,
    statusData,
    setShippingFreeCheck,
    setUploadedImages,
    uploadedImages,
    setShippingData,
    shippingFreeCheck,
    OptionComponent,
  } = useContext(AdminRegisterContext)

  useEffect(() => {
    if (shippingFreeCheck) {
      shippingInputRef.current.value = 0
      setShippingData(prev => ({ ...prev, price: 0 }))
    }
  }, [shippingFreeCheck])

  const handleAddOptionClick = useCallback(() => {
    setOptionComponent(prev => [...prev, { option: '', price: '' }])
  }, [setOptionComponent])

  const handleDescChange = useCallback(
    ({ target }) => {
      const { value } = target
      const description = value.split('\n')
      setProductData(prev => ({ ...prev, description }))
    },
    [setProductData],
  )

  const handleShippingCheck = useCallback(() => {
    setShippingFreeCheck(prev => !prev)
  }, [setShippingFreeCheck])

  return (
    <S.RegisterContaiDiv>
      <S.BoxDiv>
        <AdminTextInputField
          setProductData={setProductData}
          label="상품명"
          id="name"
          type="text"
          requiredText="* 필수 입력"
        />
        <AdminTextInputField
          setProductData={setProductData}
          label="가격"
          id="price"
          type="number"
          min="100"
          step="100"
          requiredText="* 필수 입력"
        />
        <S.HalfBox>
          <AdminTextInputField
            setProductData={setProductData}
            label="수량"
            id="quantity"
            type="number"
            attr="half"
            min="1"
            requiredText="* 필수 입력"
          />
          <AdminTextInputField
            setProductData={setProductData}
            label="할인율"
            id="sale"
            type="number"
            attr="half"
            max="100"
            step="1"
            min="0"
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
        {OptionComponent &&
          OptionComponent.map((div, idx) => (
            <AdminOptionBox
              key={idx}
              idx={idx}
              OptionComponent={OptionComponent}
              setOptionComponent={setOptionComponent}
            />
          ))}
      </S.BoxDiv>
      <S.BoxDiv>
        <ImageUploadBox uploadedImages={uploadedImages} setUploadedImages={setUploadedImages} />
        <AdminTextInputField
          setProductData={setProductData}
          label="원산지"
          id="origin"
          type="text"
        />
        <ShippingInputField
          setShippingData={setShippingData}
          label="배송 방법"
          id="shippingOption"
          type="text"
        />
        <S.ShippingBoxDiv>
          <ShippingInputField
            setShippingData={setShippingData}
            label="배송비"
            id="shippingPrice"
            type="number"
            requiredText="* 필수 입력"
            shippingFreeCheck={shippingFreeCheck}
            shippingInputRef={shippingInputRef}
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
        <ShippingInputField
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
    </S.RegisterContaiDiv>
  )
}

export default AdminRegister
