import React, { createContext, useState, useEffect } from 'react'
import useProductApi from '../utils/useProductApi'

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
  const [openModal, setOpenModal] = useState(false)
  const [requiredInput, setRequiredInput] = useState(false)
  const { createProduct } = useProductApi()

  const handleSubmitData = () => {
    const body = {
      ...productData,
      imageUrl: [...uploadedImages],
      status: [...statusData],
      shipping: shippingData,
      select: [...OptionComponent],
    }

    createProduct(body).then(res => {
      if (res.status === 200) {
        setOpenModal(true)
        setRequiredInput(false)
      } else if (res.response.status === 400) {
        setRequiredInput(true)
      }
    })
  }
  useEffect(() => {
    const toastTimer = setTimeout(() => {
      setOpenModal(false)
    }, 3000)
    return () => clearTimeout(toastTimer)
  }, [openModal])
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
        openModal,
        requiredInput,
      }}
    >
      {children}
    </AdminRegisterContext.Provider>
  )
}

export default AdminRegisterProvider
