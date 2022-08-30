import {createSlice} from '@reduxjs/toolkit';
const axios = require('axios');

const initialState = {
  data: [],
  mySurvey: {
    hasBaby: false,
    hasCat: false,
    hasDog: false,
    hasPlant: false,
    numberOfFamily: 0,
    selects: [],
  },
};

export const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    getSurvey: (state, action) => {
      state.data = action.payload;
    },
    setMySurvey: (state, action) => {
      state.mySurvey = action.payload;
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
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const response = await axios.get('api/v1/lifestyle', config);
    dispatch(setMySurvey(response.data.data));
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

export const {saveSurvey, getSurvey, setMySurvey} = surveySlice.actions;
export const surveySelector = state => state.survey;
export const mySurveySelector = state => state.survey.mySurvey;
export default surveySlice.reducer;
