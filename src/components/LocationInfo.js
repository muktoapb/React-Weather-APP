import React from "react";
import moment from 'moment'
export default function LocationInfo({ weather }) {
  

  return (
    <div className="current_time">
      <p>
        <span className="tday">{moment().format('dddd')}</span>,  
        <span className="ctime"> {moment().format('h:mm a')}</span>
      </p>
      <p>
        {weather?.name}, {weather.sys?.country}
      </p>
      <p className="gitlink"><a href="https://github.com/muktoapb/React-Weather-APP" target="_blank" rel="noopener noreferrer">Github Repository</a></p>
    </div>
  );
}
