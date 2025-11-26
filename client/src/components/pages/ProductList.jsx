import React, { useEffect ,useState} from 'react';
import Navbar from '../../components/Navbar.jsx';
import SecondryNavbar from '../../components/pages/SecondryNavbar.jsx';
import Newsletter from '../Newsletter.jsx';
import Footer from '../Footer.jsx';
import whiteheadphone from '../.././assets/images/whiteheadphones.png'
import displaylaptop from '../.././assets/images/displaylaptop.png'
import redmobile from '../.././assets/images/redmobil.png'
import cellphone from '../.././assets/images/cellphone.png'
import watch from '../.././assets/images/watch.png'
import ProductPagination from '../ProductPagination.jsx';
import { Link } from 'react-router-dom';

import { useGetProductQuery } from '../../productRedux/productApi.js';
import { addtoCart } from '../../slices/add-to-cart-slice.js';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useLazyGetproductQuery } from '../../productRedux/productApi.js';






const FilterGroup = ({ title, children }) => (
    <div className="border-b border-gray-200 pb-4 mb-4">
        <div className="flex justify-between items-center cursor-pointer mb-3">
            <h3 className="text-base font-semibold text-gray-800">{title}</h3>
            <span className="text-xl text-gray-500 transform rotate-180 transition duration-200">&#x2303;</span>
        </div>
        
        <div className="space-y-2">
            {children}
        </div>
    </div>
);

