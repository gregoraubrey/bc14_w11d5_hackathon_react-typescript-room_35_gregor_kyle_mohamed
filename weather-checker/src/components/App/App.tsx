import React, { useState, ChangeEvent } from "react";
import Header from "../Header";
import Footer from "../Footer";
import SearchBar from "../SearchBar";
import WeatherDisplay from "../WeatherDisplay";
import { fetchRequest } from "../../FetchRequest";
import { Weather } from "../WeatherDisplay/index";
import "./App.css";

function App() {
  const [city, setCity] = useState<string>("");
  const [searched, setSearched] = useState<boolean>(false);
  const [weatherData, setWeatherData] = useState<Weather | null>(null);

  function handleClick(): void {
    // Remove any extra spaces and make the city lowercase
    // "     neW      yORk     "
    // "new york"
    const cleanCity = city.trim().replace(/\s+/g, " ").toLowerCase();
    console.log(`The text being used in the fetch request is: ${cleanCity}`);
    if (cleanCity) {
      setSearched(false);
      fetchRequest(cleanCity)
        .then((data: Weather | null) => {
          setWeatherData(data);
          setSearched(true);
          setCity("");
        })
        .catch((error) => {
          console.error(error);
          setCity("");
        });
    }
  }

  function handleSearchChange(e: ChangeEvent<HTMLInputElement>) {
    setCity(e.target.value);
  }

  return (
    <div className="App">
      <Header />

      <div className="Searchbar">
        <SearchBar
          handleClick={handleClick}
          handleSearchChange={handleSearchChange}
          city={city}
        />
      </div>
      <WeatherDisplay searched={searched} weatherData={weatherData} />

      <Footer />
    </div>
  );
}

export default App;
