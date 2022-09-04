import axios from 'axios'

const useProductApi = () => {
  const getProducts = async page => {
    return await axios.get('/productlist', { params: { page: page } })
  }
  return { getProducts }
}
export default useProductApi
