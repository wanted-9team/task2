import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import AdminRegister from './components/Admin/AdminRegister/AdminRegister'
import AdminShop from './components/Admin/AdminShop/AdminShop'
import Footer from './components/common/Footer/Footer'
import Headers from './components/common/Headers/Headers'
import Admin from './pages/Admin/Admin'
import FruitStore from './pages/FruitStore/FruitStore'
import FruitStoreDetail from './pages/FruitStoreDetail/FruitStoreDetail'
import ShopList from './pages/ShopList/ShopList'
import ShopPayment from './pages/ShopPayment/ShopPayment'
import NotFound from './components/common/NotFound/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Headers />
      <Routes>
        <Route path="/" element={<FruitStore />} />
        <Route path="/fruit_store" element={<FruitStore />} />
        <Route path="/fruit_store/:id" element={<FruitStoreDetail />} />
        <Route path="/shop_payment" element={<ShopPayment />} />
        <Route path="/shop_list" element={<ShopList />} />

        <Route element={<Admin />}>
          <Route path="/admin_shop/:id" element={<AdminShop />} />
          <Route path="/admin_register" element={<AdminRegister />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
