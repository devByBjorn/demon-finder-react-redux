import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *,
  ::before,
  ::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    background: ${({ theme }) => theme.mainBg};
    box-sizing: border-box;
    color: ${({ theme }) => theme.text};
    font-family: Nunito Sans, Helvetica, Arial, sans-serif;
    font-size:  ${({ theme }) => theme.typogrophy.medium};
    font-weight:  ${({ theme }) => theme.fontWeight.medium};
    overflow-x: hidden;
  }
`

export default GlobalStyles
