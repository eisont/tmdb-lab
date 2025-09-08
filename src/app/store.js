import { configureStore, createSlice } from '@reduxjs/toolkit';

export const searchModeSlice = createSlice({
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
    toggleSearchMode: searchModeSlice.reducer,
  },
});
