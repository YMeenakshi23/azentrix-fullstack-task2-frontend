import { useState } from "react";
import { getWeather } from "../services/weatherService";

export const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (query) => {
    try {
      setLoading(true);
      setError("");

      if (!query || query.trim() === "") {
        setError("Please enter a city name");
        return;
      }

      const data = await getWeather(query.trim());
      setWeather(data);
    } catch (err) {
      setWeather(null);

      if (err.response?.status === 404) {
        setError(
          "Location not found. Please enter a valid city like Hyderabad or Bengaluru."
        );
      } else {
        setError("Failed to fetch weather. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return { weather, loading, error, fetchWeather };
};