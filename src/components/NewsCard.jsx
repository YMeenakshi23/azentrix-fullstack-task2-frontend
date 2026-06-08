import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function NewsCard({ article }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`rounded-xl shadow-md overflow-hidden ${
        theme === "dark"
          ? "bg-slate-800 text-white"
          : "bg-white text-black"
      }`}
    >
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">
          {article.title}
        </h3>

        <p
          className={`text-sm mb-3 ${
            theme === "dark"
              ? "text-gray-300"
              : "text-gray-600"
          }`}
        >
          {article.description}
        </p>

        <a
          href={article.url}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 font-semibold"
        >
          Read More →
        </a>
      </div>
    </div>
  );
}

export default NewsCard;