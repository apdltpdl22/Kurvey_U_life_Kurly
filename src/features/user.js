import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
  userName: null,
  userId: null,
  jwtToken: null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginAccount(state, action) {
      state.isLogged = true;
      state.userName = action.payload.userName;
      state.userId = action.payload.userId;
      state.jwtToken = action.payload.jwtToken;
      console.log(state)
      console.log(action.payload)
    },
    logoutAccount(state) {
      state.isLogged = false;
      state.userName = null;
      state.userId = null;
      state.jwtToken = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginAccount, logoutAccount } = userSlice.actions;
export const selectUser = (state) => state.user
export default userSlice.reducer