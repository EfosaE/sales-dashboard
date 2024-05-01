import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  isDropDown: false,
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    addTitle: (state, action) => {
      state.title = action.payload;
    },
    toggleDropDown: (state) => {
      state.isDropDown = !state.isDropDown;
    },
  },
});

export const { addTitle, toggleDropDown } = headerSlice.actions;

export default headerSlice.reducer;
