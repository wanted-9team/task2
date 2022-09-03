import { rest } from 'msw'
import data from './data'

export const handlers = [
  rest.get(`/productlist`, (req, res, ctx) => {
    const { page } = req.params
    return res(ctx.status(200), ctx.json(data))
  }),
  rest.post('/createproduct', (req, res, ctx) => {
    data.push(req.body)
    return res(ctx.status(200), ctx.json({ message: '등록되었습니다.' }))
  }),
]
