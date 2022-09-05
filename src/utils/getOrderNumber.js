export const getOrderNumber = () => {
  const getYear = Math.abs(new Date(Date.now()).getUTCFullYear())
  const getMonth = Math.abs(new Date(Date.now()).getUTCMonth()) + 1
  const getDate = Math.abs(new Date(Date.now()).getUTCDate())
  const getRandomNumber = Math.floor(Math.random() * 1000) + 1
  return getRandomNumber + getDate * 1000 + getMonth * 100000 + getYear * 10000000
}
