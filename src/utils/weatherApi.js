const API_KEY = "YOUR_API_KEY";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function fetchWeather(city) {
  const res = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
  if (!res.ok) throw new Error("City not found");
  return res.json();
}
