

import {createSlice} from '@reduxjs/toolkit'

const storedCard=JSON.parse(localStorage.getItem('cartItems')) 

const initialState={
    cartItems:storedCard||[]
}

const cartSlice= createSlice({
    name:'cart',
    initialState,
    reducers:{
        addtoCart:(state,action)=>{
            const item= action.payload
            const exist= state.cartItems.find((p)=>p._id==item._id)

            if(exist)
            {
                exist.qty+=1
            }
            else{
                state.cartItems.push({...item,qty:1})
            }
            localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
        },

        removeFromCart:(state,action)=>{
            const id=action.payload
            state.cartItems=state.cartItems.filter((item)=>item._id!=id)
            localStorage.setItem('cartItems',JSON.stringify(state.cartItems))

        },

        increaseQty:(state,action)=>{
            const id=action.payload
            const item= state.cartItems.find((p)=>p._id==id)
            if(item) item.qty+=1
            localStorage.setItem('cartItems',JSON.stringify(state.cartItems))

        },

        decreaseQty:(state,action)=>{
            const id= action.payload
            const item= state.cartItems.find((p)=>p._id==id)
            if(item &&item.qty>1)item.qty-=1
            localStorage.setItem('cartItems',JSON.stringify(state.cartItems))

        },

        clearCart:(state)=>{
            state.cartItems=[]
        }
    },
})


export const {addtoCart,removeFromCart,increaseQty,decreaseQty,clearCart}=cartSlice.actions
export default cartSlice.reducer;