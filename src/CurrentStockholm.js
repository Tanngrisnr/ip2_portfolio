import Clock from "react-live-clock";
import Emoji from 'a11y-react-emoji';
import styled from 'styled-components';




const WeatherWidget = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction:column;
border-radius:10px;
background-color: ${({ theme }) => theme.primaryLight};
color: ${({theme}) => theme.primaryDark};
&>*{
    flex-grow:1;
    padding:2%;
    ::first-letter{
        text-transform:capitalize;
    }
}
`;
const StyledEmoji = styled(Emoji)`
font-size:4rem;
width: 100%;
`

const CurrentStockholm = ({description, temp, location, weather_id}) => {

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
            icon.emoji = "🌤️"
            icon.label = "sun behind small cloud"
            console.log(icon);

        }
    
    }
    filterIcon(weather_id);
    return ( 
        <WeatherWidget>
           <StyledEmoji symbol={icon.emoji} label={icon.label}/>
           <span>{description} </span>
           <span>{temp} C</span>
            <Clock
            format={'HH:mm:ss'}
            ticking={true}
            timezone={'Europe/Stockholm'} />
            <span>{location}</span>
        </WeatherWidget>
     );
  }
export default CurrentStockholm;