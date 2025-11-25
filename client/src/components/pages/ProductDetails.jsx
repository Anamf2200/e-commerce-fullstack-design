import React from 'react'
import productthumb from '../../assets/images/productthumb.png'
import productthumb1 from '../../assets/images/productthumb1.png'
import productthumb2 from '../../assets/images/productthumb2.png'
import productthumb3 from '../../assets/images/productthumb4.png'
import productthumb4 from '../../assets/images/productthumb4.png'
import productthumb5 from '../../assets/images/productthumb5.png'
import productthumb6 from '../../assets/images/productthumb6.png'
import shirt from '../../assets/images/shirt.png'
import jacket from '../../assets/images/jacket.png'
import coat from '../../assets/images/coat.png'
import bag from '../../assets/images/bag.png'
import short from '../../assets/images/shorts.png'
import kattle from '../../assets/images/kattle.png'
import wallet from '../../assets/images/wallet.png'
import watch from '../../assets/images/watch.png'
import headphone from '../../assets/images/headphones.png'
import kitchen from '../../assets/images/kitchenmixer.png'








import germany from '../../assets/images/germany.png'
import Navbar from '../Navbar'
import SecondaryNavbar from './SecondryNavbar'
import FilterNavbar from '../FilterNavbar'
import Footer from '../Footer'
import DiscountBanner from '../DiscountBanner'
import SearchBar from '../SearchBar'
import { useParams } from 'react-router-dom'
import { useGetProductByIdQuery } from '../../productRedux/productApi'
import { useGetProductQuery } from '../../productRedux/productApi'




