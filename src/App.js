import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { Normalize } from "./styles/global";
import { winterTheme, summerTheme } from "./styles/theme";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import UseSemiPersistentState from "./UseSemiPersistentState";
import React, { useEffect, useState, useRef } from "react";
import { WeatherContext, SwitchContext } from "./Context";
import { WEATHER_DATA, RESUME_DATA as rData, PROJECT_DATA as pData } from "./data";
import Resume from "./Resume";
import Projects from "./Projects";
import Home from "./Home";
import Navigation from "./menu/Navigation";
import Burger from "./menu/Burger";
import useOnClickOutside from "./menu/hooks";
import Footer from './Footer'

const StyledMain = styled.main`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
`;
const StyledHeader = styled.header`
  width: 100%;
  text-align: center;
  font-size: 5em;

  a {
  color:${({theme}) => theme.Highlight};
  font-weight:900;
  text-shadow:2px 2px ${({theme}) => theme.Secondary}

  }
  a:hover {
    color: ${({ theme }) => theme.Secondary};
    text-shadow:2px 2px ${({theme}) => theme.Highlight}
  }
`;


const isSummer = () => {
  const d = new Date();
  const m = d.getMonth();
  if (m >= 3 && m <= 8) {
    return true;
  } else {
    return false;
  }
};

function App() {
  const menuId = "main-menu";
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  const [themeState, setThemeState] = UseSemiPersistentState(
    "theme",
    isSummer()
  );
  //const [themeState, setThemeState] = useState(isSummer())
  //const [rData, setRData] = useState(RESUME_DATA);

  const [wData, setWData] = useState({ data: null });
  const [open, setOpen] = useState(false);

  const theme = themeState ? summerTheme : winterTheme;
  useEffect(() => {
    console.log("Hej från useEffect");
    fetch(WEATHER_DATA)
      .then((response) => response.json())
      .then((json) => setWData({ data: json }));
  }, []);

  const contextSwitchObject = {
    bool: themeState,
    setBool: setThemeState,
  };

  return (
    <Router>
      <WeatherContext.Provider value={wData}>
        <SwitchContext.Provider value={contextSwitchObject}>
          <ThemeProvider theme={theme}>
            <Normalize />
            <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Navigation open={open} setOpen={setOpen} id={menuId} />
            </div>
            <StyledMain>
              <StyledHeader>
                <Link to="/">Fredrik Wintzell</Link>
              </StyledHeader>
              <Switch>
                <Route path="/Resume">
                  <Resume data={rData} />
                </Route>
                <Route path="/projects">
                  <Projects data={pData} />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
              <Footer/>
            </StyledMain>
          </ThemeProvider>
        </SwitchContext.Provider>
      </WeatherContext.Provider>
    </Router>
  );
}

export default App;
