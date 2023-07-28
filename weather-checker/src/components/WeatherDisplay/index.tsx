import React, { useEffect, useState } from "react";
import "./index.css";
import loadingIcon from "../../images/Loading_icon.gif";
import Thermo from "../../images//thermometericon.png";
import realFeel from "../../images//shiversicon.png";
import humidity from "../../images//humidityicon.png";
import windIcon from "../../images//wind.png";

export type Weather = {
  coord: Coord;
  weather: WeatherElement[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
  message?: string; // This property is only present if the API returns an error so we need to make it optional
};

export type Clouds = {
  all: number;
};

export type Coord = {
  lon: number;
  lat: number;
};

export type Main = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
};

export type Sys = {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
};

export type WeatherElement = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type Wind = {
  speed: number;
  deg: number;
};

type WeatherDisplayProps = {
  searched: boolean;
  weatherData: Weather | null;
};

function WeatherDisplay({ searched, weatherData }: WeatherDisplayProps) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Update the loading state when the 'searched' prop changes
    setIsLoading(searched);
  }, [searched]);

  // If the weatherData object has a 'message' property, it means that the API returned an error
  if (weatherData?.message) {
    return <p>No city found by that name. Please try again.</p>;
  }

  return (
    <div className="weatherDisplay">
      {searched && weatherData ? (
        <div className="weatherContainer">
          <h1 id="displayH1">
            {weatherData.name}
            <img
              src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
              alt="icon"
            />
          </h1>
          <h2>{weatherData.weather[0].description}</h2>
          <div className="mainTemp">
            <p>
              Temp: {weatherData.main.temp.toFixed(0)}°C
              <img src={Thermo} alt="Thermometer"></img>
            </p>
            <p>
              Feels like: {weatherData.main.feels_like.toFixed(0)}°C
              <img src={realFeel} alt="Feels like"></img>
            </p>
            <p>
              Humidity: {weatherData.main.humidity}%{" "}
              <img src={humidity} alt="humidity"></img>
            </p>
            <p>
              Wind speed: {weatherData.wind.speed} km/h
              <img src={windIcon} alt="wind"></img>
            </p>
          </div>
        </div>
      ) : (
        <>
          <p>Enter a city to get started!</p>
          {isLoading && <img src={loadingIcon} alt="loading gif" />}
        </>
      )}
    </div>
  );
}

export default WeatherDisplay;
