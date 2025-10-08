# 🎬 MovieSearch App

A sleek and responsive **React.js Movie Search App** that allows users to explore movies using **The Movie Database (TMDB) API**.  
Search for your favorite movies, sort them by popularity or release date, and view real-time movie details with stunning visuals.

---

## 🚀 Features

- 🔍 **Search Movies** by title using TMDB API  
- 🎞️ **Sort Results** by:
  - Popularity (ascending / descending)
  - Release Date (newest / oldest)
- 🧠 **Default Popular Movies** shown on load  
- 🌈 **Modern UI** built with Tailwind CSS  
- ⚡ **Fast & Responsive Design** for all screen sizes  

---

## 🛠️ Tech Stack

- **React.js** – Frontend library  
- **Vite** – Lightning-fast build tool  
- **Tailwind CSS** – Modern utility-first styling  
- **TMDB API** – Movie data source  
- **React Icons** – Beautiful icon set (Search, etc.)

---

## 🔑 Environment Setup

Create a `.env` file in your project root and add your TMDB API key:

```bash
VITE_KEY=your_tmdb_api_bearer_token_here
```
🧩 Installation & Setup

Clone the repository and install dependencies:

git clone https://github.com/your-username/moviesearch-app.git
cd moviesearch-app
npm install


Start the development server:

npm run dev


Then open your browser and visit:

http://localhost:5173/

🧠 How It Works

On load → Fetches popular movies from TMDB.

When the user searches → Fetches movies matching the query.

Sort dropdown → Dynamically sorts results by popularity or release date.

🌟 Example Sort Options
Sort Option	Description
popularity.desc	Most popular first
popularity.asc	Least popular first
release_date.desc	Newest movies first
release_date.asc	Oldest movies first
💅 UI Highlights

🎨 Gradient background (gray-900 → gray-700)

✨ Smooth hover effects on movie cards

⚙️ Animated search button with scale effect

🧱 Responsive grid layout (2–4 columns)

📚 Folder Structure
moviesearch-app/
│
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── package.json
├── vite.config.js
└── README.md

🤝 Contributing

Contributions are welcome!
Feel free to fork the repository and submit a pull request with improvements or new features.

🧾 License

This project is licensed under the MIT License.
You are free to use, modify, and distribute it with proper attribution.

💖 Acknowledgements

TMDB API

Tailwind CSS

React Icons

Vite
















