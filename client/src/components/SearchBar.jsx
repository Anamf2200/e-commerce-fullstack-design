import React from "react";
import { useDispatch } from "react-redux";
import { setFilters } from "../slices/filter-slice";
import { useEffect } from "react";
import { useState } from "react";
import { useGetProductQuery } from "../productRedux/productApi";
const SearchBar = () => {
 const dispatch=useDispatch()
  const [name, setname] = useState('')
  const [category, setcategory] = useState('')
  const [categories, setcategories] = useState([])
    const { data: products, isLoading, isError } = useGetProductQuery();

    useEffect(() => {
    if (products) {
      const uniqueCategories = Array.from(new Set(products.map(p => p.category)));
      setcategories(uniqueCategories);
    }
  }, [products]);

  
  const handleSearch = () => {
dispatch(setFilters({name,category}))
  };
  return (
    <div className="flex flex-wrap items-center border-2 border-blue-400 rounded-lg overflow-hidden w-full max-w-2xl mx-auto">
      <input
        type="text"
        value={name}
        onChange={(e)=>setname(e.target.value)}
        placeholder="Search"
        className="flex-grow px-4 py-2 text-gray-700 outline-none"
      />

      <select className="border-l border-gray-300 px-2 py-2 text-gray-600 outline-none"
       value={category}
        onChange={(e) => setcategory(e.target.value)}
      >
        <option value="">All category</option>
        {isLoading && <option>Loading...</option>}
        {!isLoading && !isError &&
          categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
      </select>

      <button
      onClick={handleSearch}
      className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2">
        Search
      </button>
      
    </div>

    
  );
};

export default SearchBar;
