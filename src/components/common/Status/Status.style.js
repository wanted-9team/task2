import styled, { css } from 'styled-components'

export const StatusContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 0 5px;
  height: 24px;
  font-size: 11px;
  ${({ children }) => {
    switch (children) {
      case 'sale':
        return css`
          color: white;
          background-color: rgb(254, 83, 86);
        `
      case 'best':
        return css`
          color: rgb(254, 83, 86);
          border: 1px solid rgb(204, 204, 204);
        `
      case 'soldout':
        return css`
          color: white;
          background-color: rgb(102, 102, 102);
        `
    }
  }}
`
