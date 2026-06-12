import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const categories = [
  "general",
  "business",
  "technology",
  "sports",
  "health",
  "science",
];

function NewsFilter({ category, setCategory }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex flex-wrap gap-2 my-8">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          className={`px-4 py-2 rounded-lg border transition capitalize ${
            category === cat
              ? "bg-blue-600 text-white"
              : theme === "dark"
              ? "bg-slate-800 text-white border-slate-700"
              : "bg-white text-black border-gray-300"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default NewsFilter;