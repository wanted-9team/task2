import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #eee;
`
export const FooterItemsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
`

export const FooterItem = styled.section`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 48%;
`
export const IntroWrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 20px;
  word-break: keep-all;
`
export const IntroDesc = styled.p`
  color: #333;
  font-size: 14px;
  line-height: 1.2rem;
`

export const SnsLinksWrap = styled.section`
  display: flex;
`

export const SnsLink = styled.a`
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
`
export const InfoWrap = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`

export const InfoItemWrap = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`

export const AdressWrap = styled.div`
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`

export const TermsWrap = styled.div`
  display: flex;
  text-decoration: underline;
`

export const InfoItemDesc = styled.p`
  margin-right: 6px;
  color: #333;
  font-size: 14px;
`

export const InfoItemPhone = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: underline;
`

export const FooterTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: 111;
`
export const BoldFont = styled.span`
  font-weight: 700;
`
