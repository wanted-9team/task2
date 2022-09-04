import { rest } from 'msw'
import productData from './data'
import orderData from './orderData'

export const handlers = [
  rest.get(`/productlist`, (req, res, ctx) => {
    const page = req.url.searchParams.get('page')
    const result = []
    const visibleData = productData.filter(item => item.visible)

    for (let i = 0; i < visibleData.length; i += 10) {
      result.push(visibleData.slice(i, i + 10))
    }

    const returnPageData = result[Number(page) - 1]
    if (!page) {
      return res(
        ctx.status(400),
        ctx.json({
          message: 'required parameter page is not present',
        }),
      )
    }
    return res(
      ctx.status(200),
      ctx.json({
        list: returnPageData,
        totalPage: result.length,
        totalResults: visibleData.length,
      }),
    )
  }),

  rest.post('/createproduct', (req, res, ctx) => {
    const body = req.body
    const { data } = body
    if (!data.name || !data.price || !data.quantity || !data.shipping.price) {
      return res(ctx.status(400), ctx.json({ message: 'required data is not present' }))
    }

    productData.push({ ...body, id: data.length + 1 })
    return res(ctx.status(200), ctx.json({ message: '등록되었습니다.', product: data }))
  }),

  rest.delete('/deleteproduct', (req, res, ctx) => {
    const id = req.url.searchParams.get('id')
    productData.splice(
      productData.findIndex(item => item.id === Number(id)),
      1,
    )
    if (!id) {
      return res(
        ctx.status(400),
        ctx.json({
          message: 'required parameter id is not present',
        }),
      )
    }
    return res(ctx.status(204))
  }),
  rest.get(`/orderlist`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(orderData))
  }),
  rest.post('/createorder', (req, res, ctx) => {
    const body = req.body
    if (!body) {
      return res(ctx.status(400), ctx.json({ message: 'No-Data' }))
    }
    orderData.push(body)
    return res(ctx.status(201), ctx.json({ message: '등록되었습니다.' }))
  }),
]
