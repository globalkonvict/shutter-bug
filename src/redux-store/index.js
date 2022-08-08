import { configureStore } from '@reduxjs/toolkit';
import mainReducer from 'redux-store/slice/mainSlice';

const store = configureStore({
  reducer: {
    main: mainReducer,
  },
});

export default store;
