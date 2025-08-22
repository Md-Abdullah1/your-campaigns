// routes/leadRoutes.js
const express = require("express");
const {
  getLeadsByCampaign,
  createLead,
  updateLead,
  getAllLeads,
} = require("../controllers/leadController");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

// GET /api/leads/campaign/:campaignId
router.get("/campaign/:campaignId", auth, getLeadsByCampaign);

// POST /api/leads (e.g., from landing page form)
router.post("/create", createLead); // Public or protected?

// PUT /api/leads/:id (update status)
router.put("/:id", auth, updateLead);

// get all leads
router.get("/", auth, getAllLeads);

module.exports = router;
