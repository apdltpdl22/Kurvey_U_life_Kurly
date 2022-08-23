import {createSlice} from '@reduxjs/toolkit';
const axios = require('axios');
const API_URL = 'http://15.164.99.224:8080/api/v1';

const initialState = {
  data: [],
};

export const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    getSurvey: (state, action) => {
      state.data = action.payload;
      console.log('action.payload', action.payload);
      console.log('state.data', state.data);
    },
  },
});

export const getSurveyAsync = data => async dispatch => {
  try {
    const response = await axios.get(API_URL + '/lifestyle', data);
    dispatch(getSurvey(response.data.data));
  } catch (err) {
    throw new Error(err);
  }
};

// export const saveSurveyAsync = data => async dispatch => {
//   try {
//     // console.log(data);
//     const response = await axios.post(API_URL + '/lifestyle', data);
//     console.log(response);
//     dispatch(saveSurvey(response.data));
//   } catch (err) {
//     throw new Error(err);
//   }
// };

export const {saveSurvey, getSurvey} = surveySlice.actions;
export const surveySelector = state => state.survey;
export default surveySlice.reducer;
