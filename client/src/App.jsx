
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import Profile from './components/pages/Profile'
import Message from './components/pages/Message'
import Order from './components/pages/Order'
import Cart from './components/pages/Cart'
import Home from './components/pages/Home';
import ProductList from './components/pages/ProductList';
import ProductDetails from './components/pages/ProductDetails';
import AuthPage from './components/pages/Auth';
import AdminPanel from './components/pages/AdminPanel';
import PublicRoute from './components/pages/PublicRoute';
import ProtectedRoute from './components/pages/ProtectedRoute';


function App() {
  

  return (
    <>
     
     <Routes>
      
      <Route path='/home'element={<Home/>}></Route>
        <Route path='/'element={  <PublicRoute>
              <AuthPage />
            </PublicRoute>}></Route>
 <Route
    path="/adminPanel"
    element={
      <ProtectedRoute>
        <AdminPanel />
      </ProtectedRoute>
    }
  />      <Route path='/profile'element={<Profile/>}></Route>
      <Route path='/productList'element={<ProductList/>}></Route>
      <Route path='/product/:id'element={<ProductDetails/>}></Route>
      <Route path='/message'element={<Message/>}></Route>
      <Route path='/order'element={<Order/>}></Route>
        <Route path='/cart'element={<Cart/>}></Route>



     </Routes>
    </>
  )
}

export default App
