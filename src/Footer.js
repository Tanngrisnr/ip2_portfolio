import styled from "styled-components";

const StyledFooter = styled.footer`
  display:flex;
  flex-direction:row;
  margin:0 auto;
  width:100%;
  @media (max-width: 1366px) {
    flex-direction: column;
  }
    a {
      background-color: ${({theme}) => theme.Secondary};
      flex-grow:1;
      flex-basis:30%;
      text-align:center;
      padding:5%;
      transition: flex-grow 0.3s linear;
      font-size:1.2rem;
    }
    a:hover {
      color:${({theme}) => theme.Primary};
      background-color: ${({theme}) => theme.Highlight};
      flex-grow:2;
    }

`;

const Footer = () => {
    return ( 
        <StyledFooter>
            <a href="https://github.com/Tanngrisnr">My Github</a>
            <a href="https://www.linkedin.com/in/fredrik-wintzell-3689411b4/">My Linkedin</a>
            <a href="mailto:fredrik.wintzell@gmail.com">Contact Me</a>
        </StyledFooter>
     );
}
 
export default Footer;