import styled from 'styled-components'
import StyleVariables from '../../styles/StyleVariables'

export const AdminMainPage = styled.div`
  width: 1300px;
  padding: 0 50px;
`

export const AdminPageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 130px auto 50px;
`

export const AdminTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
`

export const AdminLinkContainer = styled.div`
  ${StyleVariables.flex()}
`

export const AdminLinkButton = styled.button`
  ${StyleVariables.flex()}
  padding: 15px 70px;
  border: 1px solid #4a9536;
  border-radius: 10px;
  transition: all 0.4s ease;

  background-color: #4a9536;
  color: white;
  margin-left: 30px;
  &:hover {
    border: 1px solid #4a9536;
    background-color: white;
    color: #4a9536;
  }
`
