import React from 'react'
import * as S from './Admin.style'
import { Link, Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <div>
      <div>
        <Link to={'/admin_register'}>등록페이지</Link>
        <Link to={'/admin_shop'}>관리페이지</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Admin
