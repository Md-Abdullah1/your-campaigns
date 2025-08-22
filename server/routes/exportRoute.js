// routes/exportRoutes.js
const express = require("express");
const { exportCampaigns } = require("../controllers/exportController");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/campaigns.csv", auth, exportCampaigns);

module.exports = router;
