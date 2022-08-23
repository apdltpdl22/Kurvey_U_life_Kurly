import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import surveySlice from '../features/survey/surveySlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    survey: surveySlice,
  },
});
