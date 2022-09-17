import React from 'react'

function WeatherCard({title, value,unit, icon}) {
  return (
    <div className="single_weather_card">
        <div className="swinfo">
            <p className='type'>{title}</p>
            <h3> {value}<span>{unit}</span></h3>
            {/* <p className="status">Status: </p> */}
        </div>
        <div className="swicon">{icon}</div>
    </div>
  )
}

export default WeatherCard