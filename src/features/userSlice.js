import { createSlice } from '@reduxjs/toolkit';
import supabase from '../utils/supabase';
import { toast } from 'react-toastify';

const themes = {
  light: 'light',
  dark: 'dark',
};

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem('theme') || themes.light;
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
};

async function signOut() {
  const { error } = await supabase.auth.signOut();
}

function getUserFromLocalStorage() {
 return JSON.parse(localStorage.getItem('_user')) || null;
}



const checkTheme = () => {
  const theme = getThemeFromLocalStorage();
  if (theme === 'light') {
    return false;
  } else {
    return true;
  }
};

const initialState = {
  theme: getThemeFromLocalStorage(),
  isDarkTheme: checkTheme(),
  user: getUserFromLocalStorage(),
  isSideBarOpen: false
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
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('theme', state.theme);
    },
    loginUser: (state, action) => {
      const user = action.payload
      state.user = user
      localStorage.setItem('_user', JSON.stringify(user));
    },

    logOutUser: (state) => {
      signOut();
      localStorage.removeItem('_user');
      state.user=null
      toast.success('Logged out successfully');
    },
    toggleSideBar: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen
    }

  },
});
export const { toggleTheme, loginUser, logOutUser, toggleSideBar} = userSlice.actions;

export default userSlice.reducer;
