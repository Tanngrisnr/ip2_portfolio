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
import WEATHER_DATA from './data';
import CurrentStockholm from "./CurrentStockholm";
import Contact from './Contact';
import About from './About';
import Projects from './Projects';
import Home from './Home';
import Navigation from './menu/Navigation';
import Burger from "./menu/Burger";
import useOnClickOutside from './menu/hooks'

const StyledMain = styled.main`
  display:flex;
  flex-direction:row;


`;

function App() {

  const menuId = "main-menu";
  const node = useRef(); 
  useOnClickOutside(node, () => setOpen(false));

  const [data, setData] = useState({ data: null });
  const [open, setOpen] = useState(false);
  console.log(data);

  useEffect(() => {
      console.log("Hej från useEffect");
      fetch(WEATHER_DATA)
          .then(response => response.json())
          .then(json => setData({ data: json }));
  }, []);


  return (
  <Router>
    <ThemeProvider theme={theme}>
    <Normalize/>
    <div ref={node}>
    <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
    <Navigation open={open} setOpen={setOpen} id={menuId} />
    </div>
    <StyledSection>
        <Switch>
          <Route path="/contact"><Contact/></Route>
          <Route path="/about"><About/></Route>
          <Route path="/projects"><Projects/></Route>
          <Route path="/"><Home/></Route>
        </Switch>
        {data.data ? <CurrentStockholm
        description={data.data.weather[0].description}
        temp={data.data.main.temp}
        location={data.data.name}
        weather_id={data.data.weather[0].id}
        /> : null}
    </StyledSection>

    </ThemeProvider>
  </Router>
  );
}



export default App;
