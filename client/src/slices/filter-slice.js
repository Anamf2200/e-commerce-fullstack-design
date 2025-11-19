import { createSlice } from "@reduxjs/toolkit";


const initialState={
    name:'',
    category:''
}

const filterSlice= createSlice({
    name:'filters',
    initialState,
    reducers:{
        setFilters:(state,action)=>{
            state.name=action.payload.name
            state.category=action.payload.category
        }
    }
})

export const {setFilters}=filterSlice.actions
export default filterSlice.reducer