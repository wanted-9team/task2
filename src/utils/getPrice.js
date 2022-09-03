export const getFormattedPrice = price => {
  return Number(price).toLocaleString()
}
export const getSalePrice = (price, percent) => {
  return price - (percent / 100) * price
}
