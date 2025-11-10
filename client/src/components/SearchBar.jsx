import React from "react";

const SearchBar = () => {
  return (
    <div className="flex flex-wrap items-center border-2 border-blue-400 rounded-lg overflow-hidden w-full max-w-2xl mx-auto">
      <input
        type="text"
        placeholder="Search"
        className="flex-grow px-4 py-2 text-gray-700 outline-none"
      />

      <select className="border-l border-gray-300 px-2 py-2 text-gray-600 outline-none">
        <option value="">All category</option>
        <option value="electronics">Electronics</option>
        <option value="clothes">Clothes</option>
        <option value="home">Home</option>
      </select>

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
