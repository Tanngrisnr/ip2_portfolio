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
  background: ${({ theme }) => theme.Highlight};
  color: ${({ theme }) => theme.Primary};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
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
      color: ${({ theme }) => theme.Secondary};
    }

`;

const ToggleWrapper = styled.div`

`;

const Navigation = ({open, setOpen, ...props}) => {

    const isHidden = open ? true : false;
    const tabIndex = isHidden ? 0 : -1;

    return ( 
        <StyledNav open={open}>
        <StyledLink tabIndex={tabIndex} onClick={() => setOpen(!open)} to="/">Home</StyledLink>
        <StyledLink tabIndex={tabIndex} onClick={() => setOpen(!open)} to="/resume">Résumé</StyledLink>
        <StyledLink tabIndex={tabIndex} onClick={() => setOpen(!open)} to="/projects">Projects</StyledLink>
        <CurrentStockholm/>
        <div><ToggleSwitch/><span>:Toggle theme</span></div>
        </StyledNav>
     );
}
Navigation.propTypes = {
    open: bool.isRequired,
  }
 
export default Navigation;