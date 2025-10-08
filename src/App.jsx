import React, { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";

const App = () => {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('popularity.desc');
  const [movies, setMovies] = useState([]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = async () => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(search)}`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_KEY}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (sort === "popularity.desc") {
        data.results.sort((a, b) => b.popularity - a.popularity);
      } else if (sort === "popularity.asc") {
        data.results.sort((a, b) => a.popularity - b.popularity);
      } else if (sort === "release_date.desc") {
        data.results.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
      } 

      setMovies(data.results || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  useEffect(() => {
    if (search.trim()) {
      handleSearch();
    }
  }, [sort]);

  useEffect(() => {
    const fetchDefaultMovies = async () => {
      const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`;

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_KEY}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setMovies(data.results || []);
      } catch (error) {
        console.error("Error fetching default movies:", error);
      }
    };

    fetchDefaultMovies();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 flex flex-col items-center p-4">
      <h1 className="text-center text-white text-6xl font-bold mb-10">MovieSearch App</h1>

      <div className="flex items-center bg-white bg-opacity-70 rounded-xl shadow-md px-4 py-2 w-full max-w-md">
        <input
          type="text"
          placeholder="Search Movies..."
          value={search}
          onChange={handleSearchChange}
          className="flex-grow outline-none bg-transparent px-2 py-2 text-lg rounded-l-xl"
        />
        <button
          onClick={handleSearch}
          className="text-2xl p-2 text-purple-700 hover:text-purple-900 hover:scale-150 transition-all"
        >
          <CiSearch />
        </button>
      </div>

      <div className="flex mt-3">
        <h1 className="text-3xl text-white mr-3">Sort By:</h1>
        <select
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none text-black"
          value={sort}
          onChange={handleSort}
        >
          <option value="popularity.desc">Popular</option>
          <option value="popularity.asc">Old</option>
          <option value="release_date.desc">Newest</option>
          <option value="release_date.asc">Hit</option>
        </select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:translate-y-[-10px] hover:scale-101 transition-all"
          >
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-auto"
              />
            ) : (
              <div className="w-full h-72 bg-gray-600 flex items-center justify-center text-white">
                No Image
              </div>
            )}
            <div className="p-3 text-white text-center">
              <h2 className="text-lg font-semibold">{movie.title}</h2>
              <p className="text-sm opacity-75">⭐ {movie.vote_average}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
