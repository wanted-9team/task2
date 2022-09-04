import styled, { css } from 'styled-components'

export const PaginationWrapper = styled.div`
  display: table;
  margin: 10px 0;
  border-collapse: collapse;
`
export const PageButton = styled.button`
  width: 35px;
  height: 35px;
  margin: 0 auto;
  padding: 0px 5px;
  font-size: 16px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  ${props =>
    props.isActive &&
    css`
      color: #4d9c2e;
      font-weight: 600;
      outline: 1px solid #4d9c2e;
    `}
  :hover {
    color: red;
    text-decoration: underline;
  }
  :disabled {
    color: lightgray;
    :hover {
      color: lightgray;
      text-decoration: none;
    }
  }
`
