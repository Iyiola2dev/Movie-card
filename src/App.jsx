// App.js
import React, { useState } from 'react';


import MovieList from './components/MovieList';
import Filter from './components/Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A mind-bending thriller',
      posterURL: 'https://linktoinceptionposter.com',
      rating: 5,
    },
    {
      title: 'Interstellar',
      description: 'A journey beyond the stars',
      posterURL: 'https://linktointerstellarposter.com',
      rating: 4,
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleAddMovie = () => {
    const newMovie = {
      title: prompt('Enter movie title:'),
      description: prompt('Enter movie description:'),
      posterURL: prompt('Enter movie poster URL:'),
      rating: parseInt(prompt('Enter movie rating:'), 10),
    };
    setMovies([...movies, newMovie]);
  };

  const handleFilter = ({ title, rating }) => {
    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        movie.rating >= rating
    );
    setFilteredMovies(filtered);
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800">My Movie App</h1>
      <div className="text-center mt-4">
        <button
          onClick={handleAddMovie}
          className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-700 transition-colors"
        >
          Add Movie
        </button>
      </div>
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
