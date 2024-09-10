// Filter.js
import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0);

  const handleFilter = () => {
    onFilter({ title, rating });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
      <input
        type="text"
        className="p-2 border rounded-lg shadow-md w-full sm:w-1/3"
        placeholder="Filter by title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        className="p-2 border rounded-lg shadow-md w-full sm:w-1/3"
        placeholder="Filter by rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button
        onClick={handleFilter}
        className="bg-gray-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-700 transition-colors"
      >
        Filter
      </button>
    </div>
  );
};

export default Filter;
