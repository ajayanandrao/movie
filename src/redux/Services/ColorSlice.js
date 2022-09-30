import { createSlice } from "@reduxjs/toolkit"

const initialState = [{color: 'red'}]

const colorSlice = createSlice({
    name: "color",
    initialState,

    reducers:{
        addColor:function(state, action){
            state.color("red");
        }
    }
});


export const {addColor} = colorSlice.actions;
export default colorSlice.reducer; 