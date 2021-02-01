import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';




export const Normalize = createGlobalStyle`

  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: stretch;
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    height: 100vh;
    text-rendering: optimizeLegibility;
    font-family:'Roboto Slab', serif;
  }
  h1 {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
  }
  img {
    border-radius: 5px;
    height: auto;
    width: 10rem;
  }
  small {
    display: block;
  }
  a {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
  }

`;

export const StyledSection = styled.section`
  display:flex;

`;