import React from 'react'

const DiscountBanner = () => {
  return (
    <>
      <div className='mb-10'>
    <div className="lg:w-4/5 mx-auto">
                <div className="min-h-32 p-6 rounded-lg shadow-xl overflow-hidden mt-4
                            flex flex-col sm:flex-row justify-between items-center relative space-y-4 sm:space-y-0"
                    style={{ 
                        background: 'linear-gradient(90deg, #1971F2 0%, #3B82F6 100%)' 
                    }}
                >
                    <div className="absolute inset-0 z-0 opacity-20"
                        style={{ 
                            background: 'linear-gradient(45deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.3) 100%)'
                        }}
                    ></div>

                    <div className="relative z-10 text-white flex flex-col justify-center flex-grow ">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold mb-1 leading-tight">
                            Super discount on more than 100 USD
                        </h2>
                        <p className="text-xs sm:text-sm font-light opacity-80">
                            Have you ever finally just write dummy info
                        </p>
                    </div>

                    <div className="relative z-10 flex-shrink-0 w-full sm:w-auto">
                        <button className="w-full sm:w-auto bg-orange-500 text-white font-semibold px-8 py-3 rounded-lg 
                                           hover:bg-orange-600 transition duration-200 shadow-md">
                            Shop now
                        </button>
                    </div>
                </div>
            </div>

            </div>
    </>
  )
}

export default DiscountBanner
