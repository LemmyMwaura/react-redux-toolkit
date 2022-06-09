import { createSlice } from "@reduxjs/toolkit";
import { orderCake } from "./cake";

const initialState = {
  numOfIceCreams : 20
}

export const iceCreamSlice = createSlice({
  name:'icecream',
  initialState,
  reducers:{
    orderIceCream : (state, action) => {
      state.numOfIceCreams -= action.payload
    },
    restockIceCream : (state, action) => {
      state.numOfIceCreams += parseInt(action.payload)
    }
  },
  // Maping the path
  // extraReducers:{
  //   ['cake/orderCake'] : (state) => {
  //     state.numOfIceCreams --
  //   }
  // }

  // Using a build function 
  extraReducers: (builder) => {
    builder.addCase(orderCake, state => {
      state.numOfIceCreams -- 
    })
  }
})

export const { orderIceCream, restockIceCream } = iceCreamSlice.actions
export default iceCreamSlice.reducer