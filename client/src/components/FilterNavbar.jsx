import React from 'react';
import { Link } from 'react-router-dom';

const FilterNavbar = () => {
  return (
    <>

 <div className="bg-gray-100 py-3 px-6 border-b border-gray-200"> 
 <nav className="flex flex-wrap items-center text-sm text-gray-500 gap-1 sm:gap-2">
 
 <Link 
 to="/" 
 className="hover:text-blue-600 transition duration-200"
 >
 Home </Link>

 <span className="text-gray-400">&gt;</span>

 <Link 
 to="/clothing" 
 className="hover:text-blue-600 transition duration-200"
 >
 Clothings </Link>

 <span className="text-gray-400">&gt;</span>

 <Link 
 to="/clothing/mens-wear" 
 className="hover:text-blue-600 transition duration-200"
 >
Men's wear</Link>

 <span className="text-gray-400">&gt;</span>

 <span className="font-medium text-gray-700 truncate">
Summer clothing
 </span>
 </nav>
</div>
    </>
  );
};

export default FilterNavbar;
