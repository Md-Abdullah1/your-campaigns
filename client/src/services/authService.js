// src/services/authService.js
import apiClient from "./apiClient";
import {
  setAuthSuccess,
  setAuthFail,
  setLoading,
} from "../redux/Slices/AuthSlice";

// Register User
export const registerUser = (dispatch, userData) => {
  dispatch(setLoading());
  apiClient
    .post("/auth/register", userData)
    .then((response) => {
      const { token, user } = response.data;
      dispatch(setAuthSuccess({ token, user }));
    })
    .catch((err) => {
      const message = err.response?.data?.message || "Registration failed";
      dispatch(setAuthFail(message));
    });
};

// Login User
export const loginUser = (dispatch, credentials) => {
  dispatch(setLoading());
  apiClient
    .post("/auth/login", credentials)
    .then((response) => {
      const { token, user } = response.data;
      dispatch(setAuthSuccess({ token, user }));
    })
    .catch((err) => {
      const message =
        err.response?.data?.message || "Invalid email or Password";
      dispatch(setAuthFail(message));
    });
};
