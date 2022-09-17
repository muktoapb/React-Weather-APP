import React from "react";

export default function LocationInfo({ weather, timef }) {
  const day = { weekday: "long" };

  const mytime = (option) => {
    const date = new Date();
    const mtime = date.toLocaleString(undefined, option);
    return mtime;
  };

  return (
    <div className="current_time">
      <p>
        <span className="tday">{mytime(day)}</span>,{" "}
        <span className="ctime">{timef(new Date())}</span>
      </p>
      <p>
        {weather?.name}, {weather.sys?.country}
      </p>
    </div>
  );
}
