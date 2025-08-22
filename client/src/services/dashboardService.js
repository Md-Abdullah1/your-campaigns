import apiClient from "./apiClient";

// Later: src/services/dashboardService.js
export const fetchKPIs = (dispatch) => {
  dispatch(setLoading());
  apiClient
    .get("/dashboard/kpis", getAuthHeaders())
    .then((response) => {
      dispatch(setKPIData(response.data));
    })
    .catch((err) => {
      dispatch(setError(err.response?.data?.message || "Failed to load KPIs"));
    });
};
