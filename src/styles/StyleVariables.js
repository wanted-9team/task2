import { css } from 'styled-components'

export const StyleVariables = {
  flex: (direction = 'row', justify = 'center', align = 'center') => `
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  `,

  headerFont: css`
    font-size: 18px;
    font-weight: 700;
  `,

  normalFont: css`
    font-size: 16px;
    font-weight: 400;
  `,
}

export default StyleVariables
