import { createSlice } from "@reduxjs/toolkit"

// const initialState= {
//     count : 0,
// }
const initialState = [];
const counterSliceTow = createSlice({
    name: 'counter',
    // initialState: initialState,
    initialState,
    
    reducers:{

       
        incrementNumber : function(state, action){
            // state.count = state.count += 1;
            state.push(action.payload);
        },
        decrementNumber : function(state, action){
            // state.count = state.count -= 1;
           return ( state.filter(item=> item.id !== action.payload))
        },
       
    }
});

export const {incrementNumber, decrementNumber } = counterSliceTow.actions;
export default counterSliceTow.reducer;