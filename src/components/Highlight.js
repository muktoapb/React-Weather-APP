import WeatherCard from './WeatherCard';
import { WiSunset,WiSunrise,WiHumidity,WiCloudy,WiBarometer } from "react-icons/wi";
import { TbTemperatureMinus,TbTemperaturePlus } from "react-icons/tb";
import { GiWindTurbine,GiWindSlap } from "react-icons/gi";
function Highlight({weather, timef}) {
    const sunrise = timef(new Date(weather.sys?.sunrise*1000));
    const sunset = timef(new Date(weather.sys?.sunset*1000));

    // console.log(sunset);
    return (
        <div className="CardWrapper">
            <div className="row">
            <WeatherCard title="Sunrise" value={sunrise} icon={<WiSunrise/>}/>
            <WeatherCard title="Sunset" value={sunset} icon={<WiSunset/>}/>
            <WeatherCard title="Humidity" value={weather.main?.humidity} unit="%" icon={<WiHumidity/>}/>
            <WeatherCard title="Wind" value={weather.wind?.speed} unit=" km/h" icon={<GiWindTurbine/>}/>
            <WeatherCard title="Wind Gusts" value={weather.wind?.gust} unit=" km/h" icon={<GiWindSlap/>}/>
            <WeatherCard title="Clouds" value={weather.clouds?.all} unit="%" icon={<WiCloudy/>}/>
            <WeatherCard title="Max Temp" value={weather.main?.temp_max} unit="℃" icon={<TbTemperaturePlus/>}/>
            <WeatherCard title="Min Temp" value={weather.main?.temp_min} unit="℃" icon={<TbTemperatureMinus/>}/>
            <WeatherCard title="Pressure" value={weather.main?.pressure} unit=" mb" icon={<WiBarometer/>}/>

            </div>
        </div>
    )
}

export default Highlight