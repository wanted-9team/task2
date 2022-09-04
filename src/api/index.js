// api관련 파일
import axios from 'axios'

export const createProduct = async data => {
  try {
    const res = await axios({
      url: '/createproduct',
      method: 'post',
      data,
    })
    console.log(res)
  } catch (e) {
    console.log(e)
  }
}
export const getProduct = async () => {
  try {
    const res = await axios({
      url: '/productlist',
      method: 'get',
      params: { page: 4 },
    })
    console.log(res)
  } catch (e) {
    console.log(e)
  }
}
