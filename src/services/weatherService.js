import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const getWeather = async (query) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      query
    )}&units=metric&appid=${API_KEY}`
  );

  return response.data;
};