import React from "react";
import Search from "./Search";
import "./App.css";

export default function Weather() {
  let weatherData = {
    city: "Amsterdam",
    date: "Saturday 16 October",
    time: "15:00",
    temperature: "14",
    description: "Cloudy",
    precipitation: "1",
    wind: "16",
  };

  return (
    <div className="Weather">
      <div className="weather-app">
        <Search />
        <br />
        <div className="total-forecast">
          <div className="container day-forecast">
            <div className="row">
              <div className="col-3 city">
                <h2>
                  <span id="city">{weatherData.city}</span>
                </h2>
                <p>
                  <span className="currentDate">{weatherData.date}</span>
                  <br />
                  <span className="currentTime">{weatherData.time}</span>
                </p>
              </div>
              <div className="col-3 rain">
                <br />
                <br />
                <br />
                <p>
                  Precipitation:{" "}
                  <span id="percipitation">{weatherData.precipitation}</span>%
                  <br />
                  Wind: <span id="wind">{weatherData.wind}</span> km/h
                </p>
              </div>
              <div className="col-3 weather-icon">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  id="forecast-icon-0"
                  alt="weather-icon"
                />
              </div>
              <div className="col-3 current-forecast">
                <h2>
                  <div id="temperature-description">
                    {weatherData.description}
                  </div>
                </h2>
                <h3>
                  <span id="temperature">{weatherData.temper}</span>
                  <span className="units">
                    <a href="/" id="celsius-link" className="active">
                      °C
                    </a>
                    |
                    <a href="/" id="fahrenheit-link">
                      °F
                    </a>
                  </span>
                </h3>
              </div>
            </div>
            <br />
            <div className="weather-forecast" id="forecast"></div>
          </div>
        </div>
        <br />
        <p>
          <a href="https://github.com/egroenendijk/SheCodes-React-homework-week-4">
            Open-source code
          </a>
          , by Eva Groenendijk
        </p>
      </div>
    </div>
  );
}