const ProductFilterSidebar = () => {
    const renderStars = (filledCount) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <span key={i} className={`text-lg ${i < filledCount ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
            );
        }
        return stars;
    };

    return (
        <div className="w-full lg:w-64 bg-white p-4 lg:shadow-md lg:rounded-lg flex-shrink-0">
            
            <FilterGroup title="Category" >
                <div className="text-sm text-gray-700 hover:text-blue-600 transition cursor-pointer">Mobile accessory</div>
                <div className="text-sm text-gray-700 hover:text-blue-600 transition cursor-pointer">Electronics</div>
                <div className="text-sm text-gray-700 hover:text-blue-600 transition cursor-pointer">Smartphones</div>
                <div className="text-sm text-gray-700 hover:text-blue-600 transition cursor-pointer">Modern tech</div>
                <a href="#" className="text-sm text-blue-600 hover:underline pt-1 block">See all</a>
            </FilterGroup>

            <FilterGroup title="Brands">
                <div className="flex items-center space-x-2">
                    <input type="checkbox" id="brand-samsung" className="form-checkbox text-blue-600 rounded border-gray-300 focus:ring-blue-500 w-4 h-4"/>
                    <label htmlFor="brand-samsung" className="text-sm text-gray-700 hover:text-blue-600">Samsung</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input type="checkbox" id="brand-apple" className="form-checkbox text-blue-600 rounded border-gray-300 focus:ring-blue-500 w-4 h-4"/>
                    <label htmlFor="brand-apple" className="text-sm text-gray-700 hover:text-blue-600">Apple</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input type="checkbox" id="brand-huawei" className="form-checkbox text-blue-600 rounded border-gray-300 focus:ring-blue-500 w-4 h-4"/>
                    <label htmlFor="brand-huawei" className="text-sm text-gray-700 hover:text-blue-600">Huawei</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input type="checkbox" id="brand-pocco" className="form-checkbox text-blue-600 rounded border-gray-300 focus:ring-blue-500 w-4 h-4"/>
                    <label htmlFor="brand-pocco" className="text-sm text-gray-700 hover:text-blue-600">Pocco</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input type="checkbox" id="brand-lenovo" className="form-checkbox text-blue-600 rounded border-gray-300 focus:ring-blue-500 w-4 h-4"/>
                    <label htmlFor="brand-lenovo" className="text-sm text-gray-700 hover:text-blue-600">Lenovo</label>
                </div>
                <a href="#" className="text-sm text-blue-600 hover:underline pt-1 block">See all</a>
            </FilterGroup>

            <FilterGroup title="Features">
                <div className="flex items-center space-x-2">
                    <input type="checkbox" id="feat-metallic" className="form-checkbox text-blue-600 rounded border-gray-300 focus:ring-blue-500 w-4 h-4"/>
                    <label htmlFor="feat-metallic" className="text-sm text-gray-700 hover:text-blue-600">Metallic</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input type="checkbox" id="feat-plastic" className="form-checkbox text-blue-600 rounded border-gray-300 focus:ring-blue-500 w-4 h-4"/>
                    <label htmlFor="feat-plastic" className="text-sm text-gray-700 hover:text-blue-600">Plastic cover</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input type="checkbox" id="feat-8gb" className="form-checkbox text-blue-600 rounded border-gray-300 focus:ring-blue-500 w-4 h-4"/>
                    <label htmlFor="feat-8gb" className="text-sm text-gray-700 hover:text-blue-600">8GB Ram</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input type="checkbox" id="feat-super" className="form-checkbox text-blue-600 rounded border-gray-300 focus:ring-blue-500 w-4 h-4"/>
                    <label htmlFor="feat-super" className="text-sm text-gray-700 hover:text-blue-600">Super power</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input type="checkbox" id="feat-large" className="form-checkbox text-blue-600 rounded border-gray-300 focus:ring-blue-500 w-4 h-4"/>
                    <label htmlFor="feat-large" className="text-sm text-gray-700 hover:text-blue-600">Large Memory</label>
                </div>
                <a href="#" className="text-sm text-blue-600 hover:underline pt-1 block">See all</a>
            </FilterGroup>

            <FilterGroup title="Price range">
                <div className="relative pt-3 mb-2">
                    <div className="w-full h-1 bg-gray-300 rounded-lg"></div> 
                    <div className="absolute top-3 left-0 w-full h-1">
                        <div className="absolute h-1 bg-blue-500 rounded-lg" style={{ left: '30%', right: '30%' }}></div>
                        <div className="absolute w-4 h-4 bg-white border border-blue-500 rounded-full shadow" style={{ left: '30%', transform: 'translateX(-50%) translateY(-50%)', top: '50%' }}></div>
                        <div className="absolute w-4 h-4 bg-white border border-blue-500 rounded-full shadow" style={{ left: '70%', transform: 'translateX(-50%) translateY(-50%)', top: '50%' }}></div>
                    </div>
                </div>

                <div className="flex space-x-2 mt-4">
                    <div className="flex flex-col flex-grow">
                        <input type="number" placeholder="Min" className="w-full border border-gray-300 p-2 text-sm rounded-lg focus:outline-none focus:border-blue-500"/>
                    </div>
                    <div className="flex flex-col flex-grow">
                        <input type="number" placeholder="Max" className="w-full border border-gray-300 p-2 text-sm rounded-lg focus:outline-none focus:border-blue-500"/>
                    </div>
                </div>
                
                <button className="w-full mt-3 bg-blue-600 text-white font-medium py-2 text-sm rounded-lg hover:bg-blue-700 transition">
                    Apply
                </button>
            </FilterGroup>

            <FilterGroup title="Condition">
                <div className="flex items-center space-x-2">
                    <input type="radio" id="cond-any" name="condition" defaultChecked className="form-radio text-blue-600 w-4 h-4"/>
                    <label htmlFor="cond-any" className="text-sm text-gray-700">Any</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input type="radio" id="cond-refurbished" name="condition" className="form-radio text-blue-600 w-4 h-4"/>
                    <label htmlFor="cond-refurbished" className="text-sm text-gray-700">Refurbished</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input type="radio" id="cond-new" name="condition" className="form-radio text-blue-600 w-4 h-4"/>
                    <label htmlFor="cond-new" className="text-sm text-gray-700">Brand new</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input type="radio" id="cond-old" name="condition" className="form-radio text-blue-600 w-4 h-4"/>
                    <label htmlFor="cond-old" className="text-sm text-gray-700">Old items</label>
                </div>
            </FilterGroup>

            <FilterGroup title="Ratings">
                <div className="flex items-center space-x-2">
                    <input type="checkbox" id="rating-5" className="form-checkbox text-blue-600 rounded border-gray-300 focus:ring-blue-500 w-4 h-4"/>
                    <label htmlFor="rating-5" className="flex items-center space-x-0.5">
                        {renderStars(5)}
                    </label>
                </div>
                <div className="flex items-center space-x-2">
                    <input type="checkbox" id="rating-4" className="form-checkbox text-blue-600 rounded border-gray-300 focus:ring-blue-500 w-4 h-4"/>
                    <label htmlFor="rating-4" className="flex items-center space-x-0.5">
                        {renderStars(4)}
                    </label>
                </div>
                <div className="flex items-center space-x-2">
                    <input type="checkbox" id="rating-3" className="form-checkbox text-blue-600 rounded border-gray-300 focus:ring-blue-500 w-4 h-4"/>
                    <label htmlFor="rating-3" className="flex items-center space-x-0.5">
                        {renderStars(3)}
                    </label>
                </div>
                <div className="flex items-center space-x-2">
                    <input type="checkbox" id="rating-2" className="form-checkbox text-blue-600 rounded border-gray-300 focus:ring-blue-500 w-4 h-4"/>
                    <label htmlFor="rating-2" className="flex items-center space-x-0.5">
                        {renderStars(2)}
                    </label>
                </div>
            </FilterGroup>
        </div>
    );
};


const ProductList = () => {
      const API_URL = "https://server-cool-snowflake-7302.fly.dev";

    const filters= useSelector((state)=>state.filters)
    const dispatch=useDispatch()
    const {data,isLoading,isError}=useGetProductQuery()
    const [searchProduct,{data:searchedProduct,isLoading:loadingAll,isError:allError}]=useLazyGetproductQuery()
    const [productsToRender, setproductsToRender] = useState([])

useEffect(() => {
    if ((filters.name && filters.name.trim() !== "")|| (filters.category && filters.category.trim() !== "")) {
        // If search input has text, fetch filtered products
        searchProduct(filters);
    } else {
        // If search input is empty, show all products
        setproductsToRender(data);
    }
}, [filters.name,filters.category, data]);


useEffect(() => {
 if(searchedProduct){
    setproductsToRender(searchedProduct)
 }
}, [searchedProduct])





    const renderProductCard = (product) => (

        <div key={product._id} className="flex border border-gray-200 p-4 rounded-lg bg-white hover:shadow-lg transition duration-200">
            <div className="w-1/4 flex-shrink-0 mr-4 h-32 flex items-center justify-center">
                <img src={`${API_URL}/uploads/${product.image}`} alt={product.name} className="max-h-full max-w-full object-contain" />
            </div>

            <div className="w-3/4 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-base font-medium text-gray-800 hover:text-blue-600 transition leading-snug">
                            {product.name}
                        </h3>
                        <div className="flex items-center space-x-3 mt-1 text-sm">
                            <span className="font-bold text-gray-900">${product.price}</span>
                            {product.oldPrice && (
                                <span className="text-gray-500 line-through text-xs">${product.oldPrice}</span>
                            )}
                        </div>
                        
                        <div className="flex items-center space-x-3 mt-1 text-xs text-gray-600">
                            <div className="flex items-center">
                                <span className="font-semibold mr-1 text-yellow-500">★</span>
                                <span>{product.rating}</span>
                            </div>
                            <span className="text-gray-400">|</span>
                            <span>{product.orders} orders</span>
                            <span className="text-green-600 font-semibold">| Free Shipping</span>
                        </div>

                    </div>
                    <button className="text-gray-400 hover:text-red-500 transition">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </button>
                </div>
                
                <div className="mt-2">
                    <p className="text-xs text-gray-500 line-clamp-2">
                                {product.description}                     </p>
                    <Link to={`/product/${product._id}`} className="text-xs text-blue-600 hover:underline mt-1 block">View details</Link>
            <button onClick={()=>dispatch(addtoCart(product))} className="text-xs text-blue-600 hover:underline mt-1 block">Add to cart</button>

                </div>
            </div>
        </div>
    );

    return (
        <>
            <Navbar/>
            <SecondryNavbar/>

            <div className="bg-gray-50 pt-4 pb-10 px-6">
                
                
                <div className="flex flex-wrap lg:flex-nowrap lg:space-x-4">
                    
                    <div className="w-full lg:w-64 flex-shrink-0 mb-6 lg:mb-0">
                        <ProductFilterSidebar />
                    </div>

                    <div className="w-full lg:flex-grow">
                        
                        <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm mb-4 border border-gray-200 text-sm">
                            
                            <div className="flex items-center space-x-4">
                                <span className="font-semibold text-gray-700 whitespace-nowrap">
                                    12,911 items in Mobile accessory
                                </span>
                                <div className="flex items-center space-x-2">
                                    <input type="checkbox" id="verified-only" className="form-checkbox text-blue-600 rounded w-4 h-4"/>
                                    <label htmlFor="verified-only" className="text-gray-600 whitespace-nowrap">Verified only</label>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="flex items-center space-x-2">
                                    <span className="text-gray-600">Featured</span>
                                    <select className="border border-gray-300 p-1 rounded-lg text-sm focus:outline-none">
                                        <option>Recommended</option>
                                        <option>Price: Low to High</option>
                                    </select>
                                </div>

                                <div className="flex space-x-1">
                                    <button className="p-1 border bg-blue-50 text-blue-600 border-blue-600 rounded">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
                                    </button>
                                    <button className="p-1 border border-gray-300 text-gray-500 rounded hover:text-gray-700 transition">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m-7-4h14"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                              {( isLoading|| loadingAll) && <p>Loading...</p>}
                {( isError|| allError) && <p>Error loading products</p>}
                {productsToRender && productsToRender.length === 0 && <p>No products found.</p>}
                {productsToRender && productsToRender.map(renderProductCard)}

                        </div>
                        <ProductPagination/>

                    </div>
                </div>
            </div>
            <Newsletter/>
            <Footer/>
        </>
    );
};

export default ProductList;