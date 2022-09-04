import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Header = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 90px;
  padding: 0 40px;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  z-index: 100;
`

export const NavWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 179px;
  height: 90px;
`

export const LogoImage = styled.img`
  display: block;
  width: 100%;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`

export const StoreLink = styled(Link)`
  margin-right: 14px;
  padding: 20px 20px;
  display: block;
  font-size: 18px;
  color: #111;
  font-weight: 700;
  :hover {
    color: #5f9a3f;
  }
`

export const AdminLink = styled(Link)`
  padding: 20px 20px;
  display: block;
  font-size: 18px;
  color: #111;
  :hover {
    color: #5f9a3f;
  }
`
