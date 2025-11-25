import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Newsletter from '../Newsletter'
import SecondaryNavbar from './SecondryNavbar'
import banner from '../../assets/images/banner.png'
import watch from '../../assets/images/watch.png'
import mobile from '../../assets/images/mobile.png'
import laptop from '../../assets/images/laptop.png'
import headphone from '../../assets/images/headphones.png'
import camera from '../../assets/images/camera.png'
import homeandoutdoor from '../../assets/images/homeandoutdoor.png'
import sofa from '../../assets/images/sofa.png'
import coffee from '../../assets/images/coffee.png'
import blender from '../../assets/images/blender.png'
import dishes from '../../assets/images/dishes.png'
import kitchermixer from '../../assets/images/kitchenmixer.png'
import smartwatcher from '../../assets/images/smartwatcher.png'
import chair from '../../assets/images/chair.png'
import appliance from '../../assets/images/appliance.png'
import electronic from '../../assets/images/electronic.png'
import background from '../../assets/images/background.png'
import shirt from '../../assets/images/shirt.png'
import shorts from '../../assets/images/shorts.png'
import wallet from '../../assets/images/wallet.png'
import jacket from '../../assets/images/jacket.png'
import kettle from '../../assets/images/kattle.png'
import bag from '../../assets/images/bag.png'
import coat from '../../assets/images/coat.png'
import checking from '../../assets/images/checking.png'
import aeroplane from '../../assets/images/aeroplane.png'
import container from '../../assets/images/container.png'
import colors from '../../assets/images/colors.png'
import search from '../../assets/images/search.png'
import vector from '../../assets/images/Vector.png'
import security from '../../assets/images/security.png'
import send from '../../assets/images/inventory_2.png'
import china from '../../assets/images/china.png'
import arabic from '../../assets/images/arabic.png'
import US from '../../assets/images/US.png'
import france from '../../assets/images/france.png'
import italy from '../../assets/images/italy.png'
import austrailia from '../../assets/images/austrialia.png'
import denmark from '../../assets/images/denmark.png'
import russia from '../../assets/images/russia.png'
import greatbritin from '../../assets/images/greatbritin.png'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useGetProductQuery } from '../../productRedux/productApi'











