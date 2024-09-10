// MovieCard.js
import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 max-w-xs">
      <img className="rounded-md w-full h-64 object-cover" src={movie.posterURL} alt={movie.title} />
      <div className="mt-4">
        <h3 className="text-xl font-bold text-gray-800">{movie.title}</h3>
        <p className="text-gray-600">{movie.description}</p>
        <p className="mt-2 text-yellow-500 font-semibold">Rating: {movie.rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
