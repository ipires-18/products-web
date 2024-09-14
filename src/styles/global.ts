'use client'

import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family:  Roboto, 'Inter', sans-serif;
    background: #FAFBFC;
  }

  button{
    cursor: pointer;
  }

`

export default GlobalStyles