const Home = () => {
    const dispatch= useDispatch()
    const {data,isLoading,isError}=useGetProductQuery()
  return (
    <>
            <Navbar/>
            <SecondaryNavbar/>

            <div className="w-full  px-6 py-2 bg-gray-50">
                
                <div className="flex flex-wrap  lg:space-x-4 items-stretch min-h-[420px] rounded-lg border-2 border-gray-300"> 
                    
                    <div className="w-full lg:w-1/6 h-[400px] flex-shrink-0 mb-4 lg:mb-0"> 
                        <ul className="text-sm font-medium text-gray-700 bg-white rounded-lg shadow-sm border border-gray-100 p-0 h-full overflow-hidden">
                            
                            <li className="border-b border-gray-100">
                                <div className="block px-4 py-2.5 bg-blue-50 text-blue-600 font-semibold cursor-default border-l-4 border-blue-600">
                                    Automobiles
                                </div>
                            </li>
                            <li className="border-b border-gray-100">
                                <a href="#" className="block px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 transition">Clothes and wear</a>
                            </li>
                            <li className="border-b border-gray-100">
                                <a href="#" className="block px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 transition">Home interiors</a>
                            </li>
                            <li className="border-b border-gray-100">
                                <a href="#" className="block px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 transition">Computer and tech</a>
                            </li>
                            <li className="border-b border-gray-100">
                                <a href="#" className="block px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 transition">Tools, equipments</a>
                            </li>
                            <li className="border-b border-gray-100">
                                <a href="#" className="block px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 transition">Sports and outdoor</a>
                            </li>
                            <li className="border-b border-gray-100">
                                <a href="#" className="block px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 transition">Animal and pets</a>
                            </li>
                            <li className="border-b border-gray-100">
                                <a href="#" className="block px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 transition">Machinery tools</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 transition">More category</a>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full lg:w-1/3 flex-grow h-[400px]  mb-4 lg:mb-0">
                        <div className="relative rounded-lg overflow-hidden shadow-lg h-full">
                            <img 
                                src={banner} 
                                alt="Latest trending Electronic items" 
                                className="absolute top-0 right-0 h-full w-full object-cover object-right z-0" 
                            />
                            
                            <div className="relative z-10 p-8 flex flex-col justify-center text-left h-full">
                                <h1 className="text-3xl lg:text-4xl font-bold text-black mb-2 max-w-sm" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                                    Latest trending <br />
                                    <span className="text-4xl lg:text-5xl">Electronic items</span>
                                </h1>
                                <button className="w-fit px-6 py-2 bg-white text-gray-800 font-medium rounded-lg shadow-md hover:bg-gray-100 transition duration-150 mt-4">
                                    Learn more
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/6 h-full flex flex-col space-y-3 flex-shrink-0">
                        
                        <div className="bg-white p-4 flex flex-col items-center rounded-lg shadow-sm border border-gray-100 flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                                <img src='https://placehold.co/24x24/c4dfff/1e88e5?text=U' alt="User Icon" className="w-6 h-6" />
                            </div>
                            <p className="text-sm text-gray-800 font-semibold">Hi, user</p>
                            <p className="text-xs text-gray-500">let's get stated</p>
                            
                            <button className="w-full py-2 mt-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition">Join now</button>
                            <button className="w-full py-2 mt-2 border border-gray-300 bg-white text-gray-700 font-medium rounded-lg shadow hover:bg-gray-50 transition">Log in</button>
                        </div>
                        
                        <div className="bg-orange-500 p-4 text-center text-white font-medium rounded-lg shadow flex-grow flex items-center justify-center">
                            Get US $10 off <br /> with a new supplier
                        </div>
                        
                        <div className="bg-teal-400 p-4 text-center text-white font-medium rounded-lg shadow flex-grow flex items-center justify-center">
                            Send quotes with <br /> supplier preferences
                        </div>
                    </div>
                </div>
            </div>


            <div className="container mx-auto px-6 mt-8">
                <div className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md flex flex-wrap lg:flex-nowrap divide-x divide-gray-200">
                    
                    <div className="w-full lg:w-1/6 p-4 flex flex-col justify-center items-start flex-shrink-0 border-b lg:border-b-0">
                        <h2 className="text-xl font-semibold text-gray-800 mb-1">
                            Deals and offers
                        </h2>
                        <p className="text-sm text-gray-500 mb-4">
                            Hygiene equipments
                        </p>
                        
                        <div className="flex space-x-2">
                            <div className="flex flex-col items-center justify-center w-10 h-10 bg-gray-600 rounded text-white text-xs font-bold">
                                <span>04</span><span className="text-[10px] font-normal">Days</span>
                            </div>
                            <div className="flex flex-col items-center justify-center w-10 h-10 bg-gray-600 rounded text-white text-xs font-bold">
                                <span>13</span><span className="text-[10px] font-normal">Hour</span>
                            </div>
                            <div className="flex flex-col items-center justify-center w-10 h-10 bg-gray-600 rounded text-white text-xs font-bold">
                                <span>34</span><span className="text-[10px] font-normal">Min</span>
                            </div>
                            <div className="flex flex-col items-center justify-center w-10 h-10 bg-gray-600 rounded text-white text-xs font-bold">
                                <span>56</span><span className="text-[10px] font-normal">Sec</span>
                            </div>
                        </div>
                    </div>
                    {isLoading && <p>Loading data</p>}
                    {isError && <p>There are some error</p>}
                    {data?.map((item)=>(

                        <div key={item._id} className="w-1/2 sm:w-1/3 lg:w-1/6 p-4 flex flex-col items-center justify-between text-center min-h-[250px] group flex-grow border-b sm:border-b-0 lg:border-r border-gray-200">

                        <div className="flex-grow flex items-center justify-center pt-2">
                            <img src={`http://localhost:3000/uploads/${item.image}`} alt="Smart watches" className="max-h-32 object-contain transition duration-300 group-hover:scale-105" />
                        </div>
                        <p className="text-sm text-gray-700 font-medium mt-3 mb-2">{item.name}</p>
                        <div className="bg-red-100 text-red-500 text-xs font-semibold px-2 py-1 rounded-full">-25%</div>
                    </div>
                    ))}

                </div>
            </div>


            <div className="container mx-auto px-6 mt-8">

                <div className="w-full lg:w-2/2 mb-5 lg:mb-0">
                    <div className="flex flex-wrap border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white">
                        
                        <div className="w-full sm:w-1/3 flex-shrink-0 h-[200px] lg:h-[300px] relative group">
                            <img src={homeandoutdoor} alt="Home and outdoors" className="w-full h-full object-cover absolute inset-0" />
                            <div className="absolute inset-0 flex flex-col justify-end p-6">
                                <h3 className="text-xl font-semibold text-gray-800 leading-tight mb-4">
                                    Home and outdoor
                                </h3>
                                <Link to='/productList' className="w-fit px-6 py-2 bg-white text-gray-800 font-medium rounded-lg shadow-md hover:bg-gray-100 transition duration-150">
                                    Source now
                                </Link>
                            </div>
                        </div>

                        <div className="w-full sm:w-2/3 flex flex-wrap divide-x divide-y divide-gray-200 border-t sm:border-t-0 sm:border-l border-gray-200">
 {isLoading && <p>Loading data</p>}
                    {isError && <p>There are some error</p>}
                        {data?.map((item=>(

                            <div key={item._id} className="w-1/2 md:w-1/4 p-3 flex flex-col items-start space-y-1 hover:bg-gray-50 transition">
                                <p className="text-sm text-gray-700 font-medium">{item.name}</p>
                                <p className="text-xs text-gray-500">From USD {item.price}</p>
                                <img src={`http://localhost:3000/uploads/${item.image}`} alt="Soft chairs" className="w-16 h-16 object-contain self-end mt-2" />
                            </div>
                        )))}
                            
                            
                        </div>
                    </div>
                </div>


                <div className="w-full lg:w-2/2 mt-4">
                    <div className="flex flex-wrap border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white">
                        
                        <div className="w-full sm:w-1/3 flex-shrink-0 h-[200px] lg:h-[300px] relative group bg-purple-500">
                            <img src={electronic} alt="Consumer electronics" className="w-full h-full object-cover absolute inset-0 " />
                            <div className="absolute inset-0 flex flex-col justify-end p-6">
                                <h3 className="text-xl font-semibold text-white leading-tight mb-4">
                                    Consumer electronics and gadgets
                                </h3>
                                <Link to='/productList' className="w-fit px-6 py-2 bg-white text-gray-800 font-medium rounded-lg shadow-md hover:bg-gray-100 transition duration-150">
                                    Source now
                                </Link>
                            </div>
                        </div>

                        <div className="w-full sm:w-2/3 flex flex-wrap divide-x divide-y divide-gray-200 border-t sm:border-t-0 sm:border-l border-gray-200">
                            {data?.map((item)=>(
                                 <div key={item._id} className="w-1/2 md:w-1/4 p-3 flex flex-col items-start space-y-1 hover:bg-gray-50 transition">
                                <p className="text-sm text-gray-700 font-medium">{item.name}</p>
                                <p className="text-xs text-gray-500">From USD {item.price}</p>
                                <img src={`http://localhost:3000/uploads/${item.image}`} alt="Smart watches" className="w-16 h-16 object-contain self-end mt-2" />
                            </div>
                            ))}
                           
                        </div>
                    </div>
                </div>
            </div>


             <div className="container mx-auto px-6 mt-8">
                <div className="bg-blue-600 p-8 rounded-lg shadow-lg relative overflow-hidden">
                    
                    <div className="absolute inset-0 bg-cover bg-center" 
                        style={{ backgroundImage: `url('${background}')` }}>
                    </div> 
                    
                    <div className="relative z-10 flex flex-wrap lg:flex-nowrap space-x-0 lg:space-x-8 items-start"> 
                        
                        <div className="w-full  lg:w-2/3 flex-shrink-0 pr-0 lg:pr-12 pt-4 mb-6 lg:mb-0"> 
                            <h2 className="text-3xl w-[40%] font-extrabold text-white mb-4 leading-snug">
                                An easy way to send requests to all suppliers
                            </h2>
                            <p className="text-base w-[40%] text-blue-100">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                            </p>
                        </div>

                        <div className="w-full lg:w-1/3  bg-white p-6 rounded-lg shadow-2xl flex-shrink-1">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                Send quote to suppliers
                            </h3>
                            
                            <input type="text" placeholder="What item you need?" className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"/>
                            
                            <textarea placeholder="Type more details" rows="3" className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 resize-none"></textarea>

                            <div className="flex  space-x-3 mb-4">
                                <input type="number" placeholder="Quantity" className="flex-grow border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                                <select className="w-24 border border-gray-300 p-3 rounded-lg focus:outline-none">
                                    <option>Pcs</option>
                                    <option>Units</option>
                                </select>
                            </div>

                            <button className="w-36 bg-blue-600 text-white font-medium px-4 py-3 rounded-lg hover:bg-blue-700 transition shadow-lg">
                                Send inquiry
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container mx-auto px-6 mt-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-5">
                    Recommended items
                </h2>
                {isLoading && <p>Loading...</p>}
{isError && <p>Error fetching products</p>}
{data &&  (

      <div className="flex flex-wrap -m-2"> 
                    
                    {data?.map(item=>(

                        <div key={item._id} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-2">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition duration-200 h-full">
                            <div className="h-40 flex items-center justify-center p-4 relative">
                                <img src={`http://localhost:3000/uploads/${item.image}`} alt="T-shirt" className="max-h-32 object-contain" />
                            </div>
                            <div className="p-3 border-t border-gray-100">
                                <p className="text-lg font-semibold text-gray-800 mb-1">$10.30</p>
                                <p className="text-xs text-gray-500 leading-tight">T-shirts with multiple colors, for men</p>
                            </div>
                        </div>
                    </div>
))}
                    
                </div>
)}
              
            </div>


            <div className="container mx-auto px-6 mt-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-5">
                    Our extra services
                </h2>
                
                <div className="flex flex-wrap -mx-2">
                    
                    <div className="w-full sm:w-1/2 lg:w-1/4 px-2 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex-shrink-0 relative group mb-4 lg:mb-0">
                        <div className="h-36 relative overflow-hidden">
                            <img src={container} alt="Warehouse boxes" className="w-full h-full object-cover" />
                            
                            <div className="absolute bottom-4 right-4 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shadow-md transition duration-200 group-hover:bg-blue-200">
                                <img src={search} alt="Search" className="w-5 h-5 text-blue-600" />
                            </div>
                        </div>
                        
                        <div className="p-4 pt-4"> 
                            <h3 className="text-base font-medium text-gray-800 leading-snug">
                                Source from
                            </h3>
                            <p className="text-sm text-gray-600">
                                Industry Hubs
                            </p>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 lg:w-1/4 px-2 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex-shrink-0 relative group mb-4 lg:mb-0">
                        <div className="h-36 relative overflow-hidden">
                            <img src={colors} alt="Color palette" className="w-full h-full object-cover" />
                            <div className="absolute bottom-4 right-4 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shadow-md transition duration-200 group-hover:bg-blue-200">
                                <img src={send} alt="Customize" className="w-5 h-5 text-blue-600" />
                            </div>
                        </div>
                        <div className="p-4 pt-4">
                            <h3 className="text-base font-medium text-gray-800 leading-snug">
                                Customize Your
                            </h3>
                            <p className="text-sm text-gray-600">
                                Products
                            </p>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 lg:w-1/4 px-2 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex-shrink-0 relative group mb-4 lg:mb-0">
                        <div className="h-36 relative overflow-hidden">
                            <img src={aeroplane} alt="Shipping plane" className="w-full h-full object-cover" />
                            <div className="absolute bottom-4 right-4 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shadow-md transition duration-200 group-hover:bg-blue-200">
                                <img src={vector} alt="Shipping" className="w-5 h-5 text-blue-600" />
                            </div>
                        </div>
                        <div className="p-4 pt-4">
                            <h3 className="text-base font-medium text-gray-800 leading-snug">
                                Fast, reliable shipping
                            </h3>
                            <p className="text-sm text-gray-600">
                                by ocean or air
                            </p>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 lg:w-1/4 px-2 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex-shrink-0 relative group mb-4 lg:mb-0">
                        <div className="h-36 relative overflow-hidden">
                            <img src={checking} alt="Product inspection" className="w-full h-full object-cover " />
                            <div className="absolute bottom-4 right-4 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shadow-md transition duration-200 group-hover:bg-blue-200">
                                <img src={security} alt="Security" className="w-5 h-5 text-blue-600" />
                            </div>
                        </div>
                        <div className="p-4 pt-4">
                            <h3 className="text-base font-medium text-gray-800 leading-snug">
                                Product monitoring
                            </h3>
                            <p className="text-sm text-gray-600">
                                and inspection
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="container mx-auto px-6 mt-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-5">
                    Suppliers by region
                </h2>
                
                <div className="flex flex-wrap">
                    
                    <div className="w-1/2 lg:w-1/5 p-3 flex items-start space-x-3 flex-shrink-0">
                        <img src={arabic} alt="UAE Flag" className="w-6 h-4 border border-gray-200 mt-1" />
                        <div>
                            <p className="text-sm font-medium text-gray-800">Arabic Emirates</p>
                            <p className="text-xs text-gray-500">shopname.ae</p>
                        </div>
                    </div>

                    <div className="w-1/2 lg:w-1/5 p-3 flex items-start space-x-3 flex-shrink-0">
                        <img src={austrailia} alt="Australia Flag" className="w-6 h-4 border border-gray-200 mt-1" />
                        <div>
                            <p className="text-sm font-medium text-gray-800">Australia</p>
                            <p className="text-xs text-gray-500">shopname.ae</p>
                        </div>
                    </div>
                    
                    <div className="w-1/2 lg:w-1/5 p-3 flex items-start space-x-3 flex-shrink-0">
                        <img src={US} alt="USA Flag" className="w-6 h-4 border border-gray-200 mt-1" />
                        <div>
                            <p className="text-sm font-medium text-gray-800">United States</p>
                            <p className="text-xs text-gray-500">shopname.ae</p>
                        </div>
                    </div>

                    <div className="w-1/2 lg:w-1/5 p-3 flex items-start space-x-3 flex-shrink-0">
                        <img src={russia} alt="Russia Flag" className="w-6 h-4 border border-gray-200 mt-1" />
                        <div>
                            <p className="text-sm font-medium text-gray-800">Russia</p>
                            <p className="text-xs text-gray-500">shopname.ru</p>
                        </div>
                    </div>

                    <div className="w-1/2 lg:w-1/5 p-3 flex items-start space-x-3 flex-shrink-0">
                        <img src={italy} alt="Italy Flag" className="w-6 h-4 border border-gray-200 mt-1" />
                        <div>
                            <p className="text-sm font-medium text-gray-800">Italy</p>
                            <p className="text-xs text-gray-500">shopname.it</p>
                        </div>
                    </div>
                    
                    <div className="w-1/2 lg:w-1/5 p-3 flex items-start space-x-3 flex-shrink-0">
                        <img src={denmark} alt="Denmark Flag" className="w-6 h-4 border border-gray-200 mt-1" />
                        <div>
                            <p className="text-sm font-medium text-gray-800">Denmark</p>
                            <p className="text-xs text-gray-500">denmark.com.dk</p>
                        </div>
                    </div>

                    <div className="w-1/2 lg:w-1/5 p-3 flex items-start space-x-3 flex-shrink-0">
                        <img src={france} alt="France Flag" className="w-6 h-4 border border-gray-200 mt-1" />
                        <div>
                            <p className="text-sm font-medium text-gray-800">France</p>
                            <p className="text-xs text-gray-500">shopname.com.fr</p>
                        </div>
                    </div>

                    <div className="w-1/2 lg:w-1/5 p-3 flex items-start space-x-3 flex-shrink-0">
                        <img src={arabic} alt="UAE Flag" className="w-6 h-4 border border-gray-200 mt-1" />
                        <div>
                            <p className="text-sm font-medium text-gray-800">Arabic Emirates</p>
                            <p className="text-xs text-gray-500">shopname.ae</p>
                        </div>
                    </div>
                    
                    <div className="w-1/2 lg:w-1/5 p-3 flex items-start space-x-3 flex-shrink-0">
                        <img src={china} alt="China Flag" className="w-6 h-4 border border-gray-200 mt-1" />
                        <div>
                            <p className="text-sm font-medium text-gray-800">China</p>
                            <p className="text-xs text-gray-500">shopname.ae</p>
                        </div>
                    </div>

                    <div className="w-1/2 lg:w-1/5 p-3 flex items-start space-x-3 flex-shrink-0">
                        <img src={greatbritin} alt="UK Flag" className="w-6 h-4 border border-gray-200 mt-1" />
                        <div>
                            <p className="text-sm font-medium text-gray-800">Great Britain</p>
                            <p className="text-xs text-gray-500">shopname.co.uk</p>
                        </div>
                    </div>
                    
                </div>
            </div>


            <Newsletter/>
            <Footer/>
        </>
  )
}

export default Home
