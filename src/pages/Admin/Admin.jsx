import React from 'react'
import * as S from './Admin.style'
import { Link, Outlet, useLocation, useParams } from 'react-router-dom'

const Admin = () => {
  const params = useLocation()

  console.log(params)
  return (
    <S.AdminMainPage>
      <S.AdminPageHeader>
        <S.AdminTitle>관리하기</S.AdminTitle>
        <S.AdminLinkContainer>
          <Link to={'/admin_register'}>등록페이지</Link>
          <Link to={'/admin_shop'}>관리페이지</Link>
        </S.AdminLinkContainer>
      </S.AdminPageHeader>
      <Outlet />
    </S.AdminMainPage>
  )
}

export default Admin
