import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import surveySlice from '../features/survey/surveySlice';
import searchSlice from '../features/search/searchSlice';
import productSlice from '../features/product/productSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    survey: surveySlice,
    search: searchSlice,
    product: productSlice,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
