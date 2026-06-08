import { useState, useEffect, useContext } from "react";
import WeatherSearch from "../components/WeatherSearch";
import WeatherCard from "../components/WeatherCard";
import NewsCard from "../components/NewsCard";
import NewsFilter from "../components/NewsFilter";
import Loader from "../components/Loader";

import { getNews } from "../services/newsService";
import { ThemeContext } from "../context/ThemeContext";
import { useWeather } from "../hooks/useWeather";

function Dashboard() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // WEATHER HOOK
  const { weather, loading, error, fetchWeather } = useWeather();

  // NEWS STATE
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("general");
  const [newsLoading, setNewsLoading] = useState(false);
  const [newsError, setNewsError] = useState("");

  // NEWS API CALL
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setNewsLoading(true);
        setNewsError("");

        const data = await getNews(category);
        setNews(data || []);
      } catch {
        setNews([]);
        setNewsError("Failed to load news.");
      } finally {
        setNewsLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div
      className={`min-h-screen p-6 transition-all duration-300 ${
        theme === "dark"
          ? "bg-slate-900 text-white"
          : "bg-slate-100 text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">
            🌤 Weather + News Dashboard
          </h1>

          <button
            onClick={toggleTheme}
            className={`px-4 py-2 rounded-lg ${
              theme === "dark"
                ? "bg-white text-black"
                : "bg-black text-white"
            }`}
          >
            Toggle Theme
          </button>
        </div>

        {/* WEATHER */}
        <WeatherSearch onSearch={fetchWeather} />

        {error && (
          <p className="mt-3 text-red-500">{error}</p>
        )}

        {loading ? (
          <Loader />
        ) : (
          weather && (
            <div className="mt-6">
              <WeatherCard weather={weather} />
            </div>
          )
        )}

        {/* NEWS */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">
            Latest News
          </h2>

          <NewsFilter
            category={category}
            setCategory={setCategory}
          />

          {newsLoading ? (
            <Loader />
          ) : newsError ? (
            <p className="text-red-500">{newsError}</p>
          ) : news.length === 0 ? (
            <p>No news found</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {news.map((article, i) => (
                <NewsCard key={i} article={article} />
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default Dashboard;