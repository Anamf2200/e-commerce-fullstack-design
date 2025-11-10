import React from 'react';
import email from '../assets/images/email.png';

const Newsletter = () => {
    return (
        <section className="bg-gray-100 py-12 px-4 md:py-16 lg:px-8">
            <div className="container mx-auto max-w-2xl flex flex-col items-center text-center">
                
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                    Subscribe to our newsletter
                </h2>

                <p className="text-gray-500 text-sm md:text-base mb-6 px-2">
                    Get daily updates on upcoming offers from suppliers all over the world.
                </p>

                <div className="w-full max-w-md">
                    
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
                        
                        <div className="flex items-center flex-grow px-4 py-2 bg-white shadow-md rounded-lg">
                            <img src={email} alt="email icon" className="w-5 h-5 text-gray-400 mr-2" />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full py-2 focus:outline-none text-gray-700 placeholder-gray-400 text-sm md:text-base"
                            />
                        </div>

                        <button className="flex-shrink-0 bg-blue-600 text-white font-medium px-6 py-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-150 text-sm md:text-base whitespace-nowrap">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;