// src/services/leadService.js
import apiClient from "./apiClient";
import { fetchSuccess, setError, setLoading } from "../redux/Slices/LeadsSlice";
import { getAuthHeaders } from "@/helpers/GetAuthHeaders";

export const getLeadsByCampaign = (dispatch, campaignId) => {
  dispatch(setLoading());
  apiClient
    .get(`/leads/campaign/${campaignId}`, getAuthHeaders())
    .then((response) => {
      dispatch(fetchSuccess(response.data));
    })
    .catch((err) => {
      const message = err.response?.data?.message || "Failed to fetch leads";
      dispatch(setError(message));
    });
};

export const getAllLeads = (dispatch) => {
  dispatch(setLoading());
  apiClient
    .get("/leads", getAuthHeaders()) // GET /api/leads
    .then((response) => {
      dispatch(fetchSuccess(response.data));
    })
    .catch((err) => {
      const message = err.response?.data?.message || "Failed to fetch leads";
      dispatch(setError(message));
    });
};
