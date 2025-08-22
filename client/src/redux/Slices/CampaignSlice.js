// src/store/campaignSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  current: null,
  isLoading: false,
  error: null,
};

const campaignSlice = createSlice({
  name: "campaigns",
  initialState,
  reducers: {
    // Set loading state
    setLoading: (state) => {
      state.isLoading = true;
      state.error = null;
    },

    // On successful fetch
    fetchSuccess: (state, action) => {
      state.isLoading = false;
      state.list = action.payload;
      state.error = null;
    },

    // On fetch/create/update/delete fail
    setError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Add new campaign to list
    createSuccess: (state, action) => {
      state.isLoading = false;
      state.list.push(action.payload);
      state.error = null;
    },

    // Update existing campaign
    updateSuccess: (state, action) => {
      state.isLoading = false;
      const index = state.list.findIndex((c) => c._id === action.payload._id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
      state.current = null;
    },

    // Remove campaign
    deleteSuccess: (state, action) => {
      state.list = state.list.filter((c) => c._id !== action.payload);
    },

    // Set current campaign (for edit)
    setCurrent: (state, action) => {
      state.current = action.payload;
    },

    // Clear current
    clearCurrent: (state) => {
      state.current = null;
    },
  },
});

export const {
  setLoading,
  fetchSuccess,
  setError,
  createSuccess,
  updateSuccess,
  deleteSuccess,
  setCurrent,
  clearCurrent,
} = campaignSlice.actions;

export default campaignSlice.reducer;
