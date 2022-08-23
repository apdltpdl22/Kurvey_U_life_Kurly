import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import surveySlice from '../features/survey/surveySlice'
import searchSlice from '../features/search/searchSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    survey: surveySlice,
    search: searchSlice
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),

});
