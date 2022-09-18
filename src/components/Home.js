import React, { useState, useEffect } from 'react'
import Search from './Search';
import MainWeatherCard from './MainWeatherCard';
import Highlight from './Highlight';
import LocationInfo from './LocationInfo'
import Poem from './poem'
import Footer from './footer'
import NotFound from './notfound';



function Home() {
  const apikey = process.env.REACT_APP_WEATHER_KEY;
  const Access_Key = process.env.REACT_APP_IMAGE_KEY;
  const [nature, setNature] = useState({});
  const [poem, setPoem] = useState([]);
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState(['40.7143', '-74.006']);

  useEffect(() => {
    // get current place 
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      setLocation([lat, lon]);
    });

  }, []);
  //wether api
  const weatherfatch = (p) => {
    //fatch weather data
    fetch(`https://api.openweathermap.org/data/2.5/weather?${p}&appid=${apikey}&lang=en&units=metric`)
      .then((response) => response.json())
      .then((actualData) => {
        // console.log('actual', actualData);
        setWeather(actualData)
      })
  }


  //Location search
  useEffect(() => {
    weatherfatch(`lat=${location[0]}&lon=${location[1]}`);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, apikey]);
  //location end

  // image api
  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${weather.weather?.[0].main}&client_id=${Access_Key}`
    )
      .then((response) => response.json())
      .then((actualData) => setNature(actualData))

  }, [weather, Access_Key]);
  // Weather API end 

  // console.log(weather);
  
  
  // poem api 
  useEffect(() => {
    fetch(`https://poetrydb.org/title/nature`)
      .then((response) => response.json())
      .then((actualData) => setPoem(actualData))

  }, [location]);

  //random number from 0-9
  const num = Math.floor(Math.random() * 10);
  const pnum = Math.floor(Math.random() * poem?.length);


  return (
    <div className="main_wrapper">
      <img src={nature.results?.[num].urls.regular} alt={nature.results?.[num].alt_description} />
      <div className="side_bar">
        <Search weathersearch={weatherfatch} />
        {weather?.cod === 200 ? <MainWeatherCard weather={weather} /> : <NotFound />}
        {weather?.cod === 200 && <LocationInfo weather={weather} />}
      </div>
      <div className="content_wrapper">
        {weather.cod === 200 ? <Highlight weather={weather} /> : <NotFound />}
        <Poem poem={poem[pnum]} />
        <Footer />
      </div>

    </div>
  )
}

export default Home