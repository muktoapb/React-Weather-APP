export default function MainWeatherCard({ weather }) {
  const icon = `http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`;

  return (
    <div className="weather_main_card">
      <div className="weather_image">
        <img src={icon} alt={weather.weather?.[0].description} />
      </div>
      <div className="weather_details">
        <p className="capitalize">{weather.weather?.[0].description}</p>
        <h2 className="temperature">{weather.main?.temp} ℃</h2>
        <h4> Feels Like : {weather.main?.feels_like} ℃</h4>
        
      </div>
    </div>
  );
}
