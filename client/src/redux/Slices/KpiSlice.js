// src/store/kpiSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalCampaigns: 0,
  activeCampaigns: 0,
  totalSpend: 0,
  totalConversions: 0,
  chartData: {
    labels: [],
    datasets: [
      {
        label: "Conversions",
        data: [],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
      },
    ],
  },
  isLoading: false,
  error: null,
};

const kpiSlice = createSlice({
  name: "kpi",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },
    setKPIData: (state, action) => {
      state.isLoading = false;
      state.totalCampaigns = action.payload.totalCampaigns;
      state.activeCampaigns = action.payload.activeCampaigns;
      state.totalSpend = action.payload.totalSpend;
      state.totalConversions = action.payload.totalConversions;
      state.error = null;
    },
    setChartData: (state, action) => {
      state.chartData = action.payload;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setLoading, setKPIData, setChartData, setError } =
  kpiSlice.actions;
export default kpiSlice.reducer;
