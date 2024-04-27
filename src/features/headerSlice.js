import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    addTitle: (state, action) => {
      state.title = action.payload;
    },
  },
});

export const { addTitle } = headerSlice.actions;

export default headerSlice.reducer;
