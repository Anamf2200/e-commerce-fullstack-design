import { configureStore } from '@reduxjs/toolkit'
import { productApi } from '../productRedux/productApi'
import cartreducer from '../slices/add-to-cart-slice'
import filterreducer from '../slices/filter-slice'
export const store = configureStore({
  reducer: {
    cart:cartreducer,
    filters:filterreducer,
    [productApi.reducerPath]:productApi.reducer,
  },

  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(productApi.middleware),
  
})