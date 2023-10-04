import { createSlice } from "@reduxjs/toolkit"

const intialvalues=[]
const addP=createSlice({
    initialState:intialvalues,
    name:"adding-to-cart",
    reducers:{
        add:(state,action)=>state=[...state,action.payload]
    }
})
export const {add}=addP.actions;
export default addP.reducer;