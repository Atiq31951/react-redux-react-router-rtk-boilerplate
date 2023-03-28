import { createSlice } from "@reduxjs/toolkit";

import { API_STATUS } from "_/constants/api";

const initialState = {
  isLoggedIn: false,
  jwtToken: null,
  user_info: null,
  status: API_STATUS.IDLE,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUserInfo: (state, { userInfo, token }) => {
      state.user_info = userInfo;
      state.jwtToken = token;
    },
    logOutUser: (state) => {
      state = initialState;
    },
  },
});

export default authSlice;
