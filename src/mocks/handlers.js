import { rest } from 'msw'
import data from './data'
import orderData from './orderData'

export const handlers = [
  rest.get(`/productlist`, (req, res, ctx) => {
    const page = req.url.searchParams.get('page')
    const result = []
    for (let i = 0; i < data.length; i += 10) {
      result.push(data.slice(i, i + 10))
    }
    const returnPageData = result[Number(page) - 1]

    return res(
      ctx.status(200),
      ctx.json({ list: returnPageData, totalPage: result.length, totalResults: data.length }),
    )
  }),

  rest.post('/createproduct', (req, res, ctx) => {
    const body = req.body

    if (!body) {
      return res(ctx.status(400), ctx.json({ message: 'No-Data' }))
    }

    data.push({ ...body, id: data.length + 1 })
    return res(ctx.status(200), ctx.json({ message: '등록되었습니다.' }))
  }),

  rest.delete('/deleteproduct', (req, res, ctx) => {
    const id = req.url.searchParams.get('id')
    data.splice(
      data.findIndex(item => item.id === Number(id)),
      1,
    )

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
