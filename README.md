# 🌤 Weather + News Dashboard (SPA)

A modern single-page React application that combines real-time weather and latest news in one unified dashboard.

---

## 🚀 Features

- 🌍 Real-time weather search using OpenWeatherMap API
- 📰 Latest news with category filtering (General, Business, Sports, Technology, Entertainment, Health, etc.)
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

```text
src/
├── components/
├── context/
├── hooks/
├── pages/
├── services/
└── main.jsx
```

---

## 🌐 APIs Used

### 🌤 OpenWeatherMap API

Used for fetching real-time weather data by city name.

### 📰 News API / GNews API

Used for fetching the latest news based on selected categories.

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/weather-news-dashboard.git
cd weather-news-dashboard
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Add Environment Variables

Create a `.env` file in the project root and add:

```env
VITE_WEATHER_API_KEY=your_weather_api_key
VITE_NEWS_API_KEY=your_news_api_key
```

### 4️⃣ Run the Project

```bash
npm run dev
```

---

## 🖼 Screenshots

### 🏠 Home Page

![Home Page](./src/assets/screenshots/home.png)

---

### 🌤 Weather Section

![Weather Section](./src/assets/screenshots/weather.png)

---

### 📰 News Section

![News Section](./src/assets/screenshots/news.png)

---

### 🌙 Dark Mode

![Dark Mode](./src/assets/screenshots/dark.png)

---

## 📌 Notes

- Only city names are supported for weather search.
- API keys are required in the `.env` file.
- Built as a Single Page Application (SPA).
- Ensure internet connectivity for fetching live weather and news data.

---

## 🎯 Future Enhancements

- 📍 Current location weather support
- 🔎 News search functionality
- ⭐ Save favorite cities
- 🌡 5-day weather forecast
- 🌐 Multi-language support

---

## 👨‍💻 Author

**Y Meenakshi**

- GitHub: `https://github.com/YMeenakshi23`
- LinkedIn: `https://linkedin.com/in/meenakshi-yakkala`

---

### ⭐ If you found this project useful, consider giving it a star on GitHub!
