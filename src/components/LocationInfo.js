import React from "react";
import moment from 'moment'
export default function LocationInfo({ weather }) {
const timezone = weather?.timezone/60;
const local_time = moment().utcOffset(timezone);
// console.log('local',local_time);
  return (
    <div className="current_time">
      <p>
        <span className="tday">{local_time.format('dddd')}</span>,  
        <span className="ctime"> {local_time.format('h:mm a')}</span>
      </p>
      <p>
        {weather?.name}, {weather.sys?.country}
      </p>
      <p className="gitlink"><a href="https://github.com/muktoapb/React-Weather-APP" target="_blank" rel="noopener noreferrer">Github Repository</a></p>
    </div>
  );
}
