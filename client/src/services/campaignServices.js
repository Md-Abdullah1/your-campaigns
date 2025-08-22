// src/services/campaignService.js
import apiClient from "./apiClient";
import {
  fetchSuccess,
  createSuccess,
  updateSuccess,
  setError,
  setLoading,
} from "../store/campaignSlice";
import { getAuthHeaders } from "@/helpers/GetAuthHeaders";

// Get all campaigns
export const getAllCampaigns = (dispatch) => {
  dispatch(setLoading());
  const headers = getAuthHeaders();

  apiClient
    .get("/campaigns", headers)
    .then((response) => {
      dispatch(fetchSuccess(response.data));
    })
    .catch((err) => {
      const message =
        err.response?.data?.message || "Failed to fetch campaigns";
      dispatch(setError(message));
    });
};

// Create a new campaign
export const createCampaign = (dispatch, campaignData) => {
  dispatch(setLoading());
  const headers = getAuthHeaders();

  apiClient
    .post("/campaigns", campaignData, headers)
    .then((response) => {
      dispatch(createSuccess(response.data));
    })
    .catch((err) => {
      const message =
        err.response?.data?.message || "Failed to create campaign";
      dispatch(setError(message));
    });
};

// Update existing campaign
export const updateCampaign = (dispatch, id, campaignData) => {
  dispatch(setLoading());
  const headers = getAuthHeaders();

  apiClient
    .put(`/campaigns/${id}`, campaignData, headers)
    .then((response) => {
      dispatch(updateSuccess(response.data));
    })
    .catch((err) => {
      const message =
        err.response?.data?.message || "Failed to update campaign";
      dispatch(setError(message));
    });
};
