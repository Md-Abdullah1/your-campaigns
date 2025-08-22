// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slices/AuthSlice";
import campaignReducer from "../Slices/CampaignSlice";
import kpiReducer from "../Slices/KpiSlice";
import LeadsReducer from "../Slices/LeadsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      campaigns: campaignReducer,
      kpi: kpiReducer,
      leads: LeadsReducer,
    },
  });
};

export const store = makeStore();
export const RootState = store.getState;
export const AppDispatch = store.dispatch;
