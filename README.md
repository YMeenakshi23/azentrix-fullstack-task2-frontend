# 🌤 Weather + News Dashboard (SPA)

A modern single-page React application that combines real-time weather and latest news in one unified dashboard.

---

## 🚀 Features

- 🌍 Real-time weather search using OpenWeatherMap API  
- 📰 Latest news with category filtering (General, Business, Sports, etc.)  
- 🌙 Dark / Light mode toggle with localStorage persistence  
- ⚡ Skeleton loaders during API calls  
- ❌ Graceful error handling (invalid city, API failures, empty results)  
- 📱 Fully responsive design  
- 🧩 Clean component-based architecture (Hooks, Context, Services)

---

## 🛠 Tech Stack

- React.js (Vite)
- Tailwind CSS
- Axios
- OpenWeatherMap API
- NewsAPI / GNews API

---

## 📂 Project Structure

src/
├── components/
├── context/
├── hooks/
├── pages/
├── services/
└── main.jsx

---

## 🌐 APIs Used

### 🌤 OpenWeatherMap API
Used for fetching real-time weather data by city name.

### 📰 News API / GNews API
Used for fetching latest news based on categories.

---

## ⚙️ Setup Instructions

### 1. Clone Repo
git clone https://github.com/your-username/weather-news-dashboard.git

### 2. Install Dependencies
npm install

### 3. Add .env file
VITE_WEATHER_API_KEY=your_key
VITE_NEWS_API_KEY=your_key

### 4. Run Project
npm run dev

---

## 🖼 Screenshots

- Home Page: ./src/assets/screenshots/home.png  
- Weather Section: ./src/assets/screenshots/weather.png  
- News Section: ./src/assets/screenshots/news.png  
- Dark Mode: ./src/assets/screenshots/dark.png  

---

## 📌 Notes

- Only city names supported for weather search  
- API keys required in .env  
- Built as a Single Page Application (SPA)

---

## 👨‍💻 Author

Your Name
Y Meenakshi 
