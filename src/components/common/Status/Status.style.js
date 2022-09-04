import styled, { css } from 'styled-components'

export const StatusContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 0 5px;
  border-radius: 5px;
  height: 24px;
  font-size: 11px;
  ${({ children }) => {
    switch (children) {
      case 'sale':
        return css`
          color: white;
          background-color: red;
        `
      case 'best':
        return css`
          color: red;
          border: 1px solid black;
        `
      default:
        return css``
    }
  }}
`
