import React, { useEffect } from 'react'
import * as S from './Headers.style'

const Headers = () => {
  useEffect(() => {
    const headerElement = document.querySelector('header')
    let prevScrollTop = 0

    document.addEventListener('scroll', () => {
      let nextScroll = window.pageYOffset || 0

      if (nextScroll > prevScrollTop) {
        headerElement.style.top = '-90px'
      } else if (nextScroll < prevScrollTop || nextScroll === 0) {
        headerElement.style.top = '0'
      }

      prevScrollTop = nextScroll
    })
  }, [])

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
          <S.ShopListLink to="/shop_list">주문내역</S.ShopListLink>
          <S.StoreLink to="/fruit_store">스토어</S.StoreLink>
          <S.AdminLink to="/admin_shop/1">관리자</S.AdminLink>
        </S.Nav>
      </S.NavWrap>
    </S.Header>
  )
}

export default Headers
