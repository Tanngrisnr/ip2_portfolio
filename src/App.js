import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React, { useEffect, useState } from 'react';
import CurrentStockholm from "./CurrentStockholm";
import Contact from './Contact';
import About from './About';
import Projects from './Projects';
import Home from './Home';
import Navigation from './Navigation';

const Normalize = createGlobalStyle`
  *{
    font-family:'Roboto Slab', serif;
  }
`;

const url = "http://api.openweathermap.org/data/2.5/weather?q=Stockholm&units=metric&appid=f2eb762353dd6b9f926b406db34c6ae1"

function App() {

  const [data, setData] = useState({ data: null });
  console.log(data);

  useEffect(() => {
      console.log("Hej från useEffect");
      fetch(url)
          .then(response => response.json())
          .then(json => setData({ data: json }));
  }, []);


  return (
  <Router>
    <Normalize/>
    <Navigation/>
    {data.data ? <CurrentStockholm
    description={data.data.weather[0].description}
    temp={data.data.main.temp}
    location={data.data.name}
    weather_id={data.data.weather[0].id}
    /> : null}
    <Switch>
      <Route path="/contact"><Contact/></Route>
      <Route path="/about"><About/></Route>
      <Route path="/projects"><Projects/></Route>
      <Route path="/"><Home/></Route>
    </Switch>

  </Router>
  );
}



export default App;
