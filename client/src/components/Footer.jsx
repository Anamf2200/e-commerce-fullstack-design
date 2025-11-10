import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-colored.png'
import facebook from '../assets/images/facebook.png'
import twitter from '../assets/images/twitter.png'
import instagram from '../assets/images/instagram.png'
import linkedin from '../assets/images/linkedin.png'
import youtube from '../assets/images/youtube.png'
import googleplay from '../assets/images/google-play.png'
import appplay from '../assets/images/apple-play.png'

const Footer = () => {
  return (
    <footer className="bg-white ">
      <div className="container mx-auto px-4 py-10 md:py-16 ">
        
        <div className="flex flex-wrap -mx-4 justify-center">
          
          <div className="w-full md:w-1/3 lg:w-2/7 px-4 mb-8"> 
            
            <div className="flex items-center space-x-2">
             <img src={logo} alt="brand-log" />
            </div>
            
            <p className="text-gray-500 text-sm max-w-xs mt-4">
              Best information about the company gies here but now lorem ipsum is
            </p>
            
           <div className="flex space-x-3 pt-4">
    <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
        <img src={facebook} alt="Facebook" className="w-4 h-4" /> 
    </a> 
    
    <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
        <img src={twitter} alt="Twitter" className="w-4 h-4" /> 
    </a>
    
    <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
        <img src={linkedin} alt="LinkedIn" className="w-4 h-4" />
    </a>
    
    <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
        <img src={instagram} alt="Instagram" className="w-4 h-4" />
    </a>
    
    <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
        <img src={youtube} alt="YouTube" className="w-4 h-4" />
    </a>
</div>
          </div>

          
          <div className="w-1/2 md:w-1/6 lg:w-1/7 px-4 mb-8">
            <h5 className="text-base font-semibold text-gray-900">About</h5>
            <ul className="space-y-2 text-sm mt-3">
              <li><Link to="#" className="text-gray-500 hover:text-blue-500">About Us</Link></li>
              <li><Link to="#" className="text-gray-500 hover:text-blue-500">Find store</Link></li>
              <li><Link to="#" className="text-gray-500 hover:text-blue-500">Categories</Link></li>
              <li><Link to="#" className="text-gray-500 hover:text-blue-500">Blogs</Link></li>
            </ul>
          </div>

          <div className="w-1/2 md:w-1/6 lg:w-1/7 px-4 mb-8">
            <h5 className="text-base font-semibold text-gray-900">Partnership</h5>
            <ul className="space-y-2 text-sm mt-3">
              <li><Link to="#" className="text-gray-500 hover:text-blue-500">About Us</Link></li>
              <li><Link to="#" className="text-gray-500 hover:text-blue-500">Find store</Link></li>
              <li><Link to="#" className="text-gray-500 hover:text-blue-500">Categories</Link></li>
              <li><Link to="#" className="text-gray-500 hover:text-blue-500">Blogs</Link></li>
            </ul>
          </div>

          <div className="w-1/2 md:w-1/6 lg:w-1/7 px-4 mb-8">
            <h5 className="text-base font-semibold text-gray-900">Information</h5>
            <ul className="space-y-2 text-sm mt-3">
              <li><Link to="#" className="text-gray-500 hover:text-blue-500">Help Center</Link></li>
              <li><Link to="#" className="text-gray-500 hover:text-blue-500">Money Refund</Link></li>
              <li><Link to="#" className="text-gray-500 hover:text-blue-500">Shipping</Link></li>
              <li><Link to="#" className="text-gray-500 hover:text-blue-500">Contact us</Link></li>
            </ul>
          </div>

          <div className="w-1/2 md:w-1/6 lg:w-1/7 px-4 mb-8">
            <h5 className="text-base font-semibold text-gray-900">For users</h5>
            <ul className="space-y-2 text-sm mt-3">
              <li><Link to="#" className="text-gray-500 hover:text-blue-500">Login</Link></li>
              <li><Link to="#" className="text-gray-500 hover:text-blue-500">Register</Link></li>
              <li><Link to="#" className="text-gray-500 hover:text-blue-500">Settings</Link></li>
              <li><Link to="#" className="text-gray-500 hover:text-blue-500">My Orders</Link></li>
            </ul>
          </div>

          <div className="w-full md:w-1/6 lg:w-1/7 px-4 mb-8">
            <h5 className="text-base font-semibold text-gray-900">Get app</h5>
            <div className="space-y-3 mt-3 ">
              <Link to="#">
                <img 
                  src={googleplay} 
                  alt="Download on the App Store" 
                  className="w-28 h-8 rounded "
                />
              </Link>
              <Link to="#">
                <img 
                  src={appplay}
                  alt="Get it on Google Play" 
                  className="w-28 h-8 rounded mt-3"
                />
              </Link>
            </div>
          </div>

        </div>
      </div>

      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          
          <p className="mb-2 md:mb-0">
            © 2023 Ecommerce.
          </p>

          <div className="flex items-center space-x-2">
            <img 
              src="https://flagcdn.com/us.svg" 
              alt="US Flag" 
              className="w-4 h-3" 
            />
            <span className="font-medium">English</span>
            <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;