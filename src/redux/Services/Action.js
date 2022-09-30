import { createSlice } from "@reduxjs/toolkit"

// const initialState
//  = {
//     count : 0,
//     addItems: 0,
// }
const initialState = [];
const counterSlice = createSlice({
    name: 'card',
    // initialState: initialState,
    initialState,
    
    reducers:{

       
        increment : function(state, action){
            // state.count = state.count += action.payload;
            state.push(action.payload);
        },
        decrement : function(state, action){
            // state.count = state.count -= 1;
           return ( state.filter(item=> item.id !== action.payload))
        },
       
    }
});

export const {increment, decrement, } = counterSlice.actions;
export default counterSlice.reducer;