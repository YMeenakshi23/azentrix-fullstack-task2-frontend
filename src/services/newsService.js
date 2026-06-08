import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async (category = "general") => {
  const response = await axios.get(
    `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&apikey=${API_KEY}`
  );

  return response.data.articles;
};