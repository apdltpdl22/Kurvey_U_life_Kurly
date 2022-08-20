import { configureStore } from '@reduxjs/toolkit'
import LoggedStateReducer from '../features/user'

export const store = configureStore({
  reducer: {
    isLogged : LoggedStateReducer,
  },
});
