import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors['yellow']};
  }

  html, body {
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.colors['base-text']};
    line-height: 1.3;
    background: ${({ theme }) => theme.colors['background']};
  }

  h1, h2, h3, h4, h5, h6, p{
    line-height: 1.3;
  }

  button {
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
  }

  input {
    box-sizing: inherit;
    font-family: 'Roboto', sans-serif;
  }
`
