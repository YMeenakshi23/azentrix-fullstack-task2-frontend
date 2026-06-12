import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function NewsCard({ article }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`rounded-xl shadow-md overflow-hidden h-full flex flex-col ${
        theme === "dark"
          ? "bg-slate-800 text-white"
          : "bg-white text-black"
      }`}
    >
      <img
        src={
          article.image ||
          "https://via.placeholder.com/400x200?text=No+Image"
        }
        alt={article.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-lg mb-2 break-words">
          {article.title}
        </h3>

        <p
          className={`text-sm mb-4 break-words flex-grow ${
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
          className="text-blue-500 font-semibold mt-auto"
        >
          Read More →
        </a>
      </div>
    </div>
  );
}

export default NewsCard;