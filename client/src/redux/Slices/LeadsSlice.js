// src/redux/Slices/LeadsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  isLoading: false,
  error: null,
};

const leadSlice = createSlice({
  name: "leads",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchSuccess: (state, action) => {
      state.isLoading = false;
      state.list = action.payload;
      state.error = null;
    },
    createSuccess: (state, action) => {
      state.isLoading = false;
      state.list.push(action.payload);
    },
    updateSuccess: (state, action) => {
      state.isLoading = false;
      const index = state.list.findIndex((l) => l.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    clearLeads: (state) => {
      state.list = [];
    },
  },
});

export const {
  setLoading,
  fetchSuccess,
  createSuccess,
  updateSuccess,
  setError,
  clearLeads,
} = leadSlice.actions;

export default leadSlice.reducer;
