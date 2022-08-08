/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
  error: null,
  normalizedData: {
    users: {},
    albums: {},
    photos: {},
  },
  baseData: {
    users: [],
    albums: [],
    photos: [],
  },
};

export const mainSlice = createSlice({
  name: 'mainSlice',
  initialState,
  reducers: {
    saveFetchedData: (state, { payload }) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isLoading = false;
      state.baseData = payload.apiResponse;
      state.normalizedData = payload.normalizedData;
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveFetchedData } = mainSlice.actions;

// The function below is called a selector and allows us to select a value from the state
export const getIsLoading = (state) => state.main.isLoading;
export const getError = (state) => state.main.error;
export const getNormalizedData = (state) => state.main.normalizedData;
export const getBaseData = (state) => state.main.baseData;

export default mainSlice.reducer;
