import React, { createContext, useState } from 'react'
import useProductApi from '../../../utils/useProductApi'

export const AdminRegisterContext = createContext()

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
const AdminRegisterProvider = ({ children }) => {
  const [productData, setProductData] = useState(initialDataType)
  const [OptionComponent, setOptionComponent] = useState([])
  const [statusData, setStatusData] = useState([])
  const [shippingFreeCheck, setShippingFreeCheck] = useState(false)
  const [uploadedImages, setUploadedImages] = useState([])
  const [shippingData, setShippingData] = useState({ option: '', price: 0, info: '' })

  const { createProduct } = useProductApi()

  const handleSubmitData = () => {
    const body = {
      ...productData,
      imageUrl: [...uploadedImages],
      status: [...statusData],
      shipping: shippingData,
      select: [...OptionComponent],
    }

    createProduct(body).then(res => console.log(res))
  }
  return (
    <AdminRegisterContext.Provider
      value={{
        handleSubmitData,
        setProductData,
        setOptionComponent,
        OptionComponent,
        setStatusData,
        statusData,
        setShippingFreeCheck,
        shippingFreeCheck,
        setUploadedImages,
        uploadedImages,
        setShippingData,
      }}
    >
      {children}
    </AdminRegisterContext.Provider>
  )
}

export default AdminRegisterProvider
