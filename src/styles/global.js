import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';




export const Normalize = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  *, *::after, *::before {
    box-sizing: border-box;
    transition:color .1s linear, background-color .3s linear;
  }
  
  body {
    display: flex;
    justify-content: center;
    align-items: stretch;
    background: ${({ theme }) => theme.Primary};
    color: ${({ theme }) => theme.Secondary};
    height: 100vh;
    text-rendering: optimizeLegibility;
    font-family:'Roboto Slab', serif;
  }

  h1 {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
  }
  small {
    display: block;
  }
  a {
    color: ${({ theme }) => theme.Highlight};
    text-decoration: none;
  }
  
`;

export const StyledSection = styled.section`
  padding:5%;
  display:flex;
  flex-wrap:wrap;
  flex-direction:row;
  max-width:80%;
  align-self: center;
  h2{
    font-size:2rem;
    flex-grow:2;
    text-align:center;
  }
`;