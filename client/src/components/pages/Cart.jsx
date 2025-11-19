import React from 'react';
import DiscountBanner from '../DiscountBanner';
import Footer from '../Footer';
import CartNavbar from '../CartNavbar';

// Icons / Images
import americanexpress from '../../assets/images/americanexpress.png';
import paypal from '../../assets/images/paypal.png';
import mastercard from '../../assets/images/mastercard.png';
import visa from '../../assets/images/visa.png';
import applepayment from '../../assets/images/applepayment.png';
import customersupport from '../../assets/images/customersupport.png';
import freedelivery from '../../assets/images/freedelivery.png';
import watch from '../../assets/images/watch.png'
 import cellphone from '../../assets/images/cellphone.png'
  import colors from '../../assets/images/colors.png' 
import lock from '../../assets/images/lock.png'
import displaylaptop from '../../assets/images/displaylaptop.png' 
import { useGetProductQuery } from '../../productRedux/productApi';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQty, decreaseQty, addtoCart, clearCart } from '../../slices/add-to-cart-slice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const {data,isLoading,isError}=useGetProductQuery()

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const discount = 60; // example static discount
  const tax = 14; // example static tax
  const total = subtotal - discount + tax;

const savedItems = [ { name: 'GoPro HERO6 4K Action Camera - Black', price: 99.50, image: watch }, { name: 'GoPro HERO6 4K Action Camera - Black', price: 99.50, image: displaylaptop }, { name: 'GoPro HERO6 4K Action Camera - Black', price: 99.50, image: cellphone }, { name: 'GoPro HERO6 4K Action Camera - Black', price: 99.50, image: colors }, ];
  const SavedProductCard = ({ item }) => 
    
    (<div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
       <div className="bg-white rounded-lg overflow-hidden h-full"> 
        <div className="h-48 p-4 flex items-center justify-center bg-gray-100 rounded-t-lg"> 
          <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain" /> 
          </div>
           <div className="p-3"> 
            <p className="text-base font-semibold text-gray-800 mb-1">
              
              ${item.price.toFixed(2)}</p> 
              <p className="text-sm text-gray-600 leading-tight line-clamp-2 mb-3">{item.name}</p> 
              <button onClick={()=>dispatch(addtoCart(item))} className="w-full flex items-center justify-center space-x-1 py-2 text-sm text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition"> 
                <span className="text-base leading-none">&#x1F6D2;</span>
                 {/* Shopping Cart Icon */} <span>Move to cart</span> </button> </div> </div> </div>);

  // Cart Item Card
  const CartItemCard = ({ item }) => (
    <div className="flex border-b border-gray-200 py-4">
      <div className="w-20 h-20 flex-shrink-0 mr-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-contain border border-gray-100 rounded-md"
        />
      </div>

      <div className="flex-grow flex justify-between">
        <div>
          <p className="text-sm font-medium text-gray-800 leading-snug">
            {item.name}
          </p>
          <p className="text-xs text-gray-500 mt-1">{item.description}</p>

          <div className="flex space-x-3 mt-2 text-xs">
            <button
              className="text-red-500 hover:underline"
              onClick={() => dispatch(removeFromCart(item._id))}
            >
              Remove
            </button>
            <button className="text-blue-600 hover:underline">
              Save for later
            </button>
          </div>
        </div>

        <div className="flex flex-col items-end space-y-2">
          <span className="text-base font-semibold text-gray-800">
            ${item.price.toFixed(2)}
          </span>

          {/* Qty controls */}
          <div className="flex items-center space-x-1">
            <button
              onClick={() => dispatch(decreaseQty(item._id))}
              className="px-2 py-1 border rounded"
            >
              -
            </button>

            <span>{item.qty}</span>

            <button
              onClick={() => dispatch(increaseQty(item._id))}
              className="px-2 py-1 border rounded"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <CartNavbar />

      <div className="w-[90%] sm:w-[85%] lg:w-4/5 mx-auto min-h-screen bg-gray-100">
        <div className="bg-gray-50 pt-8 pb-12 px-4">
          <div className="w-full mx-auto">
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-6">
              My cart ({cartItems.length})
            </h1>

            <div className="flex flex-col lg:flex-row lg:space-x-8">
              {/* Left Section */}
              <div className="w-full lg:w-8/12 bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6 lg:mb-0">
                <div className="divide-y divide-gray-100">
                  {cartItems.map((item) => (
                    <CartItemCard key={item._id} item={item} />
                  ))}
                </div>

                <div className="flex flex-wrap justify-between items-center gap-3 pt-6">
                  <Link to={'/'} className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
                    &larr; Back to shop
                  </Link>
                  <button onClick={()=>dispatch(clearCart())} className="w-full sm:w-auto px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition">
                    Remove all
                  </button>
                </div>
              </div>

              {/* Right Section */}
              <div className="w-full lg:w-4/12 flex-shrink-0">
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                  <div className="space-y-2 text-sm mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal:</span>
                      <span className="font-medium text-gray-800">
                        ${subtotal.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Discount:</span>
                      <span className="font-medium text-red-500">
                        -${discount.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax:</span>
                      <span className="font-medium text-green-600">
                        +${tax.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex justify-between pt-2 border-t border-gray-200">
                      <span className="text-lg font-semibold">Total:</span>
                      <span className="text-lg font-semibold text-gray-800">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <button className="w-full py-3 bg-green-600 text-white text-lg font-semibold rounded-lg hover:bg-green-700 transition shadow-lg">
                    Checkout
                  </button>

                  <div className="mt-4 text-center">
                    <div className="flex flex-wrap justify-center items-center gap-3">
                      <img
                        src={americanexpress}
                        alt="American Express"
                        className="w-10 sm:w-12 h-auto opacity-75"
                      />
                      <img
                        src={mastercard}
                        alt="Mastercard"
                        className="w-10 sm:w-12 h-auto opacity-75"
                      />
                      <img
                        src={paypal}
                        alt="PayPal"
                        className="w-10 sm:w-12 h-auto opacity-75"
                      />
                      <img
                        src={visa}
                        alt="Visa"
                        className="w-10 sm:w-12 h-auto opacity-75"
                      />
                      <img
                        src={applepayment}
                        alt="Apple Pay"
                        className="w-10 sm:w-12 h-auto opacity-75"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Badges Section */}
        <div className="w-full bg-gray-50 pt-8 pb-10 mt-4">
          <div className="w-[80%] sm:w-[85%] lg:w-4/5 mx-auto">
            <div className="flex flex-wrap justify-between gap-4 border-b border-gray-200 pb-6 mb-6">
              <div className="flex items-start space-x-3">
                <img src={lock} className="w-6 h-6 mt-1" />
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    Secure payment
                  </p>
                  <p className="text-xs text-gray-500">Have you ever finally just</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <img src={customersupport} className="w-6 h-6 mt-1" />
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    Customer support
                  </p>
                  <p className="text-xs text-gray-500">Have you ever finally just</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <img src={freedelivery} className="w-6 h-6 mt-1" />
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    Free delivery
                  </p>
                  <p className="text-xs text-gray-500">Have you ever finally just</p>
                </div>
              </div>
            </div>

            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
              Saved for later
            </h2>

                
                            <div className="flex flex-wrap mx-2">
                           {isLoading && <p>Loadind data..</p>}
                           {isError && <p>Error...</p>}
                               {data?.map((item, index) => 
                                (<SavedProductCard key={index} item={item} />))} 
                                </div>        
                                  </div>
        </div>

        <DiscountBanner />
      </div>

      <Footer />
    </>
  );
};

export default Cart;
