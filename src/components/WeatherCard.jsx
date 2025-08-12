import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { getOutfitSuggestion } from "../utils/outfitLogic";

export default function WeatherCard() {
  const { currentWeather } = useContext(WeatherContext);
  if (!currentWeather) return null;

  const { name, main, weather, wind } = currentWeather;
  const suggestion = getOutfitSuggestion(main.temp, weather[0].main);

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>{main.temp}°C — {weather[0].description}</p>
      <p>Wind: {wind.speed} m/s | Humidity: {main.humidity}%</p>
      <p className="outfit">{suggestion}</p>
    </div>
  );
}
