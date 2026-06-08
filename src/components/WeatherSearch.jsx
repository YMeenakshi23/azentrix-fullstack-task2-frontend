import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function WeatherSearch({ onSearch }) {
  const [city, setCity] = useState("");
  const { theme } = useContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) return;

    onSearch(city);
    // Removed setCity("") so the text stays in the box while viewing results
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        type="text"
        placeholder="Search city... (e.g., Hyderabad)"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className={`flex-1 p-3 rounded-lg border transition-colors ${
          theme === "dark"
            ? "bg-slate-800 text-white border-slate-700 placeholder-gray-400"
            : "bg-white text-black border-gray-300"
        }`}
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Search
      </button>
    </form>
  );
}

export default WeatherSearch;