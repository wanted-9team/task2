export const getShopItemNumbers = x => {
  let N = x.select.reduce((a, c) => {
    let X = Number(c.selectQuantity)
    a += X
    return a
  }, 0)
  return N
}

export const getShopItemPrices = x => {
  return x.select.reduce((a, c) => {
    let X = Number(c.price)
    a += X
    return a
  }, 0)
}
