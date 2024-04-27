import { configureStore } from '@reduxjs/toolkit';
import headerReducer from './features/headerSlice'
import userReducer from './features/userSlice'


export const store = configureStore({
    reducer: {
        header: headerReducer,
        user: userReducer,
    },
});