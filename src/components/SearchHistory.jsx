import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { fetchWeather } from "../utils/weatherApi";

export default function SearchHistory() {
  const { history, setCurrentWeather } = useContext(WeatherContext);

  async function handleClick(city) {
    const data = await fetchWeather(city);
    setCurrentWeather(data);
  }

  return (
    <div className="history">
      <h3>Recent Searches</h3>
      <ul>
        {history.map((city, i) => (
          <li key={i} onClick={() => handleClick(city)}>{city}</li>
        ))}
      </ul>
    </div>
  );
}
