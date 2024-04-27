import { createSlice } from '@reduxjs/toolkit';

const themes = {
  light: 'light',
  dark: 'dark',
};

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem('theme') || themes.light;
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
};

const initialState = {
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const { light, dark } = themes;
      state.theme = state.theme === dark ? light : dark;
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('theme', state.theme);
    },
  },
});
export const { toggleTheme } = userSlice.actions;

export default userSlice.reducer;
