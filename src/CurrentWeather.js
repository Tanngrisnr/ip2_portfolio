import WEATHER_DATA from './data.js'



const weather = {
    weather: WEATHER_DATA.weather[0].main,
    description: WEATHER_DATA.weather[0].description,
    temp: WEATHER_DATA.main.temp,
    name: WEATHER_DATA.name,

}

const CurrentWeather = () => {
    return ( 
       <ul>
           <li>{weather.weather}</li>
           <li>{weather.description}</li>
           <li>{weather.temp}</li>
           <li>{weather.name}</li>
       </ul>
        
     );
  }

export default CurrentWeather;