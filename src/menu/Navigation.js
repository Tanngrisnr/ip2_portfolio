//hamburger menu based on this tutorial https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
import {Link} from 'react-router-dom';
import { bool } from 'prop-types';
import styled from 'styled-components';
import CurrentStockholm from '../CurrentStockholm';
import ToggleSwitch from "../ToggleSwitch";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.Secondary};
  color: ${({ theme }) => theme.Primary};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;


  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }`

const StyledLink = styled(Link)`
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.Primary};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.Highlight};
    }

`;

const ToggleWrapper = styled.div`
margin:2%;
padding:1%;
background:${({theme}) => theme.Highlight};
border-radius:34px;
display:flex;
div{
  text-align:center;
  margin:2%;
  margin-right:0;
  width:auto;
  align-self: flex-end;
  flex-grow:1;
}
`;

const Navigation = ({open, setOpen}) => {

    const isHidden = open ? true : false;
    const tabIndex = isHidden ? 0 : -1;

    return ( 
        <StyledNav open={open}>
        <ToggleWrapper><div>Toggle theme:</div><ToggleSwitch/></ToggleWrapper>
        <StyledLink tabIndex={tabIndex} onClick={() => setOpen(!open)} to="/">About me</StyledLink>
        <StyledLink tabIndex={tabIndex} onClick={() => setOpen(!open)} to="/projects">Projects</StyledLink>
        <StyledLink tabIndex={tabIndex} onClick={() => setOpen(!open)} to="/resume">Résumé</StyledLink>
        <CurrentStockholm/>
        </StyledNav>
     );
}
Navigation.propTypes = {
    open: bool.isRequired,
  }
 
export default Navigation;