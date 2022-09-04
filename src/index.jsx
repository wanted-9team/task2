import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyle from './styles/GlobalStyle'
import AdminRegisterProvider from './store/AdminRegisterProvider'
import ShopInfoContext from './store/ShopInfoContext'
import { worker } from './mocks/worker'

if (process.env.NODE_ENV === 'development') {
  worker.start()
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <ShopInfoContext>
      <GlobalStyle />
      <AdminRegisterProvider>
        <App />
      </AdminRegisterProvider>
    </ShopInfoContext>
  </>,
)
