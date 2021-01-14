import Clock from "react-live-clock";
import currentWeather from './currentWeather';

const weatherWidget = () => {
    return ( 
        <div>
        <currentWeather/>
        <Clock
            format={'HH:mm:ss'}
            ticking={true}
            timezone={'Europe/Stockholm'} />
      </div>
     );
}
 
export default weatherWidget;