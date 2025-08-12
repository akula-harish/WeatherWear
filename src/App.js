import { WeatherProvider } from "./context/WeatherContext";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import SearchHistory from "./components/SearchHistory";

export default function App() {
  return (
    <WeatherProvider>
      <div className="app">
        <h1>WeatherWear Application</h1>
        <SearchBar />
        <WeatherCard />
        <SearchHistory />
      </div>
    </WeatherProvider>
  );
}
