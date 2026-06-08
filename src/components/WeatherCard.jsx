import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function WeatherCard({ weather }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`rounded-2xl shadow-lg p-6 ${
        theme === "dark"
          ? "bg-slate-800 text-white"
          : "bg-white text-black"
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            {weather.name}
          </h2>

          <p className="capitalize text-lg">
            {weather.weather[0].description}
          </p>
        </div>

        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="Weather Icon"
          className="w-20 h-20"
        />
      </div>

      <p className="text-6xl font-bold my-6">
        {Math.round(weather.main.temp)}°C
      </p>

      <div className="grid grid-cols-2 gap-4">
        <div
          className={`p-4 rounded-xl ${
            theme === "dark"
              ? "bg-slate-700"
              : "bg-slate-100"
          }`}
        >
          <p className="font-semibold">
            💧 Humidity
          </p>

          <p className="text-lg">
            {weather.main.humidity}%
          </p>
        </div>

        <div
          className={`p-4 rounded-xl ${
            theme === "dark"
              ? "bg-slate-700"
              : "bg-slate-100"
          }`}
        >
          <p className="font-semibold">
            🌬 Wind
          </p>

          <p className="text-lg">
            {weather.wind.speed} m/s
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;