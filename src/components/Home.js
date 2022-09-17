import React, {useState, useEffect } from 'react'
import Search from './Search';
import MainWeatherCard from './MainWeatherCard';
import Highlight from './Highlight';
import LocationInfo from './LocationInfo'
import Poem from './poem'
import Footer from './footer'


// 2add26f550517e795608ab9e601aa1db
function Home() {
  const apikey = process.env.REACT_APP_WEATHER_KEY;
  const Access_Key = process.env.REACT_APP_IMAGE_KEY;
  const [nature, setNature]=useState({});
  const [poem, setPoem]=useState([]);
  const [weather, setWeather]=useState({});
  const [location,setLocation]=useState(['40.7143','-74.006']);
  //time 
  function currentTime(i) {
    const date = i;
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }
  useEffect(() => {
      // Update the document title using the browser API
      navigator.geolocation.getCurrentPosition(function(position) {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          setLocation([lat,lon]);
      });
      
    },[]);
  //wether api
  const weatherfatch = (p)=>{
     //fatch weather data
     fetch(`https://api.openweathermap.org/data/2.5/weather?${p}&appid=${apikey}&lang=en&units=metric`)
     .then((response)=>response.json())
     .then((actualData) => setWeather(actualData))
     .catch((err) => {
       console.log('werr',err.message);
     });
  }
  
  
  //Location search
  useEffect(()=>{
    weatherfatch(`lat=${location[0]}&lon=${location[1]}`);

  },[location,apikey]);
//location end

// Weather API 
  useEffect(()=>{
    fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${weather.weather?.[0].main}&client_id=${Access_Key}`
    ) 
    .then((response)=>response.json())
    .then((actualData) => setNature(actualData))

  },[weather]);
// Weather API end 
// console.log(weather);
// poem api 
useEffect(()=>{
  fetch(`https://poetrydb.org/title/nature`) 
  .then((response)=>response.json())
  .then((actualData) => setPoem(actualData))

},[location]);

//random number from 0-9
const num = Math.floor(Math.random() * 10);
const pnum = Math.floor(Math.random() * poem?.length);


  return (
    <div className="main_wrapper">
      <img src={nature.results?.[num].urls.regular} alt={nature.results?.[num].alt_description}/>
        <div className="side_bar">
            <Search weathersearch={weatherfatch}/>
            <MainWeatherCard weather={weather}/>
            <LocationInfo weather={weather} timef={currentTime}/>
        </div>
        <div className="content_wrapper">
            <Highlight weather={weather} timef={currentTime}/>
            <Poem  poem={poem[pnum]}/>
            <Footer/>
        </div>

    </div>
  )
}

export default Home