import React from 'react'
import * as S from './Headers.style'

const Headers = () => {
  return (
    <S.Header>
      <S.NavWrap>
        <S.LogoLink to="/fruit_store">
          <S.LogoImage
            src="https://cdn.imweb.me/thumbnail/20210215/9c484dd3f6e7f.jpg"
            alt="프루떼 로고"
          />
        </S.LogoLink>
        <S.Nav>
          <S.StoreLink to="/fruit_store">스토어</S.StoreLink>
          <S.AdminLink to="/admin_shop">관리자</S.AdminLink>
        </S.Nav>
      </S.NavWrap>
    </S.Header>
  )
}

export default Headers
