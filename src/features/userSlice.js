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

const checkTheme = () => {
  const theme = getThemeFromLocalStorage()
  if (theme === 'light') {
    return false
  } else {
    return true
  }
};

const initialState = {
  theme: getThemeFromLocalStorage(),
  isDarkTheme: checkTheme(),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const { light, dark } = themes;
          state.theme = state.theme === light ? dark : light;
          if (state.theme === dark) {
              state.isDarkTheme = true;
          } else {
             state.isDarkTheme = false;
          }
      
      console.log(state.isDarkTheme);
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('theme', state.theme);
    },
  },
});
export const { toggleTheme } = userSlice.actions;

export default userSlice.reducer;
