


import { createSlice } from "@reduxjs/toolkit";

const tokenFromStorage= typeof window!=="undefined"?localStorage.getItem("token"):null
const userFromStorage= typeof window!=="undefined"?JSON.parse(localStorage.getItem("")):null

const authSlice= createSlice({
    name:"auth",
    initialState:{
        token:tokenFromStorage,
        user:userFromStorage
    },
    reducers:{
        setCredentials:(state,action)=>{
state.token=action.payload.token
state.user=action.payload.user
if(typeof  window !=="undefined"){

    localStorage.setItem("token",action.payload.token)
    localStorage.setItem("user",JSON.stringify(action.payload.user))
}

        },

        logOut:(state)=>{
            state.token=null,
            state.user=null

          if (typeof window !== "undefined") {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }
        }
    }
})

export const {setCredentials,logOut}=authSlice.actions
export default authSlice.reducer