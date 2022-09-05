import React, { useContext } from 'react'
import { AdminRegisterContext } from '../../store/AdminRegisterProvider'

import * as S from './Admin.style'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const Admin = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const goAdminList = () => {
    navigate('/admin_shop/1')
  }

  const goRegisterPage = () => {
    navigate('/admin_register')
  }
  const { handleSubmitData } = useContext(AdminRegisterContext)

  return (
    <S.AdminMainPage>
      {location.pathname === '/admin_register' ? (
        <S.AdminPageHeader>
          <S.AdminTitle>상품등록</S.AdminTitle>
          <S.AdminLinkContainer>
            <S.AdminLinkButton onClick={goAdminList}>상품목록</S.AdminLinkButton>
            <S.AdminLinkButton onClick={handleSubmitData}>등록하기</S.AdminLinkButton>
          </S.AdminLinkContainer>
        </S.AdminPageHeader>
      ) : (
        <S.AdminPageHeader>
          <S.AdminTitle>상품목록</S.AdminTitle>
          <S.AdminLinkContainer>
            <S.AdminLinkButton onClick={goRegisterPage}>상품 등록하기</S.AdminLinkButton>
          </S.AdminLinkContainer>
        </S.AdminPageHeader>
      )}
      <Outlet />
    </S.AdminMainPage>
  )
}

export default Admin
