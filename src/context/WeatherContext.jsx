import { createContext, useState } from "react";

export const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [history, setHistory] = useState([]);

  function addToHistory(city) {
    setHistory(prev => {
      const newList = [city, ...prev.filter(c => c !== city)];
      return newList.slice(0, 5);
    });
  }

  return (
    <WeatherContext.Provider value={{ currentWeather, setCurrentWeather, history, addToHistory }}>
      {children}
    </WeatherContext.Provider>
  );
}
