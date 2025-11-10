import React from 'react';

const ProductPagination = () => {
    return (
        <div className="flex justify-end items-center w-full mt-6">
            
            <div className="flex items-center space-x-3">

                <div className="relative flex items-center shadow-md rounded-lg overflow-hidden border border-gray-300">
                    <select 
                        className="p-2.5 text-sm text-gray-700 bg-white appearance-none pr-8 focus:outline-none cursor-pointer"
                        defaultValue="10"
                    >
                        <option value="10">Show 10</option>
                        <option value="20">Show 20</option>
                        <option value="50">Show 50</option>
                    </select>
                    <span className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2 text-gray-500 pointer-events-none text-sm">&#x2304;</span>
                </div>

                <div className="flex items-center shadow-md rounded-lg overflow-hidden border border-gray-300">
                    
                    <button 
                        className="p-3 text-gray-500 bg-white hover:bg-gray-50 border-r border-gray-200 disabled:opacity-50"
                        disabled
                    >
                        &lt;
                    </button>
                    
                    <button 
                        className="p-3 w-10 text-sm font-medium text-white bg-blue-600 border-r border-gray-200"
                    >
                        1
                    </button>

                    <button 
                        className="p-3 w-10 text-sm text-gray-700 bg-white hover:bg-gray-50 border-r border-gray-200"
                    >
                        2
                    </button>

                    <button 
                        className="p-3 w-10 text-sm text-gray-700 bg-white hover:bg-gray-50 border-r border-gray-200"
                    >
                        3
                    </button>

                    <button 
                        className="p-3 text-gray-500 bg-white hover:bg-gray-50"
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductPagination;