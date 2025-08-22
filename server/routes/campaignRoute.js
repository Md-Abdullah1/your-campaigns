// routes/campaignRoutes.js
const express = require("express");
const {
  getAllCampaigns,
  createCampaign,
  getCampaign,
  updateCampaign,
  deleteCampaign,
} = require("../controllers/campaignController");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", auth, getAllCampaigns);
router.post("/", auth, createCampaign);
router.get("/:id", auth, getCampaign);
router.put("/:id", auth, updateCampaign);
router.delete("/:id", auth, deleteCampaign);

module.exports = router;
