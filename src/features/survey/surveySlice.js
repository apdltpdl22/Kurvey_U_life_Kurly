import {createSlice} from '@reduxjs/toolkit';
const axios = require('axios');

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
    const response = await axios.get('api/v1/lifestyle/question', data);
    dispatch(getSurvey(response.data.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const getUserSurveyDetailAsync = data => async dispatch => {
  try {
    const accessToken = localStorage.getItem('userToken');
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': true,
      Authorization: `Bearer ${accessToken}`,
    };
    const response = await axios.get('api/v1/lifestyle', headers);
    console.log('response', response);
  } catch (err) {
    throw new Error(err);
  }
};

export const saveSurveyAsync =
  ({req, userId, close}) =>
  async dispatch => {
    try {
      const response = axios.post(`api/v1/lifestyle/${userId}`, {
        ...req,
        numberOfFamily: Number(req.numberOfFamily),
      });
      console.log(response);

      // confirm toast
      alert('설문조사가 저장되었습니다');
      return true;
    } catch (err) {
      alert('설문조사가 저장되지 않았습니다');
      return false;
    }
  };

export const {saveSurvey, getSurvey} = surveySlice.actions;
export const surveySelector = state => state.survey;
export default surveySlice.reducer;
