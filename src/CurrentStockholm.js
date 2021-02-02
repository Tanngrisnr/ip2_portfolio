import Clock from "react-live-clock";
import Emoji from 'a11y-react-emoji';
import styled from 'styled-components';
import {WeatherContext} from './DataContext';
import {useContext} from 'react'

//future work:
//https://medium.com/javascript-inside/safely-accessing-deeply-nested-values-in-javascript-99bf72a0855a
//https://medium.com/@pyrolistical/destructuring-nested-objects-9dabdd01a3b8

const WeatherWidget = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction:row;
border-radius:10px;
text-align:center;
background-color: ${({ theme }) => theme.primaryLight};
color: ${({theme}) => theme.primaryDark};
&>*{
    display:flex;
    flex-direction:column;
    flex-grow:1;
    padding:2%;
    width:50%;
    span {
        ::first-letter{
        text-transform:capitalize;
            }
        }
    }

`;

const StyledEmoji = styled(Emoji)`
font-size:4rem;
width: 100%;
`;

const CurrentStockholm = () => {

    const data =  useContext(WeatherContext);
/*     const contextWeatherObject = {
    description: data.data.weather[0].description,
    temp: data.data.main.temp,
    location: data.data.name,
    weather_id:data.data.weather[0].id
    } */
    if(!data.data) {
        return null
    }
    const description = data.data.weather[0].description;
    const temp = data.data.main.temp;
    const location = data.data.name;
    const weather_id = data.data.weather[0].id;

    /* const {data:{ [weather,], {main: temp}, name}} = data; */
    console.log('hej from CS')
    const icon = {
        emoji: null,
        label: null
    };
    const filterIcon = wData => {
    
        if (wData >= 600 && wData <= 622) {
            icon.emoji = "🌨️"
            icon.label = "cloud with snow"
            console.log(icon);
        }
        else if (wData >= 500 && wData <= 531){
            icon.emoji = "🌧️"
            icon.label = "clould with rain"
            console.log(icon);

        }
        else if (wData >= 300 && wData <= 321){
            icon.emoji = "🌦️"
            icon.label = "sun behind rain cloud"
            console.log(icon);

        }
        else if (wData >= 200 && wData <= 232){
            icon.emoji = "⛈️"
            icon.label = "cloud with rain and lightning"
            console.log(icon);

        }
        else if (wData >= 701 && wData <= 771){
            icon.emoji = "🌫️"
            icon.label = "fog"
            console.log(icon);

        }
        else if (wData >= 801 && wData <= 804){
            icon.emoji = "☁️"
            icon.label = "cloud"
            console.log(icon);

        }
        else if (wData === 800){
            icon.emoji = "☀️"
            icon.label = "sun"
            console.log(icon);

        }
    
    }
    filterIcon(weather_id);
    return ( 
        <WeatherWidget>
           <StyledEmoji symbol={icon.emoji} label={icon.label}/>
           <div><span>{description}</span>
           <span>{temp}°C</span></div>
           <div><span>{location}</span>
            <Clock
            format={'HH:mm:ss'}
            ticking={true}
            timezone={'Europe/Stockholm'} /></div>
        </WeatherWidget>
     );
  }
export default CurrentStockholm;