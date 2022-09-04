import axios from 'axios'

const useProductApi = () => {
  const getProducts = async page => {
    return await axios.get('/productlist', { params: { page: page } })
  }

  const deleteProducts = async id => {
    return await axios.delete('/deleteproduct', { params: { id } })
  }

  return { getProducts, deleteProducts }
}
export default useProductApi
