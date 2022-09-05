import React, { createContext, useState } from 'react'

export const ShopInfoContextStore = createContext()

const ShopInfoContext = props => {
  const [shopItemInfo, setShopItemInfo] = useState('shopinfo')

  return (
    <ShopInfoContextStore.Provider value={{ shopItemInfo, setShopItemInfo }}>
      {props.children}
    </ShopInfoContextStore.Provider>
  )
}

export default ShopInfoContext
