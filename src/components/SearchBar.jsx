import { useState, useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { fetchWeather } from "../utils/weatherApi";

export default function SearchBar() {
  const [city, setCity] = useState("");
  const { setCurrentWeather, addToHistory } = useContext(WeatherContext);

  async function handleSearch() {
    if (!city.trim()) return;
    try {
      const data = await fetchWeather(city);
      setCurrentWeather(data);
      addToHistory(city);
      setCity("");
    } catch (err) {
      alert("City not found or API error.");
    }
  }

  return (
    <div className="search-bar">
      <input value={city} onChange={e => setCity(e.target.value)} placeholder="Enter city name here" />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
