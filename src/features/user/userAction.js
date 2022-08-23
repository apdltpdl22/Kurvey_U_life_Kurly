import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import jwt_decode from "jwt-decode";

export const userLogin = createAsyncThunk(
  '/api/v1/signin',
  async ({ userId, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const res = await axios.post(
        '/api/v1/signin',
        { userId, password },
        config
      )
      // store user's token in local storage
      // localStorage.setItem('userToken', res.data.userToken)
      const words = res.headers.authorization.split(' ')
      let userToken = words[1]

      const decode = jwt_decode(userToken);

      localStorage.setItem('userToken', userToken)
      localStorage.setItem('userId', decode.sub);
      
      return {...res.data, decode};
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const registerUser = createAsyncThunk(
  '/api/v1/signup',
  async ({ birthDay, gender, name, password, userId }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      await axios.post(
        '/api/v1/signup',
        { birthDay, gender, name, password, userId },
        config
      )
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const getUserDetails = createAsyncThunk(
  'user/getUserDetails',
  async (arg, { getState, rejectWithValue }) => {
    try {
      // get user data from store
      const { user } = getState()

      // configure authorization header with user's token
      const config = {
        headers: {
          Authorization: `Bearer ${user.userToken}`,
        },
      }

      const { data } = await axios.get(`/api/user/profile`, config)
      return data
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)