const ProductDetails = () => {
    const {id}=useParams()
    const {data,isLoading,isError}=useGetProductByIdQuery(id)
    const{data:product}=useGetProductQuery()

    
  if (isLoading) return <p className="text-center mt-20">Loading...</p>;
  if (isError) return <p className="text-center mt-20">Error loading product</p>;
  if (!data) return <p className="text-center mt-20">No product found</p>;
   

const activeTab = 'description'; 

   
     

 
 

    
  return (


    <>
    <Navbar/>
    <SecondaryNavbar/>
    <FilterNavbar/>



    <div className='bg-gray-50'>

          <div className="w-full mt-4 lg:w-4/5 mx-auto px-6 py-8 border border-gray-300 bg-white-50 rounded-lg"> 
            
            <div className="w-full sm:w-11/12 lg:w-4/5 mx-auto"> 
                
                <div className="flex flex-wrap lg:flex-nowrap lg:space-x-8">
                    
                    <div className="w-full lg:w-4/12 flex-shrink-0 mb-6 lg:mb-0">
                        
                        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-md flex justify-center items-center h-96 mb-4">
                            <img src={`http://localhost:3000/uploads/${data.image}`} alt="Main Product View" className="max-h-full max-w-full object-contain" />
                        </div>
                        
                        <div className="flex space-x-3 overflow-x-auto pb-2">
                            <button className="w-16 h-16 flex-shrink-0 bg-white border border-orange-500 rounded-md p-1 hover:border-blue-500 transition">
                                <img src={`http://localhost:3000/uploads/${data.image}`} alt="Thumbnail 1" className="w-full h-full object-contain" />
                            </button>
                            <button className="w-16 h-16 flex-shrink-0 bg-white border border-gray-200 rounded-md p-1 hover:border-blue-500 transition">
                                <img src={`http://localhost:3000/uploads/${data.image}`} alt="Thumbnail 2" className="w-full h-full object-contain" />
                            </button>
                            <button className="w-16 h-16 flex-shrink-0 bg-white border border-gray-200 rounded-md p-1 hover:border-blue-500 transition">
                                <img src={`http://localhost:3000/uploads/${data.image}`} alt="Thumbnail 3" className="w-full h-full object-contain" />
                            </button>
                            <button className="w-16 h-16 flex-shrink-0 bg-white border border-gray-200 rounded-md p-1 hover:border-blue-500 transition">
                                <img src={`http://localhost:3000/uploads/${data.image}`} alt="Thumbnail 4" className="w-full h-full object-contain" />
                            </button>
                            <button className="w-16 h-16 flex-shrink-0 bg-white border border-gray-200 rounded-md p-1 hover:border-blue-500 transition">
                                <img src={`http://localhost:3000/uploads/${data.image}`} alt="Thumbnail 5" className="w-full h-full object-contain" />
                            </button>
                            <button className="w-16 h-16 flex-shrink-0 bg-white border border-gray-200 rounded-md p-1 hover:border-blue-500 transition">
                                <img src={`http://localhost:3000/uploads/${data.image}`} alt="Thumbnail 6" className="w-full h-full object-contain" />
                            </button>
                        </div>
                    </div>

                    <div className="w-full lg:w-8/12 flex-grow flex flex-wrap lg:flex-nowrap lg:space-x-8">
                        
                        <div className="w-full lg:w-2/3 flex-grow mb-6 lg:mb-0 bg-white p-4 rounded-lg shadow-md">
                            
                            <div className="flex items-center space-x-2 mb-2">
                                <span className="text-green-600 font-medium text-sm">✓ In stock</span>
                            </div>
                            <h1 className="text-xl font-semibold text-gray-800 leading-snug">
                                {data.name}
                            </h1>
                            
                            <div className="flex items-center space-x-3 mt-2 pb-4 border-b border-gray-100">
                                <div className="flex text-sm items-center space-x-1">
                                    <span className="text-yellow-500">★★★★★</span>
                                    <span className="font-semibold text-gray-800">9.3</span>
                                </div>
                                <span className="text-gray-300">•</span>
                                <span className="text-gray-600 text-sm">32 reviews</span>
                                <span className="text-gray-300">•</span>
                                <span className="text-gray-600 text-sm">154 sold</span>
                            </div>

                            <div className="flex space-x-4 py-4 border-b border-gray-100">
                                <div className="text-center">
                                    <p className="text-lg font-bold text-red-500">$98.00</p>
                                    <p className="text-xs text-gray-500 mt-1">50-100 pcs</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-lg font-bold text-gray-900">$90.00</p>
                                    <p className="text-xs text-gray-500 mt-1">100-700 pcs</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-lg font-bold text-gray-900">$78.00</p>
                                    <p className="text-xs text-gray-500 mt-1">700+ pcs</p>
                                </div>
                            </div>

                            <div className="pt-4 space-y-2">
                                <div className="flex items-start">
                                    <span className="w-24 text-sm text-gray-500 flex-shrink-0">Price:</span>
                                    <span className="text-sm text-gray-700">{data.price}</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="w-24 text-sm text-gray-500 flex-shrink-0">Type:</span>
                                    <span className="text-sm text-gray-700">Classic shoes</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="w-24 text-sm text-gray-500 flex-shrink-0">Material:</span>
                                    <span className="text-sm text-gray-700">Plastic material</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="w-24 text-sm text-gray-500 flex-shrink-0">Design:</span>
                                    <span className="text-sm text-gray-700">Modern nice</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="w-24 text-sm text-gray-500 flex-shrink-0">Customization:</span>
                                    <span className="text-sm text-gray-700 font-medium">Customized logo and design custom packages</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="w-24 text-sm text-gray-500 flex-shrink-0">Protection:</span>
                                    <span className="text-sm text-gray-700 font-medium">Refund Policy</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="w-24 text-sm text-gray-500 flex-shrink-0">Warranty:</span>
                                    <span className="text-sm text-gray-700 font-medium">2 years full warranty</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/3 flex-shrink-0">
                            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-md">
                                
                                <div className="flex items-center space-x-3 pb-4 border-b border-gray-200 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-lg text-blue-600 font-bold">
                                        R
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Supplier</p>
                                        <p className="font-medium text-gray-800">Guanjoi Trading LLC</p>
                                    </div>
                                </div>

                                <div className="space-y-2 text-sm text-gray-600">
                                    <div className="flex items-center space-x-2">
                                        <img src={germany} alt="Germany Flag" className="w-4 h-3" />
                                        <span>Germany, Berlin</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-green-500 font-bold">✓</span>
                                        <span>Verified Seller</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-gray-500 font-bold">🌍</span>
                                        <span>Worldwide shipping</span>
                                    </div>
                                </div>
                                
                                <div className="mt-6 space-y-3">
                                    <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                                        Send inquiry
                                    </button>
                                    <button className="w-full py-3 bg-white border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition">
                                        Seller's profile
                                    </button>
                                </div>

                                <button className="w-full mt-4 flex items-center justify-center space-x-2 text-gray-600 hover:text-blue-600 transition">
                                    <span className="text-xl">♡</span>
                                    <span className="text-sm font-medium">Save for later</span>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
          <div className="w-full lg:w-4/5 mx-auto bg-white p-6 rounded-lg shadow-md border border-gray-200 mt-8">
            
            <div className="flex border-b border-gray-300 overflow-x-auto whitespace-nowrap mb-6">
                
                <button 
                    className={`pb-3 px-4 text-sm font-medium transition duration-150 ${
                        activeTab === 'description' 
                        ? 'text-blue-600 border-b-2 border-blue-600' 
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                >
                    Description
                </button>

                <button 
                    className={`pb-3 px-4 text-sm font-medium transition duration-150 ${
                        activeTab === 'reviews' 
                        ? 'text-blue-600 border-b-2 border-blue-600' 
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                >
                    Reviews
                </button>

                <button 
                    className={`pb-3 px-4 text-sm font-medium transition duration-150 ${
                        activeTab === 'shipping' 
                        ? 'text-blue-600 border-b-2 border-blue-600' 
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                >
                    Shipping
                </button>

                <button 
                    className={`pb-3 px-4 text-sm font-medium transition duration-150 ${
                        activeTab === 'seller' 
                        ? 'text-blue-600 border-b-2 border-blue-600' 
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                >
                    About seller
                </button>
            </div>
            
            <div className="flex flex-wrap lg:flex-nowrap lg:space-x-8">

                <div className="w-full lg:w-4/5 text-gray-600 lg:pr-4"> 
                    
                    <p className="text-sm leading-relaxed mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>

                    <div className="w-full border border-gray-200 rounded-lg overflow-hidden mb-6">
                        <div className="flex border-b border-gray-200">
                            <div className="w-1/3 sm:w-1/4 p-3 bg-gray-50 text-sm font-medium text-gray-700">Model</div>
                            <div className="w-2/3 sm:w-3/4 p-3 text-sm">#8786867</div>
                        </div>
                        <div className="flex border-b border-gray-200">
                            <div className="w-1/3 sm:w-1/4 p-3 bg-gray-50 text-sm font-medium text-gray-700">Style</div>
                            <div className="w-2/3 sm:w-3/4 p-3 text-sm">Classic style</div>
                        </div>
                        <div className="flex border-b border-gray-200">
                            <div className="w-1/3 sm:w-1/4 p-3 bg-gray-50 text-sm font-medium text-gray-700">Certificate</div>
                            <div className="w-2/3 sm:w-3/4 p-3 text-sm">ISO-898921212</div>
                        </div>
                        <div className="flex border-b border-gray-200">
                            <div className="w-1/3 sm:w-1/4 p-3 bg-gray-50 text-sm font-medium text-gray-700">Size</div>
                            <div className="w-2/3 sm:w-3/4 p-3 text-sm">34mm x 450mm x 19mm</div>
                        </div>
                        <div className="flex">
                            <div className="w-1/3 sm:w-1/4 p-3 bg-gray-50 text-sm font-medium text-gray-700">Memory</div>
                            <div className="w-2/3 sm:w-3/4 p-3 text-sm">36GB RAM</div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-start space-x-2 text-sm text-gray-700">
                            <span className="text-green-500 font-bold mt-1">✓</span>
                            <p>Some great feature name here</p>
                        </div>
                        <div className="flex items-start space-x-2 text-sm text-gray-700">
                            <span className="text-green-500 font-bold mt-1">✓</span>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                        </div>
                        <div className="flex items-start space-x-2 text-sm text-gray-700">
                            <span className="text-green-500 font-bold mt-1">✓</span>
                            <p>Duis aute irure dolor in reprehenderit</p>
                        </div>
                        <div className="flex items-start space-x-2 text-sm text-gray-700">
                            <span className="text-green-500 font-bold mt-1">✓</span>
                            <p>Some great feature name here</p>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/5 mt-8 lg:mt-0 lg:flex-shrink-0">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">You may like</h3>
                    <div className="space-y-3">
                        {product.map((item, index) => (
                            <div key={index} className="flex space-x-3 items-center border border-gray-200 p-2 rounded-lg hover:shadow-sm transition cursor-pointer">
                                <img src={`http://localhost:3000/uploads/${item.image}`} alt={item.name} className="w-12 h-12 object-cover rounded-md flex-shrink-0" />
                                
                                <div>
                                    <p className="text-xs font-medium text-gray-700 line-clamp-2">{item.name}</p>
                                    <p className="text-xs text-gray-500">{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>

          <div className="container lg:w-4/5 mx-auto px-6 mt-12 mb-4 border border-gray-300 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-5">
                Related products
            </h2>
            
            <div className="flex flex-wrap -mx-2">

                {/* related producst */}
                
                {product.map((item, index) => (
                    <div 
                        key={index} 
                        className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6  px-2 mb-4 "
                    >
                        <div className="bg-white rounded-lg overflow-hidden h-full group cursor-pointer hover:shadow-lg transition duration-200">
                            
                            <div className="h-48 md:h-56 p-4 flex items-center justify-center bg-gray-100 border border-gray-200 rounded-t-lg">
                                <img 
                                    src={`http://localhost:3000/uploads/${item.image}`} 
                                    alt={item.name} 
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>
                            
                            <div className="p-3 text-center">
                                <p className="text-sm font-medium text-gray-800 leading-tight line-clamp-2">
                                    {item.name}
                                </p>
                                <p className="text-sm text-gray-500 mt-1">
                                    {item.price}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

            </div>
            <DiscountBanner/>
        <Footer/>
      
    </>
  )
}

export default ProductDetails
