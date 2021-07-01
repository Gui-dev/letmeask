import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
    color: #29292E;
    background-color: #F8F8F8;
  }

  input, textarea, button {
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
    color: #29292E;
  }
`
