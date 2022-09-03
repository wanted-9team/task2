import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  z-index: 100;
`

export const NavWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
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

export const NavLink = styled(Link)`
  margin-right: ${props => props.marginRight || '0'};
  padding: 20px 20px;
  display: block;
  font-size: 18px;
  color: #111;
  font-weight: ${props => props.fontWeight || '400'};
  :hover {
    color: #5f9a3f;
  }
`
