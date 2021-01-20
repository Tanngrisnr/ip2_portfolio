import WEATHER_DATA from './data.js'
import Emoji from 'a11y-react-emoji'
import {useState} from 'react'


const CurrentWeather = () => {

    const W_data = {
        weather: WEATHER_DATA.weather[0].main,
        description: WEATHER_DATA.weather[0].description,
        temp: WEATHER_DATA.main.temp,
        name: WEATHER_DATA.name,
        weather_id: WEATHER_DATA.weather[0].id,
    }

    const [weather,setWeather] = useState({})
   
    const filterIcon = wData => {
        const icon = {};

        if (wData >= 600 && wData <= 622) {
            icon.emoji = "🌨️"
            icon.label = "cloud with snow"
            return icon;
        }
        else if (wData >= 500 && wData <= 531){
            icon.emoji = "🌧️"
            icon.label = "clould with rain"
            return icon;
        }
        else if (wData >= 300 && wData <= 321){
            icon.emoji = "🌦️"
            icon.label = "sun behind rain cloud"
            return icon;
        }
        else if (wData >= 200 && wData <= 232){
            icon.emoji = "⛈️"
            icon.label = "cloud with rain and lightning"
            return icon;
        }
        else if (wData >= 701 && wData <= 771){
            icon.emoji = "🌫️"
            icon.label = "fog"
            return icon;
        }
        else if (wData >= 801 && wData <= 804){
            icon.emoji = "☁️"
            icon.label = "cloud"
            return icon;
        }
        else if (wData === 800){
            icon.emoji = "🌤️"
            icon.label = "sun behind small cloud"
            return icon;
        }

    }

    return ( 
       <ul>
           <li><Emoji symbol={weather.icon.emoji} label={weather.icon.label}/></li>
           <li>{weather.description}</li>
           <li>{weather.temp}</li>
           <li>{weather.name}</li>
       </ul>
        
     );
  }

export default CurrentWeather;