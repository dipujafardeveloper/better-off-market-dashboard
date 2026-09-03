/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  user: null,
  token: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;

      state.user = user;
      state.token = token;

      // Store token in Cookies for middleware authentication
      Cookies.set("betteroffmarket-dashboard-access-token", token, {
        path: "/",
        expires: 30,
      });

      // Cookies.set("betteroffmarket-dashboard-refreshToken", refreshToken, {
      //   path: "/",
      //   expires: 365,
      // });
    },

    logout: (state) => {
      state.user = null;
      state.token = null;

      // Remove token from cookie
      Cookies.remove("betteroffmarket-dashboard-access-token", { path: "/" });
      // Cookies.remove("betteroffmarket-dashboard-refreshToken", { path: "/" });
    },
  },
});

// selectors
export const selectUser = (state: any) => state.auth.user;
export const selectToken = (state: any) => state.auth.token;

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
