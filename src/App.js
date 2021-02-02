import styled from "styled-components";
import {ThemeProvider} from 'styled-components'
import {Normalize, StyledSection} from './styles/global'
import {theme} from './styles/theme';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React, { useEffect, useState, useRef } from 'react';
import {WeatherContext} from './DataContext';
import {WEATHER_DATA, RESUME_DATA} from './data';
import CurrentStockholm from "./CurrentStockholm";
import Contact from './Contact';
import Resume from './Resume';
import Projects from './Projects';
import Home from './Home';
import Navigation from './menu/Navigation';
import Burger from "./menu/Burger";
import useOnClickOutside from './menu/hooks'

const StyledMain = styled.main`
  display:flex;
  flex-wrap:wrap;
  flex-direction:row;
  width:100%;

`;
const StyledHeader = styled.header`
  width:100%;
`

function App() {

  const menuId = "main-menu";
  const node = useRef(); 
  useOnClickOutside(node, () => setOpen(false));
  
  const [rData, setRData] = useState(RESUME_DATA);
  const [wData, setWData] = useState({ data: null });
  const [open, setOpen] = useState(false);
  console.log(wData);

  useEffect(() => {
      console.log("Hej från useEffect");
      fetch(WEATHER_DATA)
          .then(response => response.json())
          .then(json => setWData({ data: json }));
  }, []);
/*   const contextWeatherObject = {
    description: data.data.weather[0].description,
    temp: data.data.main.temp,
    location: data.data.name,
    weather_id:data.data.weather[0].id
  } */

  return (
  <Router>
    <WeatherContext.Provider value={wData}>
    <ThemeProvider theme={theme}>
    <Normalize/>
    <div ref={node}>
    <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
    <Navigation open={open} setOpen={setOpen} id={menuId} />
    </div>
    <StyledMain>
      <StyledHeader><h1>Fredrik Wintzell</h1></StyledHeader>
        <Switch>
          <Route path="/contact"><Contact/></Route>
          <Route path="/Resume"><Resume data={rData} /></Route>
          <Route path="/projects"><Projects/></Route>
          <Route path="/"><Home/></Route>
        </Switch>
    <footer></footer>
    </StyledMain>

    </ThemeProvider>
    </WeatherContext.Provider>
  </Router>
  );
}



export default App;
