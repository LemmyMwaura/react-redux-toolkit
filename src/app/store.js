
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user';
import themeReducer from '../features/theme';
import cakeReducer  from '../features/cake';
import iceCreamReducer from '../features/icecream';
import fetchUserReducer from '../features/userSlice';
// import { crreateLogger } from 'redux-logger';

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    fetchUser: fetchUserReducer,
  }
})

export default store
