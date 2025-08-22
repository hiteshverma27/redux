import { createSlice } from "@reduxjs/toolkit"

const initialState = {anotherValue:1}

const anotherCounterSlice = createSlice({
    name: "anotherCounter",
    initialState,
    reducers:{
        anotherIncrement:(state)=>{
            state.anotherValue+=2
        },
        anotherDecrement:(state)=>{
            state.anotherValue-=2
        },
        anotherIncrementByAmount:(state, action)=>{
            state.anotherValue+=action.payload
        }
    }
})

export const {anotherIncrement,anotherDecrement, anotherIncrementByAmount}=anotherCounterSlice.actions

export default anotherCounterSlice.reducer