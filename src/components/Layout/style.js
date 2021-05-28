import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`

export const StyledWrapper = styled.div`
  position: relative;
  padding: 1rem;
  min-height: 100vh;
`