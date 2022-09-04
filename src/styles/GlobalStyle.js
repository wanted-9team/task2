import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  a {
    text-decoration: none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
  }
  input,
  textarea {
    user-select: auto;
  }
  input:focus,textarea:focus {
    outline: none;
  }
  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }
`

export default GlobalStyle
