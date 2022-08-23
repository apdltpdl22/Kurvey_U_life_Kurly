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

export const saveSurveyAsync = data => async dispatch => {
  try {
    // const userId = localStorage.getItem('userId');
    // const userToken = localStorage.getItem('userToken');

    // const headers = {
    //   'Content-Type': 'application/json; charset=UTF-8', 
    //   accept: 'application/json',
    //   Authorization: `Bearer ${userToken}`,
    //   'Accept-Version': 'production',
    // };

    // const response = await axios.post( + `${API_URL}/lifestyle/${userId}`, data, headers);
    // console.log(response);

    // confirm toast
    alert('설문조사가 저장되었습니다')
  } catch (err) {
    alert('설문조사가 저장되지 않았습니다')
    throw new Error(err);
  }
};

export const {saveSurvey, getSurvey} = surveySlice.actions;
export const surveySelector = state => state.survey;
export default surveySlice.reducer;
