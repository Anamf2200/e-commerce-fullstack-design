import { configureStore } from '@reduxjs/toolkit'
import { productApi } from '../productRedux/productApi'
import cartreducer from '../slices/add-to-cart-slice'
import filterreducer from '../slices/filter-slice'
import authreducer from '../slices/auth-slice'
import { authApi } from '../auth/authApi'
export const store = configureStore({
  reducer: {
    cart:cartreducer,
    filters:filterreducer,
    auth:authreducer,
    [productApi.reducerPath]:productApi.reducer,
    [authApi.reducerPath]:authApi.reducer
  },

  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(productApi.middleware)
  .concat(authApi.middleware),
  
  
})