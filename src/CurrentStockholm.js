import Clock from "react-live-clock";
import CurrentWeather from './CurrentWeather'

const CurrentStockholm = () => {
    return ( 
        <div>
        <CurrentWeather/>
        <Clock
            format={'HH:mm:ss'}
            ticking={true}
            timezone={'Europe/Stockholm'} />
      </div>
     );
  }
export default CurrentStockholm;