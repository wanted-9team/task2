const getShopItemInfoSelect = x => {
  let firstPrice = x[0].price
  let firstQuantity = x[0].selectQuantity
  let shopItemInfoSelect = x?.reduce((a, c) => {
    if (c.select.length === 0) {
      a.select.price = firstPrice
      a.select.selectQuantity = firstQuantity
      return a
    } else {
      c.select = { ...c.select, selectQuantity: c.selectQuantity }
      a = [...a, c.select]
      return a
    }
  }, [])
  return shopItemInfoSelect
}

export default getShopItemInfoSelect
