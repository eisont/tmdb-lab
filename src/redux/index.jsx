import { configureStore, createSlice } from '@reduxjs/toolkit';

export const isSearchSlice = createSlice({
  name: 'isSearch',
  initialState: false,
  reducers: {
    toggleSearchMode(_, action) {
      return action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    toggleSearchMode: isSearchSlice.reducer,
  },
});
