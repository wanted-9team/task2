import axios from 'axios'

const useProductApi = () => {
  const getProducts = async page => {
    try {
      return await axios.get('/productlist', { params: { page: page } })
    } catch (e) {
      console.log(e)
    }
  }

  const deleteProducts = async id => {
    try {
      return await axios.delete('/deleteproduct', { params: { id } })
    } catch (e) {
      console.log(e)
    }
  }
  const createProduct = async data => {
    try {
      return await axios.post('/createproduct', { data })
    } catch (e) {
      console.log(e)
    }
  }
  return { getProducts, deleteProducts, createProduct }
}
export default useProductApi
