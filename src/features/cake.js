import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCakes : 10
}

export const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers:{
    orderCake:(state, action) => {
      state.numOfCakes -= action.payload
    },
    restockCake:(state, action) => {
      state.numOfCakes += parseInt(action.payload)
    }
  }
})

export const { orderCake, restockCake } = cakeSlice.actions
export default cakeSlice.reducer
