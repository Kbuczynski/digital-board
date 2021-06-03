import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: #fff;
    background-image: linear-gradient(#D7D7D7 .1em, transparent .1em), linear-gradient(90deg, #D7D7D7 .1em, transparent .1em);
    background-size: 5em 5em;
  }
`

export const StyledWrapper = styled.div`
  position: relative;
  padding: 1rem;
  min-height: 100vh;
`